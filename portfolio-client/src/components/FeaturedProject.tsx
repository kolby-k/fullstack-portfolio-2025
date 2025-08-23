import { motion } from "framer-motion";
import appImage from "../assets/evolve-ios-app.png";
import evolveMobileImage from "../assets/single-tracking.png";

export type FeaturedProjectProps = {
  title?: string;
  tagline?: string;
  description?: string;
  stack?: string[];
  actions?: {
    label: string;
    href: string;
    variant?: "primary" | "ghost" | "outline";
  }[];
};

const defaultProps: Required<FeaturedProjectProps> = {
  title: "Evolve Workout Tracker",
  tagline: "Built with React Native (Expo), Node/Express, and Postgres",
  description:
    "From database to UI, I built this mobile fitness app ground-up—and I use it every week to track my workouts and improve my performance in the gym.",
  stack: [
    "React Native",
    "Expo",
    "Redux Toolkit",
    "Node/Express",
    "PostgreSQL",
  ],
  actions: [
    {
      label: "View on App Store",
      href: "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
      variant: "primary",
    },
    {
      label: "View Website",
      href: "https://evolve-app.ca/",
      variant: "outline",
    },
    {
      label: "GitHub",
      href: "https://github.com/kolby-k/evolve-web",
      variant: "ghost",
    },
  ],
};

export default function FeaturedProject(p: FeaturedProjectProps) {
  const { title, tagline, description, stack, actions } = {
    ...defaultProps,
    ...p,
  } as Required<FeaturedProjectProps>;

  return (
    <div className="my-8">
      <h2 className="font-semibold text-5xl text-center my-2">
        Featured Project
      </h2>
      <section className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-(--project-border) bg-(--project-bg) p-6 sm:p-10 md:p-12 shadow-[0_0_60px_-12px_rgba(56,189,248,.45)] mt-16">
        {/* Glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tr from-(--accent-purple) to-(--accent-blue) blur-3xl opacity-20" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-(--accent-blue) to-(--accent-purple) blur-3xl opacity-20" />

        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-(--accent-green) shadow-[0_0_20px_theme(colors.sky.400)]" />
          <p className="text-sm tracking-widest text-(--accent-green)">
            Available on the Apple App Store
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: Copy & CTAs */}
          <div>
            <h3 className="mb-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="mb-5 text-lg text-(--tag-text-blue)">{tagline}</p>
            <p className="mb-6 max-w-xl text-(--text-secondary)">
              {description}
            </p>

            {/* Stack chips */}
            <div className="mb-8 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-(--tag-border-blue) bg-(--tag-bg-blue) text-(--tag-text-blue) px-3 py-1 text-xs shadow-[0_0_20px_-6px_rgba(56,189,248,.6)]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {actions.map((a) => (
                <CTA key={a.label} {...a} />
              ))}
            </div>
          </div>

          {/* RIGHT: Device Mock / Code card */}
          <div className="relative">
            {/* Laptop frame */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950/90 to-neutral-950/90 p-4 shadow-[0_40px_120px_-40px_rgba(168,85,247,.3),0_0_0_1px_rgba(255,255,255,.04)]"
            >
              {/* Top bar */}
              <div className="mb-2 flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-rose-400/70" />
                <div className="h-2 w-2 rounded-full bg-amber-300/70" />
                <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>

              {/* Screen */}
              <div className="relative overflow-hidden rounded-xl backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(1200px_200px_at_20%_-20%,rgba(56,189,248,.16),transparent),radial-gradient(800px_200px_at_120%_120%,rgba(217,70,239,.14),transparent)]" />
                <img src={appImage} height={100} />
              </div>

              {/* Base */}
            </motion.div>

            {/* Floating code card (mirrors reference image) */}
            <motion.pre
              initial={{ opacity: 0, y: 16, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute -right-3 -top-6 hidden w-[18rem] max-w-[70vw] rounded-xl border border-sky-400/30 bg-slate-950/90 p-4 text-[12px] leading-relaxed text-sky-200 shadow-[0_0_40px_-10px_rgba(56,189,248,.6)] md:block"
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
              className="absolute -bottom-8 -left-4 hidden w-32 rounded-full shadow-[0_20px_80px_-30px_rgba(56,189,248,.45)] md:block"
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
        <hr className="animated-divider mt-16 w-7/8 mx-auto" />

        {/* Secondary row: bullets */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "PostgreSQL Database",
              body: "Backed by PostgreSQL with a normalized schema and optimized indexes for fast, reliable queries.",
            },
            {
              title: "Secure Auth & Billing",
              body: "Short-lived JWT access with longer lived refresh tokens, plus Apple IAP receipt verification and server-side subscription checks.",
            },
            {
              title: "Observability & Analytics",
              body: "Structured logging, error monitoring, and a custom admin dashboard for usage, retention, and revenue insights.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-(--tag-border-blue) bg-(--tag-bg-blue) p-5 backdrop-blur-sm"
            >
              <div className="mb-2 text-sm font-semibold tracking-wide text-(--text-primary)">
                {item.title}
              </div>
              <p className="text-sm text-(--text-secondary)">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CTA({
  label,
  href,
  variant = "primary",
}: Required<FeaturedProjectProps>["actions"][number]) {
  const base =
    "relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60";

  if (variant === "primary") {
    return (
      <a
        href={href}
        target="_blank"
        className={`${base} border border-(--btn-primary-border) bg-(--btn-primary-bg) text-(--btn-primary-text) hover:bg-(--btn-primary-hover-bg) hover:text-(--btn-primary-hover-text) shadow-[0_10px_30px_-12px_rgba(56,189,248,.6)]`}
      >
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
        <span className="relative">{label}</span>
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        className={`${base} border border-(--tag-border-blue) bg-(--tag-bg-blue) text-(--tag-text-blue) hover:bg-(--tag-border-blue) hover:text-(--btn-primary-hover-text)`}
      >
        {label}
      </a>
    );
  }

  // ghost
  return (
    <a
      href={href}
      className={`${base} text-(--text-primary) hover:text-(--text-secondary)`}
      target="_blank"
    >
      {label}
    </a>
  );
}
