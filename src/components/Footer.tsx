import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Hotels", href: "/services/hotels" },
    { name: "Resorts", href: "/services/resorts" },
    // { name: "Adventures", href: "/services/adventures" },
    // { name: "Spa Services", href: "/services/spa" },
    // { name: "Cleaning", href: "/services/cleaning" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Safety", href: "/safety" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-foreground to-accent rounded-lg"></div>
              <span className="font-bold text-xl">Retreat</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for luxury travel experiences. We curate unforgettable journeys that create lasting memories.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>7859641236</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@retreat.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Vanasthalipuram, Hyd 500070</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} Retreat. All rights reserved.
          </div>

          {/* Trust Badges */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-primary-foreground/60">
              <Shield className="h-4 w-4" />
              <span className="text-xs">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/60">
              <CreditCard className="h-4 w-4" />
              <span className="text-xs">All Cards Accepted</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-xs text-primary-foreground/80">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-primary-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;