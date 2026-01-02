import { Shield, Award, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Driver Safety Portal", href: "#" },
  { label: "Credit Application", href: "#" },
  { label: "Terminal Map & Directions", href: "#" },
];

const certifications = [
  { icon: Shield, label: "ISN Certified" },
  { icon: Award, label: "API Member" },
  { icon: MapPin, label: "Port of Brownsville" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="AM Energy"
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-background/70 max-w-md mb-6">
              Premium multimodal fuel terminal providing high-speed rack services and binational logistics 
              at the Port of Brownsville, Texas.
            </p>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.label}
                    className="flex items-center gap-2 px-4 py-2 bg-background/10 rounded-lg"
                  >
                    <Icon size={18} className="text-accent" />
                    <span className="text-sm font-medium">{cert.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <address className="not-italic text-background/70 space-y-3">
              <p>Port of Brownsville</p>
              <p>Brownsville, TX</p>
              <p className="text-accent">24/7/365 Operations</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} AM Energy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
