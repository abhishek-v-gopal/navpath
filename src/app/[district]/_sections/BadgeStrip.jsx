const BADGES = [
  "30+ Years at Sea",
  "Active Sailing Mentors",
  "Sponsorship Guidance",
  "Interview Preparation",
  "Parent Guidance",
];

export default function BadgeStrip() {
  return (
    <section className="border-b border-border bg-background py-5">
      <div className="container flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-primary md:text-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
