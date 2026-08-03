"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  X,
  ChevronDown,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { WhatsAppIcon } from "./icons";

const CALL_LINK = "tel:+917736522210";
const WHATSAPP_LINK =
  "https://wa.me/919400587885?text=Hi%20NavPath%20Academy%2C%20I%20need%20admission%20guidance.";

const INPUT_CLASS =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const SELECT_CLASS =
  "flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

function randomInt() {
  return 1 + Math.floor(Math.random() * 9);
}

const SHEET_URL = process.env.NEXT_PUBLIC_ENQUIRY_SHEET_URL;
const STATICFORMS_URL = "https://api.staticforms.dev/submit";
const STATICFORMS_KEY = "sf_29c67217e684744a1d940bc9";

async function sendEnquiry(payload) {
  const body = new URLSearchParams(payload);
  if (SHEET_URL) {
    const res = await fetch(SHEET_URL, { method: "POST", mode: "cors", body });
    const text = await res.text();
    if (!res.ok || !text.includes("OK")) {
      throw new Error("Sheet submit failed");
    }
    return;
  }
  const res = await fetch(STATICFORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, apiKey: STATICFORMS_KEY, replyTo: payload.email }),
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error("Enquiry submit failed");
  }
}

export default function EnquiryDialog({ open, onOpenChange, title, subtitle, enquiryType }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [a, setA] = useState(randomInt);
  const [b, setB] = useState(randomInt);
  const [answer, setAnswer] = useState("");
  const nameRef = useRef(null);

  const solved = answer.trim() !== "" && Number(answer.trim()) === a + b;

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    setSubmitting(false);
    setError("");
    setA(randomInt());
    setB(randomInt());
    setAnswer("");
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => nameRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  const regenerate = () => {
    setA(randomInt());
    setB(randomInt());
    setAnswer("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const form = new FormData(e.currentTarget);
      const payload = {
        name: form.get("name"),
        phone: form.get("phone"),
        email: form.get("email"),
        passed_year: form.get("passed_year"),
        age: form.get("age"),
        marks_above_60: form.get("marks_above_60"),
        preferred_course: form.get("preferred_course"),
        state: form.get("state"),
        message: form.get("message"),
        enquiry_type: enquiryType || title || "Admission enquiry",
        source_page: window.location.pathname + window.location.search,
        submitted_at: new Date().toISOString(),
      };
      await sendEnquiry(payload);
      setSubmitted(true);
    } catch (err) {
      console.error("Enquiry submit failed:", err);
      setError(
        "Sorry, we could not send your enquiry right now. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || "Admission enquiry"}
        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-white/15 bg-background p-6 shadow-2xl motion-safe:animate-scale-in sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <h3 className="font-display pr-8 text-xl font-bold text-foreground md:text-2xl">
          {title || "Admission enquiry"}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {subtitle ||
            "Send your details once. The team can respond with eligibility, course fit, batch options, and next steps."}
        </p>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-border bg-muted/60 p-6 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-secondary" />
            <p className="mt-3 font-semibold text-foreground">Enquiry received</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Thank you for reaching out. A NavPath counsellor will get back to you shortly. For
              anything urgent, call or WhatsApp below.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white transition-colors hover:bg-[#1fb457]"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="enq-name"
                  name="name"
                  ref={nameRef}
                  placeholder="Your Name"
                  required
                  className={INPUT_CLASS}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="enq-phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="enq-email">
                Email Address *
              </label>
              <input
                type="email"
                id="enq-email"
                name="email"
                placeholder="your@email.com"
                required
                className={INPUT_CLASS}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-passed-year">
                  +2 Passed Year *
                </label>
                <input
                  type="number"
                  id="enq-passed-year"
                  name="passed_year"
                  inputMode="numeric"
                  placeholder="2026"
                  required
                  className={INPUT_CLASS}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-age">
                  Age *
                </label>
                <input
                  type="number"
                  id="enq-age"
                  name="age"
                  inputMode="numeric"
                  placeholder="18"
                  required
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-marks">
                  +2 Marks Above 60% *
                </label>
                <div className="relative">
                  <select id="enq-marks" name="marks_above_60" required className={SELECT_CLASS}>
                    <option value="" disabled selected>
                      Yes / No
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="enq-course">
                  Preferred Course *
                </label>
                <div className="relative">
                  <select id="enq-course" name="preferred_course" required className={SELECT_CLASS}>
                    <option value="" disabled selected>
                      Select course
                    </option>
                    <option value="DNS">DNS</option>
                    <option value="B.Sc Nautical Science">B.Sc Nautical Science</option>
                    <option value="Marine Engineering">Marine Engineering</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="enq-state">
                State *
              </label>
              <div className="relative">
                <select id="enq-state" name="state" required className={SELECT_CLASS}>
                  <option value="" disabled selected>
                    Select state
                  </option>
                  {STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="enq-msg">
                Message (Optional)
              </label>
              <textarea
                id="enq-msg"
                name="message"
                rows={3}
                placeholder="Tell us about your goals or any questions you have..."
                className={`${INPUT_CLASS} min-h-[80px] resize-none`}
              />
            </div>

            <fieldset className="rounded-xl border border-border bg-muted/40 p-4">
              <legend className="px-1 text-sm font-semibold text-foreground">Security check *</legend>
              <div className="flex flex-wrap items-center gap-2">
                <div
                  id="enq-math-captcha-question"
                  className="inline-flex h-10 min-w-28 items-center justify-center rounded-lg bg-primary px-4 font-display text-lg font-bold tracking-wider text-primary-foreground shadow-sm"
                  aria-label={`What is ${a} plus ${b}?`}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {a} + {b}
                </div>
                <span className="font-semibold text-muted-foreground" aria-hidden="true">
                  =
                </span>
                <label className="sr-only text-sm font-medium" htmlFor="enq-math-captcha">
                  Answer to the security question
                </label>
                <input
                  type="text"
                  id="enq-math-captcha"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="off"
                  placeholder="Answer"
                  required
                  aria-invalid={!solved && answer.trim() !== ""}
                  aria-describedby="enq-math-captcha-question enq-math-captcha-status"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={`${INPUT_CLASS} w-28`}
                />
                <button
                  type="button"
                  aria-label="Get a new math question"
                  title="Get a new math question"
                  onClick={regenerate}
                  className="inline-flex h-10 w-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-accent/20 hover:text-accent-foreground"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              <p
                id="enq-math-captcha-status"
                className="mt-2 text-xs text-muted-foreground"
                aria-live="polite"
              >
                {solved
                  ? "Verified — the submit button is now enabled."
                  : "Solve the question to enable the submit button."}
              </p>
            </fieldset>

            {error && (
              <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!solved || submitting}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-secondary font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-glow disabled:pointer-events-none disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send enquiry <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="h-4 w-4" /> Call +91 77365 22210
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white transition-colors hover:bg-[#1fb457]"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
