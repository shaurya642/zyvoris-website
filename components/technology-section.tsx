"use client";

export function TechnologySection() {
  const technologies = [
    { name: "OpenAI", text: "OpenAI" },
    { name: "Google Gemini", text: "Gemini" },
    { name: "Make", text: "Make" },
    { name: "n8n", text: "n8n" },
    { name: "Google Workspace", text: "Workspace" },
    { name: "Calendly", text: "Calendly" },
    { name: "Meta", text: "Meta" },
    { name: "Gmail", text: "Gmail" },
    { name: "Twilio", text: "Twilio" },
    { name: "Stripe", text: "Stripe" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm md:text-base">
            Powered by industry-leading platforms.
          </p>
        </div>

        {/* Logo Wall */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group transition-all duration-300 hover:scale-110"
            >
              <div className="text-white/40 font-medium text-lg md:text-xl tracking-tight transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                {tech.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
