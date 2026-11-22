import Link from "next/link";
export function Brand({footer=false}:{footer?:boolean}){return <Link href="/" className={"brand-lockup logo-image"+(footer?" footer-brand":"")} aria-label="Center Cut Co. home"><img src="/center-cut-logo.svg" alt="Center Cut Golf Simulator — Play. Practice. Compete." width={footer?175:124} height={footer?160:114}/></Link>}
