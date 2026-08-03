import { ArrowRight } from "lucide-react";
import DialogButton from "./DialogButton";

export default function FinalCta() {
  return (
    <section className="bg-gradient-secondary py-12 text-secondary-foreground">
      <div className="container flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-highlight">
            Ready for clarity?
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            Start with a focused admission enquiry.
          </h2>
        </div>
        <DialogButton
          title="Request Guidance"
          subtitle="Share the student's current class, location, and Merchant Navy goal."
          className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-highlight px-8 text-base font-bold text-highlight-foreground transition-all duration-300 hover:bg-highlight/90"
        >
          Request Guidance
          <ArrowRight className="h-4 w-4" />
        </DialogButton>
      </div>
    </section>
  );
}
