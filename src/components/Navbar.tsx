import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

const homeSubLinks = [
  { href: "#terminal", label: "Our Terminal" },
  { href: "#products", label: "Products" },
  { href: "#logistics", label: "Logistics" },
  { href: "#network", label: "States Served" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnchorClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textColor = isScrolled ? "text-foreground" : "text-primary-foreground";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="flex items-center cursor-pointer">
            <img
              src={isScrolled ? logo : logoLight}
              alt="AM Energy - Multimodal Fuel Terminal"
              className="h-10 md:h-12 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`nav-link font-medium transition-colors flex items-center gap-1 ${textColor}`}
                onClick={() => {
                  navigate("/");
                  setIsHomeDropdownOpen(false);
                }}
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
              >
                Home
                <ChevronDown size={14} className={`transition-transform ${isHomeDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isHomeDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-background/95 backdrop-blur-xl rounded-xl shadow-xl border border-border py-2 min-w-[180px] animate-fade-in"
                  onMouseLeave={() => setIsHomeDropdownOpen(false)}
                >
                  {homeSubLinks.map((link) => (
                    <button
                      key={link.href}
                      className="block w-full text-left px-4 py-2 text-foreground font-medium hover:text-primary hover:bg-muted/50 transition-colors"
                      onClick={() => {
                        handleAnchorClick(link.href);
                        setIsHomeDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Corporate Profile */}
            <a
              href="/corporate-profile"
              onClick={(e) => { e.preventDefault(); navigate("/corporate-profile"); }}
              className={`nav-link font-medium transition-colors ${textColor}`}
            >
              Corporate Profile
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              onClick={() => handleAnchorClick("#quote")}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={textColor} size={28} />
            ) : (
              <Menu className={textColor} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 bg-background/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
              <button
                className="text-foreground font-semibold hover:text-primary transition-colors py-2 text-left"
                onClick={() => { navigate("/"); setIsMobileMenuOpen(false); }}
              >
                Home
              </button>
              {homeSubLinks.map((link) => (
                <button
                  key={link.href}
                  className="text-foreground/80 font-medium hover:text-primary transition-colors py-2 text-left pl-4"
                  onClick={() => {
                    handleAnchorClick(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="text-foreground font-semibold hover:text-primary transition-colors py-2 text-left mt-2"
                onClick={() => { navigate("/corporate-profile"); setIsMobileMenuOpen(false); }}
              >
                Corporate Profile
              </button>
              <Button variant="default" size="lg" className="mt-2" onClick={() => { handleAnchorClick("#quote"); setIsMobileMenuOpen(false); }}>
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
