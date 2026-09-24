import {
  CalendarCheck,
  Clock,
  PhoneMissed,
  RefreshCw,
} from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    title: "Faster Inquiry Response",
    description: "New PI inquiries get an immediate first response",
  },
  {
    icon: PhoneMissed,
    title: "Recover Missed Opportunities",
    description: "Reconnect with callers your team could not answer",
  },
  {
    icon: RefreshCw,
    title: "Consistent Follow-Up",
    description: "Keep promising conversations moving without manual chasing",
  },
  {
    icon: CalendarCheck,
    title: "More Consultation Opportunities",
    description: "Guide qualified prospects toward the next step",
  },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function TrustBar() {
  return (
    <section
      aria-label="ZYVORIS benefits for US personal injury law firms"
      className="relative border-y border-white/[0.08] bg-white/[0.015] backdrop-blur-xl max-sm:backdrop-blur-none"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="group flex items-center justify-center gap-4 px-4 py-7 sm:px-7 lg:px-8"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] transition-[transform,border-color,background-color] duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:bg-primary/[0.10]"
                  style={{
                    transitionTimingFunction: EASE,
                  }}
                >
                  <Icon
                    className="h-5 w-5 text-primary transition-transform duration-200 group-hover:scale-105"
                    style={{
                      transitionTimingFunction: EASE,
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}