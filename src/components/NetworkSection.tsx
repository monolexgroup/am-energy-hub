const states = [
  { code: "TX", name: "Texas", highlight: true },
  { code: "PA", name: "Pennsylvania" },
  { code: "NY", name: "New York" },
  { code: "NJ", name: "New Jersey" },
  { code: "OH", name: "Ohio" },
  { code: "NC", name: "North Carolina" },
  { code: "SC", name: "South Carolina" },
  { code: "GA", name: "Georgia" },
  { code: "FL", name: "Florida" },
  { code: "LA", name: "Louisiana" },
  { code: "NM", name: "New Mexico" },
  { code: "TM", name: "Tamaulipas, MX", highlight: true },
];

export const NetworkSection = () => {
  return (
    <section id="network" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-4">
            Distribution Reach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            National Distribution Network
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Strategic multimodal hubs connecting the Eastern Seaboard to the Northern Mexico border.
          </p>
        </div>

        {/* State Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {states.map((state) => (
            <div
              key={state.code}
              className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-default
                ${
                  state.highlight
                    ? "bg-accent border-accent text-accent-foreground"
                    : "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                }
              `}
            >
              <div className="text-center">
                <div className="text-3xl font-display font-bold mb-1">{state.code}</div>
                <div className="text-sm opacity-80 font-medium">{state.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Binational Highlight */}
        <div className="mt-16 glass-card-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Strategic Binational Logistics
          </h3>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-8">
            Streamlined cross-border documentation and exports into Northern Mexico including Tamaulipas and Nuevo León. 
            Direct connectivity to deep-water berths enables vessel-to-rack integration and supply stability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground">
              Cross-Border Expertise
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground">
              Vessel-to-Rack Integration
            </span>
            <span className="px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground">
              Strategic Tankage Capacity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
