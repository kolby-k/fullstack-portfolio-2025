import { motion } from "framer-motion";
import appImage from "../assets/evolve-ios-app.png";
import evolveMobileImage from "../assets/single-tracking.png";
import CustomButton from "./CustomButton";
import CustomTag from "./CustomTag";

export type CtaProps = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "outline";
};

export type FeaturedProjectProps = {
  title?: string;
  tagline?: string;
  description?: string;
  stack?: string[];
  details?: {
    title: string;
    body: string;
    buttons?: CtaProps[];
  }[];
};

const defaultProps: Required<FeaturedProjectProps> = {
  title: "Evolve Workout Tracker",
  tagline: "Developed with React Native, Express.js, and PostgreSQL",
  description:
    "From database to UI, I built this mobile fitness app from the ground-up—and I use it weekly to track my workouts and improve performance in the gym.",
  stack: [
    "React Native/Expo",
    "Redux Toolkit",
    "Node/Express.js",
    "PostgreSQL",
  ],
  details: [
    {
      title: "Website",
      body: "Designed and built a fast, single-page React site. It includes pricing information, an FAQ section, and clear calls-to-action.",
      buttons: [
        {
          label: "GitHub",
          href: "https://github.com/kolby-k/evolve-web",
          variant: "outline",
        },
        {
          label: "View Website",
          href: "https://evolve-app.ca/",
          variant: "primary",
        },
      ],
    },
    {
      title: "iOS Mobile App",
      body: "Implemented the core mobile app with React Native (Expo), leveraging OAuth (Sign in with Apple) and JWT authentication for secure integration with an Express + PostgreSQL backend.",
      buttons: [
        {
          label: "View on App Store",
          href: "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
          variant: "primary",
        },
      ],
    },
    {
      title: "Admin Dashboard",
      body: "Built a secure admin dashboard with authentication, interactive charts, and data tables to easily track and monitor app usage and performance metrics.",
      buttons: [],
    },
  ],
};

export default function FeaturedProject(p: FeaturedProjectProps) {
  const { title, tagline, description, stack, details } = {
    ...defaultProps,
    ...p,
  } as Required<FeaturedProjectProps>;

  return (
    <div className="mt-8 md:my-8">
      <h2 className="font-semibold text-5xl text-center">Featured Project</h2>
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-(--project-border) bg-(--project-bg) p-6 sm:p-10 md:p-12 shadow-[0_0_60px_-12px_rgba(56,189,248,.45)] mt-8 md:mt-16">
        {/* Glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tr from-(--accent-purple) to-(--accent-blue) blur-3xl opacity-20" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-(--accent-blue) to-(--accent-purple) blur-3xl opacity-20" />

        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-(--accent-green) shadow-[0_0_20px_theme(colors.sky.400)]" />
          <p className="text-sm tracking-widest text-(--accent-green)">
            Available on the Apple App Store
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy & CTAs */}
          <div className="md:mt-4">
            <h3 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="mb-2 md:mb-5 text-lg text-(--tag-text-blue)">
              {tagline}
            </p>
            <p className="mb-6 max-w-xl text-(--text-secondary)">
              {description}
            </p>

            {/* Stack chips */}
            <div className="flex justify-around flex-wrap gap-2">
              {stack.map((t) => (
                <CustomTag key={t} label={t} size="small" />
              ))}
            </div>
          </div>

          {/* RIGHT: Device Mock / Code card */}
          <div className="relative py-12 md:py-0">
            {/* Laptop frame */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto mt-2 md:mt-0 w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950/90 to-neutral-950/90 p-4 shadow-[0_40px_120px_-40px_rgba(168,85,247,.3),0_0_0_1px_rgba(255,255,255,.04)]"
            >
              {/* Top bar */}
              <div className="hidden mb-2 md:flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-rose-400/70" />
                <div className="h-2 w-2 rounded-full bg-amber-300/70" />
                <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>

              {/* Screen */}
              <div className="relative overflow-hidden rounded-xl backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(1200px_200px_at_20%_-20%,rgba(56,189,248,.16),transparent),radial-gradient(800px_200px_at_120%_120%,rgba(217,70,239,.14),transparent)]" />
                <img src={appImage} height={100} className="-mb-4" />
              </div>

              {/* Base */}
            </motion.div>

            {/* Floating code card (mirrors reference image) */}
            <motion.pre
              initial={{ opacity: 0, y: 16, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute -top-12 -right-12 md:-right-3 md:-top-6 w-[18rem] :max-w-[70vw] rounded-xl border border-sky-400/30 bg-slate-950/90 p-4 text-[12px] leading-relaxed text-sky-200 shadow-[0_0_40px_-10px_rgba(56,189,248,.6)] md:block scale-70 md:scale-100"
            >
              <code>{`<div class="feature">\n  <h1>{message}</h1>\n  <p>Track every workout +\n discover new exercises.</p>\n</div>\n\n<script>\n  const message = 'Welcome!';\n</script>`}</code>
            </motion.pre>

            {/* Phone overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="absolute -bottom-2 md:-bottom-6 -left-2 md:-left-4 w-28 md:w-32 rounded-full shadow-[0_20px_80px_-30px_rgba(56,189,248,.45)] md:block"
            >
              <img
                src={evolveMobileImage}
                alt="evolve mobile app"
                width={128}
              />
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <hr className="animated-divider mt-8 md:mt-16 w-7/8 mx-auto" />

        {/* Secondary row: detail cards */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {details.map((d) => (
            <div
              key={d.title}
              className="flex flex-1 flex-col gap-3 justify-between rounded-2xl border border-(--tag-border-blue) bg-(--tag-bg-blue) p-5 backdrop-blur-sm relative"
            >
              <span className="flex flex-col">
                <div className="mb-2 text-base font-semibold tracking-wide text-(--text-primary)">
                  {d.title}
                </div>
                <p className="text-base text-(--text-secondary)">{d.body}</p>
              </span>
              {/* Buttons */}
              <div className="flex flex-col gap-2 justify-evenly items-center">
                {d.buttons &&
                  d.buttons.map((a) => {
                    return <CTA key={a.label} {...a} />;
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CTA({ label, href, variant = "primary" }: CtaProps) {
  if (variant === "primary") {
    return (
      <a href={href} target="_blank">
        <CustomButton label={label} variant="primary" />
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a href={href} target="_blank">
        <CustomButton label={label} variant="outline" />
      </a>
    );
  }

  // ghost
  return (
    <a href={href} target="_blank">
      <CustomButton label={label} variant="ghost" />
    </a>
  );
}
