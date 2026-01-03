import { Button } from "@/components/ui/button";
import { ArrowRight, Radio } from "lucide-react";
import heroImage from "@/assets/hero-terminal.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AM Energy fuel terminal at Port of Brownsville with storage tanks and logistics infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="relative flex h-3 w-3">
              <span className="pulse-live absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <Radio className="text-accent" size={16} />
            <span className="text-primary-foreground/90 text-sm font-medium">Live Rack Status: Operational</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-200">
            Your Gateway to Fuel Distribution Across the{" "}
            <span className="gradient-text">United States and Mexico</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 animate-fade-up animation-delay-400">
            High-speed, multimodal rack services at the Port of Brownsville, providing reliable supply and binational expertise for truck and rail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="#quote">
                Get Today's Rack Rates
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#terminal">Inquire About Throughput</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">24/7</div>
              <div className="text-primary-foreground/70 text-sm">Terminal Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">11+</div>
              <div className="text-primary-foreground/70 text-sm">States Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent">Tier-1</div>
              <div className="text-primary-foreground/70 text-sm">Safety Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
