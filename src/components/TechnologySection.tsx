import { FileText, LineChart, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Real-Time Data",
    description: "Automated BOL (Bill of Lading) delivery and EDI integration for seamless back-office accounting.",
  },
  {
    icon: LineChart,
    title: "Flexible Pricing",
    description: "Daily rack quotes, OPIS-indexed pricing, and fixed-forward contract options to fit your needs.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Tier-1 safety rating ensuring a secure environment for your assets and your drivers.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Streamlined operations and automated systems for minimal wait times and maximum efficiency.",
  },
];

export const TechnologySection = () => {
  return (
    <section id="logistics" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Technology & Partnership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ease of Doing Business
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our digital-first approach and financial flexibility make partnering with AM Energy seamless. 
              Focus on growing your business while we handle the logistics.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <div className="space-y-6">
                {/* Mock Dashboard Elements */}
                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-muted-foreground">Today's Status</span>
                    <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-display font-bold text-foreground">98%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-foreground">12m</div>
                      <div className="text-xs text-muted-foreground">Avg. Load</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-foreground">A+</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                  <div className="text-sm font-semibold text-muted-foreground mb-3">Recent BOL Transmissions</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-foreground">BOL-2025-{1000 + i}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">Delivered</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
