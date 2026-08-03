"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
} from "lucide-react";

const INPUT_CLASS =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base";

const SELECT_CLASS =
  "flex h-10 w-full cursor-pointer appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-base";

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

export default function ContactForm() {
  const [a, setA] = useState(randomInt);
  const [b, setB] = useState(randomInt);
  const [answer, setAnswer] = useState("");

  const solved = answer.trim() !== "" && Number(answer.trim()) === a + b;

  const regenerate = () => {
    setA(randomInt());
    setB(randomInt());
    setAnswer("");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-lg md:p-10">
      <div className="mb-5 flex items-center gap-3 md:mb-8">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-secondary md:h-12 md:w-12">
          <Send className="h-5 w-5 text-secondary-foreground md:h-6 md:w-6" />
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-primary md:text-2xl">
            Send Us a Message
          </h2>
          <p className="text-xs text-muted-foreground md:text-sm">
            The admissions team will respond with the next step.
          </p>
        </div>
      </div>

      <form
        action="https://api.staticforms.dev/submit"
        method="POST"
        className="space-y-4 md:space-y-6"
      >
        <input type="hidden" name="apiKey" value="sf_29c67217e684744a1d940bc9" />
        <input
          type="hidden"
          name="redirectTo"
          value="https://www.navpathacademy.com/contact?enquiry=sent"
        />
        <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />
        <input type="hidden" name="enquiry_type" value="Contact page admission enquiry" />
        <input type="hidden" name="source_page" value="/contact" />
        <input type="hidden" name="qualification" value="" />
        <input type="hidden" name="location" value="" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className={INPUT_CLASS}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="whatsappNumber">
              Phone Number *
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            className={INPUT_CLASS}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="passedYear">
              +2 Passed Year *
            </label>
            <input
              type="number"
              id="passedYear"
              name="passed_year"
              inputMode="numeric"
              placeholder="2026"
              required
              className={INPUT_CLASS}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="age">
              Age *
            </label>
            <input
              type="number"
              id="age"
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
            <label className="text-sm font-medium" htmlFor="marks-above-60">
              +2 Marks Percentage Above 60% *
            </label>
            <div className="relative">
              <select id="marks-above-60" name="marks_above_60" required className={SELECT_CLASS}>
                <option value="" disabled selected>
                  Select Yes or No
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="preferred-course">
              Preferred Course *
            </label>
            <div className="relative">
              <select
                id="preferred-course"
                name="preferred_course"
                required
                className={SELECT_CLASS}
              >
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
          <label className="text-sm font-medium" htmlFor="state">
            State *
          </label>
          <div className="relative">
            <select id="state" name="state" required className={SELECT_CLASS}>
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
          <label className="text-sm font-medium" htmlFor="message">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your goals or any questions you have..."
            rows={3}
            className={`${INPUT_CLASS} min-h-[80px] resize-none`}
          />
        </div>

        <fieldset className="rounded-xl border border-border bg-muted/40 p-4">
          <legend className="px-1 text-sm font-semibold text-foreground">Security check *</legend>
          <div className="flex flex-wrap items-center gap-2">
            <div
              id="contact-math-captcha-question"
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
            <label
              className="sr-only text-sm font-medium"
              htmlFor="contact-math-captcha"
            >
              Answer to the security question
            </label>
            <input
              type="text"
              id="contact-math-captcha"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="off"
              placeholder="Answer"
              required
              aria-invalid={!solved && answer.trim() !== ""}
              aria-describedby="contact-math-captcha-question contact-math-captcha-status"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={`${INPUT_CLASS} w-28 text-base md:text-sm`}
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
          <p id="contact-math-captcha-status" className="mt-2 text-xs text-muted-foreground" aria-live="polite">
            {solved
              ? "Verified — the submit button is now enabled."
              : "Solve the question to enable the submit button."}
          </p>
        </fieldset>

        <button
          type="submit"
          disabled={!solved}
          className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-secondary px-8 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-secondary/80 hover:shadow-glow disabled:pointer-events-none disabled:opacity-50 md:text-base"
        >
          Send Admission Enquiry
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </button>

        <div className="rounded-xl border border-border bg-muted/35 px-3 py-3" aria-live="polite">
          <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
            If the form does not work, contact admissions directly:
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="tel:+917736522210"
              data-analytics-label="Enquiry fallback phone call"
              className="inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call +91 7736522210
            </a>
            <a
              href="https://wa.me/919400587885?text=Hi%20NavPath%20Academy%2C%20I%20could%20not%20complete%20the%20website%20enquiry%20form.%20Please%20help%20me%20with%20admission%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-label="Enquiry fallback WhatsApp"
              className="inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-emerald-700 underline decoration-emerald-700/30 underline-offset-4 transition-colors hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
