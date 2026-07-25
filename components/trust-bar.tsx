import { Clock, RefreshCw, CalendarCheck } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: Clock,
      title: "Faster Response Times",
      description: "Engage leads within seconds, not hours",
    },
    {
      icon: RefreshCw,
      title: "Consistent Follow-Ups",
      description: "Never let a lead slip through the cracks",
    },
    {
      icon: CalendarCheck,
      title: "More Qualified Bookings",
      description: "Convert inquiries into real conversations",
    },
  ];

  return (
    <section className="relative border-y border-border/40 bg-secondary/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-center sm:justify-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
