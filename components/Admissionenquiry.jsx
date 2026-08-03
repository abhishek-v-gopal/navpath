import EnquiryTrigger from "@/components/EnquiryTrigger";

/* ---------- local icons (exact lucide paths, no extra deps) ---------- */

function ClipboardCheckIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function SendIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* --------------------------------- data ---------------------------------- */

const ENQUIRY_TAGS = [
  "IMU CET coaching and repeaters batch",
  "DNS sponsorship and company interviews",
  "Parent counselling and career clarity",
];

/* ------------------------------- section --------------------------------- */

export default function AdmissionEnquiry() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-violet-50 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Enquiry preview card */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl border border-[#e5e2f5] bg-white p-5 shadow-xl md:p-6">
              <div className="rounded-xl bg-[#473c68] p-5 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <ClipboardCheckIcon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Admission enquiry</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/76">
                  Send your details once. Our team can respond with eligibility, course fit,
                  batch options, and next steps.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                {ENQUIRY_TAGS.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-3 rounded-xl bg-[#F6F5FB] p-3 text-sm font-medium text-[#241f3d]"
                  >
                    <SendIcon className="h-4 w-4 shrink-0 text-teal-600" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="text-center md:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-[#241f3d]">
              <MailIcon className="w-4 h-4" />
              Admissions Support
            </span>

            <h2 className="mb-4 text-2xl font-bold text-[#241f3d] md:text-3xl lg:text-4xl">
              Send an Enquiry
              <span className="block text-[#7972e7]">With the Right Context</span>
            </h2>

            <p className="mb-6 leading-relaxed text-gray-500">
              Tell us what you are preparing for and where you are in the decision process. A
              clear enquiry helps the team respond with relevant guidance instead of a generic
              answer.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                  <MailIcon className="text-teal-600 p-3" />
                </div>
                <span className="text-[#241f3d]">Admission team follow-up</span>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                  <PhoneIcon className="text-violet-600 p-3" />
                </div>
                <span className="text-[#241f3d]">Free Career Counselling</span>
              </div>
            </div>

            <EnquiryTrigger
              title="Send an Enquiry"
              subtitle="Tell us what you are preparing for and where you are in the decision process. A clear enquiry helps the team respond with relevant guidance instead of a generic answer."
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#7972e7] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#6a63d9] hover:shadow-lg hover:shadow-[#7972e7]/30"
            >
              Send Enquiry
              <ArrowRightIcon />
            </EnquiryTrigger>
          </div>
        </div>
      </div>
    </section>
  );
}