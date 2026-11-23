"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

const eventTypes = ["Corporate", "Wedding", "Birthday", "Private Party", "Golf Tournament", "Fundraiser", "Other"];

export default function QuoteForm({ eventType }: { eventType?: string }) {
  const startedAt = useRef(Date.now());
  const sending = useRef(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ message: string; error: boolean }>();
  const selectedType = eventType && eventTypes.includes(eventType) ? eventType : "";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setBusy(true);
    setStatus(undefined);

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form_started_at", String(startedAt.current));

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        setStatus({ message: result?.error || "We couldn’t send your request. Please try again or call us.", error: true });
        return;
      }
      form.reset();
      startedAt.current = Date.now();
      setStatus({ message: "Request received! We’ll email you to follow up about availability and pricing.", error: false });
    } catch {
      setStatus({ message: "We couldn’t send your request. Please try again or call us.", error: true });
    } finally {
      sending.current = false;
      setBusy(false);
    }
  }

  return (
    <form className="form quote-form" onSubmit={submit} aria-labelledby="quote-details" aria-busy={busy}>
      <h2 id="quote-details">Tell us about your event</h2>
      <p className="quote-required">Fields marked * are required.</p>
      <div className="twocol">
        <label>Full name *<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <div className="twocol">
        <label>Phone *<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label>
        <label>
          Event type *
          <select name="event_type" required defaultValue={selectedType}>
            <option value="" disabled>Choose one</option>
            {eventTypes.map(type => <option key={type}>{type}</option>)}
          </select>
        </label>
      </div>
      <div className="twocol">
        <label>Preferred date *<input name="event_date" type="date" required min={new Date().toISOString().slice(0, 10)} /></label>
        <label>Estimated guests *<input name="guest_count" type="number" min={1} max={10000} required /></label>
      </div>
      <div className="twocol">
        <label>City or venue *<input name="city" required maxLength={160} /></label>
        <label>Approximate duration (hours)<input name="duration_hours" type="number" min={1} max={24} step={0.5} /></label>
      </div>
      <label>
        Anything else we should know?
        <textarea name="notes" maxLength={3000} placeholder="Indoor or outdoor venue, timing, or special requests" />
      </label>
      <div hidden aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button className="button quote-submit" disabled={busy}>
        {busy ? "Sending your request…" : "Request My Quote"}
      </button>
      <div role="status" aria-atomic="true" className={status ? "notice" + (status.error ? " error" : "") : undefined}>
        {status?.message}
      </div>
      <small>By submitting, you agree that Center Cut Golf Co. may contact you about your inquiry. <a href="/privacy">Privacy Policy</a>.</small>
    </form>
  );
}
