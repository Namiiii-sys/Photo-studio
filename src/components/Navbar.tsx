"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#0f0a08]/90 backdrop-blur-md py-4 shadow-lg border-[#d4af37]/20"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif text-3xl tracking-wide text-[#d4af37] drop-shadow-md"
        >
          A.One Studio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#f4f0e6] hover:text-[#d4af37] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-xs uppercase tracking-[0.2em] text-[#0f0a08] font-semibold bg-[#d4af37] px-6 py-2.5 rounded-sm hover:bg-[#e58d2e] transition-colors shadow-lg"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#d4af37]"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0f0a08] flex flex-col justify-center items-center border-l border-[#d4af37]/30"
          >
            <button
              className="absolute top-6 right-6 text-[#d4af37]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-10 h-10" />
            </button>
            <nav className="flex flex-col space-y-10 text-center w-full px-6">
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-[#f4f0e6] hover:text-[#d4af37] transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="pt-8"
              >
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-bold text-[#0f0a08] bg-[#d4af37] px-10 py-4 rounded-sm inline-block shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
