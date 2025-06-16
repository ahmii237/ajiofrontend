"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Shop",
      links: [
        { name: "Men's Fashion", href: "/men" },
        { name: "Women's Fashion", href: "/women" },
        { name: "Kids Collection", href: "/kids" },
        { name: "Footwear", href: "/footwear" },
        { name: "Accessories", href: "/accessories" },
        { name: "Sale", href: "/sale" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Size Guide", href: "/size-guide" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns & Exchange", href: "/returns" },
        { name: "Track Your Order", href: "/track-order" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About AJIO", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Gift Cards", href: "/gift-cards" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Store Locator", href: "/stores" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

 

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-800">
        
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AJIO
              </h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate fashion destination for trendy footwear and stylish
              garments. We bring you the latest fashion at affordable prices
              with exceptional quality and service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-purple-400" />
                <span>support@ajio.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-purple-400" />
                <span>1800-123-1234 (Toll Free)</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-purple-400" />
                <span>123 Fashion Street, Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © 2024 AJIO. All rights reserved. |{" "}
                <a
                  href="/privacy"
                  className="hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a
                  href="/terms"
                  className="hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </a>
              </p>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                {["Visa", "Mastercard", "UPI", "Paytm"].map(
                  (payment, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300 font-medium"
                    >
                      {payment}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
