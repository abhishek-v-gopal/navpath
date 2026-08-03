import { MapPin, Clock3, CircleCheckBig, Link2 } from "lucide-react";
import Reveal from "./Reveal";
import { tokenize, fill, DISTRICTS } from "@/lib/districts";

const ACCESS_POINTS_TEMPLATE = [
  "{travel}",
  "Online sessions are useful for Plus Two students in the {access} region who cannot lose weekday time to travel.",
  "Families can begin with a counselling enquiry before planning a campus visit for detailed route guidance.",
];

const CONTEXT_POINTS_TEMPLATE = [
  "{city} students often compare engineering, defence, aviation, and maritime options after Plus Two.",
  "{context}",
  "NavPath helps students separate IMU CET preparation from sponsorship interviews, medical readiness, and the discipline expected from cadets.",
];

const HUB_ROUTES = [
  {
    href: "/imu-cet",
    label: "IMU CET Guide",
    description:
      "Broad guide for students who want to understand IMU CET, eligibility, syllabus, counselling, coaching, and Merchant Navy routes.",
  },
  {
    href: "/imu-cet-coaching",
    label: "IMU CET Coaching",
    description:
      "Core coaching page for students comparing classes, mock tests, mentorship, sponsorship awareness, and parent counselling.",
  },
  {
    href: "/imu-cet-coaching-centre",
    label: "IMU CET Coaching Centre",
    description: "Practical guide to what an IMU CET coaching centre should provide before admission.",
  },
  {
    href: "/best-imu-cet-coaching-kerala",
    label: "Best IMU CET Coaching in Kerala",
    description:
      "Kerala hub for families comparing district access, Kottayam counselling, online support, and sponsorship readiness.",
  },
  {
    href: "/best-imu-cet-coaching-india",
    label: "Best IMU CET Coaching in India",
    description:
      "National hub for students comparing online mentoring, Kerala campus access, mocks, and Merchant Navy route guidance.",
  },
  {
    href: "/imucet-online-coaching-kerala",
    label: "IMU CET Online Coaching Kerala",
    description:
      "Online-first route for students who need structured classes, doubt support, and mock review without regular travel.",
  },
];

function otherDistrictRoutes(district) {
  return DISTRICTS.filter((d) => d.slug !== district.slug)
    .sort((a, b) => {
      const aSame = a.access === district.access ? 0 : 1;
      const bSame = b.access === district.access ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, 4)
    .map((d) => ({
      href: `/${d.slug}`,
      label: `IMU CET Coaching in ${d.name}`,
      description: fill(
        "Nearby district guidance for {city} students comparing online support, Kottayam access, mocks, and sponsorship preparation.",
        d
      ),
    }));
}

export default function LocalAccess({ district }) {
  const ACCESS_POINTS = tokenize(ACCESS_POINTS_TEMPLATE, district);
  const CONTEXT_POINTS = tokenize(CONTEXT_POINTS_TEMPLATE, district);
  const heading = tokenize("Local access for IMU CET Coaching in {city}", district);
  const lede = tokenize(
    "IMU CET Coaching in {city} is planned for {city} students and parents who need a realistic route to NavPath's Kottayam campus, online preparation, or a blended mentoring model.",
    district
  );
  const asideHeading = tokenize("Maritime career context for {city} and {access}", district);
  const RELATED_ROUTES = [...HUB_ROUTES, ...otherDistrictRoutes(district)];

  return (
    <section className="bg-muted/60 py-12 md:py-24">
      <div className="container grid min-w-0 gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-primary md:px-4 md:text-sm">
            <MapPin className="h-4 w-4" />
            Local access
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{lede}</p>
          <div className="mt-6 grid gap-3">
            {ACCESS_POINTS.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex min-w-0 gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <Clock3 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                  <p className="min-w-0 text-sm font-medium leading-relaxed text-foreground">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="min-w-0 rounded-lg border border-border bg-background p-5 shadow-sm md:p-6">
          <h3 className="font-display text-xl font-bold leading-tight text-primary">
            {asideHeading}
          </h3>
          <ul className="mt-4 space-y-3">
            {CONTEXT_POINTS.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-border pt-5">
            <h4 className="font-display text-base font-bold text-primary">
              Compare related preparation routes
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Use these routes when you are comparing nearby access, state-level guidance, or online
              support.
            </p>
            <div className="mt-3 grid gap-3">
              {RELATED_ROUTES.map((route) => (
                <a
                  key={route.href}
                  className="group min-w-0 rounded-lg border border-border bg-muted/45 p-3 transition-colors hover:border-secondary/60 hover:bg-secondary/10"
                  href={route.href}
                >
                  <span className="flex min-w-0 items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary">
                    <Link2 className="h-4 w-4" />
                    <span className="min-w-0">{route.label}</span>
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {route.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
