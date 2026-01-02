import { useState } from "react";
import { Truck, Train, Clock, Zap, Shield, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "truck",
    label: "Truck Loading",
    icon: Truck,
    title: "The Rack",
    features: [
      {
        icon: Zap,
        title: "High-Flow Efficiency",
        description: "State-of-the-art loading arms to ensure minimum 'turn time' for drivers.",
      },
      {
        icon: Shield,
        title: "Branded & Unbranded Supply",
        description: "Ability to inject proprietary additives or provide high-quality generic base.",
      },
      {
        icon: Clock,
        title: "24/7/365 Access",
        description: "Automated TABS entry for authorized common carriers and private fleets.",
      },
    ],
  },
  {
    id: "rail",
    label: "Rail Logistics",
    icon: Train,
    title: "Rail Transloading",
    features: [
      {
        icon: Train,
        title: "Unit Train & Manifest Support",
        description: "Receive or manifest large volumes via BRG, with connections to Union Pacific and BNSF.",
      },
      {
        icon: MapPin,
        title: "Transloading Services",
        description: "Efficient rail-to-truck or water-to-rail transfers across the continental US or into Mexico.",
      },
      {
        icon: Clock,
        title: "Strategic Scheduling",
        description: "Coordinated logistics ensuring your product keeps moving without delays.",
      },
    ],
  },
];

export const MultimodalSection = () => {
  const [activeTab, setActiveTab] = useState("truck");
  const activeData = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section id="terminal" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Multimodal Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Flexible Terminal Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a truck rack—we're a flexible multimodal terminal supporting your entire supply chain.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-2xl p-2 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-background"
                  )}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {activeData.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bento-item group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-accent-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Rail Partners */}
        {activeTab === "rail" && (
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Connected Rail Networks</p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-6 py-3 bg-background rounded-xl border border-border font-semibold text-foreground shadow-sm">
                BRG Railway
              </span>
              <span className="px-6 py-3 bg-background rounded-xl border border-border font-semibold text-foreground shadow-sm">
                Union Pacific
              </span>
              <span className="px-6 py-3 bg-background rounded-xl border border-border font-semibold text-foreground shadow-sm">
                BNSF
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
