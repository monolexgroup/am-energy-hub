import { Fuel, Droplets, Leaf, BadgeCheck } from "lucide-react";

const products = [
  {
    category: "Motor Fuels",
    icon: Fuel,
    items: ["Conventional Gasoline (Various Octanes)", "Premium Blends"],
    color: "bg-primary",
  },
  {
    category: "Distillates",
    icon: Droplets,
    items: ["Ultra-Low Sulfur Diesel (ULSD)", "Dyed Diesel (Off-road/Agricultural)"],
    color: "bg-green-light",
  },
  {
    category: "Renewables",
    icon: Leaf,
    items: ["Ethanol Blending", "Biodiesel Capabilities"],
    color: "bg-accent",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Product Slate
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Premium Fuel Supply
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fuel products meeting the highest industry standards for quality and reliability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.category} className="bento-item text-center">
                <div className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {product.category}
                </h3>
                <ul className="space-y-3">
                  {product.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Quality Guarantee Banner */}
        <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <BadgeCheck className="text-primary-foreground" size={40} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Specification Guaranteed
            </h3>
            <p className="text-muted-foreground text-lg">
              Every gallon meets or exceeds ASTM standards with rigorous on-site quality testing. Your supply is always reliable and compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
