import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-4 top-10 h-16 w-16 rounded-full bg-accent/20 blur-2xl md:left-10 md:top-20 md:h-32 md:w-32" />
        <div className="absolute bottom-10 right-4 h-20 w-20 rounded-full bg-highlight/20 blur-2xl md:bottom-20 md:right-10 md:h-40 md:w-40" />
      </div>
      <div className="container relative z-10 px-4 text-center text-primary-foreground">
        <Reveal>
          <span className="mb-4 inline-block rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur-sm md:px-4 md:py-1.5 md:text-sm">
            Get In Touch
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mb-3 font-display text-2xl font-bold sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
            Start Your
            <br />
            <span className="text-accent">Maritime Journey</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto max-w-2xl text-sm text-primary-foreground/80 md:text-lg">
            Have questions about IMU CET or Merchant Navy careers? We&rsquo;re here to help!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
