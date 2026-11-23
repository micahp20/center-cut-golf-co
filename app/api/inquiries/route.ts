import {NextRequest,NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";
export const runtime="nodejs";
const types=["Corporate","Wedding","Birthday","Private Party","Golf Tournament","Fundraiser","Other"];
function str(x:unknown,max:number){return typeof x==="string"?x.trim().slice(0,max):""}
type InquiryEmail = {
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  city: string;
  guest_count: number;
  notes: string;
};

type EmailMessage = {
  to: string[];
  reply_to: string;
  subject: string;
  text: string;
};

async function sendEmail(apiKey: string, from: string, message: EmailMessage, kind: string) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, ...message }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) console.error("Inquiry email delivery failed", kind, response.status);
  } catch {
    console.error("Inquiry email delivery unavailable", kind);
  }
}

async function sendInquiryEmails(inquiry: InquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  const inbox = process.env.BOOKING_ALERT_EMAIL;
  if (!apiKey || !from || !inbox) return;

  const details = Object.entries(inquiry).map(([label, value]) => `${label}: ${value}`).join("\n");
  await Promise.all([
    sendEmail(apiKey, from, {
      to: [inbox],
      reply_to: inquiry.email,
      subject: "New Center Cut Golf Co. inquiry",
      text: `A new inquiry was received:\n\n${details}\n\nSign in to Team login to update its status.`,
    }, "team alert"),
    sendEmail(apiKey, from, {
      to: [inquiry.email],
      reply_to: inbox,
      subject: "Center Cut Golf Co. received your request",
      text: "Thanks for reaching out to Center Cut Golf Co. We received your request. Our team will follow up about availability and pricing. Your event is confirmed separately.\n\nCenter Cut Golf Co.",
    }, "customer confirmation"),
  ]);
}

export async function POST(req:NextRequest){
 try{
  const origin=req.headers.get("origin");if(origin&&origin!==req.nextUrl.origin)return NextResponse.json({error:"Invalid request origin"},{status:403});
  const length=Number(req.headers.get("content-length")||0);if(length>12000)return NextResponse.json({error:"Request too large"},{status:413});
  const body=await req.json();if(!body||typeof body!=="object"||Array.isArray(body))return NextResponse.json({error:"Invalid request"},{status:400});
  if(body.website)return NextResponse.json({ok:true},{status:202});
  const elapsed=Date.now()-Number(body.form_started_at);
  if(!Number.isFinite(elapsed)||elapsed<3000||elapsed>86400000)return NextResponse.json({error:"Please reload the form and try again."},{status:400});
  const name=str(body.name,120),email=str(body.email,254),phone=str(body.phone,40),event_type=str(body.event_type,60),city=str(body.city,160),notes=str(body.notes,3000),event_date=str(body.event_date,10),guest_count=Number(body.guest_count),duration_hours=body.duration_hours?Number(body.duration_hours):null;
  if(!name||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!phone||!types.includes(event_type)||!city||!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(event_date)||!Number.isInteger(guest_count)||guest_count<1||guest_count>10000||(duration_hours!==null&&(!Number.isFinite(duration_hours)||duration_hours<1||duration_hours>24)))return NextResponse.json({error:"Please check the required fields"},{status:400});
  const d=new Date(event_date+"T12:00:00Z");if(Number.isNaN(d.getTime())||d.toISOString().slice(0,10)!==event_date||event_date<new Date().toISOString().slice(0,10))return NextResponse.json({error:"Choose a valid future date"},{status:400});
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if(!url||!key)return NextResponse.json({error:"Booking is temporarily unavailable."},{status:503});
  const db=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
  const {error}=await db.from("inquiries").insert({name,email,phone,event_type,city,event_date,guest_count,duration_hours,notes});
  if(error){console.error("Inquiry insert failed",error.code);return NextResponse.json({error:"Unable to save request. Please try again."},{status:503})}
  await sendInquiryEmails({name,email,phone,event_type,event_date,city,guest_count,notes});
  return NextResponse.json({ok:true},{status:201});
 }catch{return NextResponse.json({error:"Invalid request"},{status:400})}
}