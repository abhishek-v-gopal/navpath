import { tokenize } from "@/lib/districts";

const FIGURES_TEMPLATE = [
  {
    src: "{imageBase}-small-batch-classroom",
    alt: "{city} IMU CET small-batch classroom coaching with NavPath mentors",
    caption:
      "Small-batch preparation helps students ask doubts, review mistakes, and stay accountable.",
    loading: "eager",
  },
  {
    src: "{imageBase}-coaching-near-me",
    alt: "IMU CET coaching near {city} with online and Kottayam campus access",
    caption:
      "Students can choose online support, Kottayam counselling, or a blended preparation rhythm.",
    loading: "eager",
  },
  {
    src: "{imageBase}-merchant-navy-guidance",
    alt: "merchant navy coaching {city} student group at NavPath Academy",
    caption:
      "Merchant Navy career guidance is explained alongside entrance preparation and family counselling.",
    loading: "lazy",
  },
  {
    src: "{imageBase}-dns-sponsorship-interview",
    alt: "DNS sponsorship coaching {city} and interview preparation at NavPath",
    caption:
      "Sponsorship awareness includes aptitude, English confidence, grooming, and realistic selection expectations.",
    loading: "lazy",
  },
  {
    src: "{imageBase}-syllabus-revision",
    alt: "IMU CET syllabus and exam pattern guidance for {city} students",
    caption:
      "The syllabus is broken into subject practice, revision targets, and timed mock-test review.",
    loading: "lazy",
  },
  {
    src: "{imageBase}-results-parent-guidance",
    alt: "IMU CET mock test {city} score review with parent counselling",
    caption:
      "Students and parents get practical feedback on readiness, weak areas, and the next preparation step.",
    loading: "lazy",
  },
];

export default function LearningEnvironment({ district }) {
  const FIGURES = tokenize(FIGURES_TEMPLATE, district);

  return (
    <section className="bg-card py-12 md:py-24">
      <div className="container min-w-0">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-highlight/70 px-3 py-1.5 text-xs font-semibold text-highlight-foreground md:px-4 md:text-sm">
            Learning environment
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary md:text-4xl">
            See how guidance, review, and mentoring come together.
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            A closer look at the student environment behind NavPath&apos;s IMU CET preparation,
            mock review, and Merchant Navy counselling.
          </p>
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIGURES.map((figure) => (
            <figure
              key={figure.src}
              className="min-w-0 overflow-hidden rounded-lg border border-border bg-background shadow-sm"
            >
              <picture>
                <source
                  srcSet={`/optimized/seo/${figure.src}-480.webp 480w, /optimized/seo/${figure.src}-800.webp 800w`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  type="image/webp"
                />
                <img
                  src={`/optimized/seo/${figure.src}-800.webp`}
                  alt={figure.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading={figure.loading}
                  decoding="async"
                />
              </picture>
              <figcaption className="border-t border-border px-4 py-3 text-xs font-medium leading-relaxed text-muted-foreground">
                {figure.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
