"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { motion } from "framer-motion";

const allServices = [
  {
    name: "Wedding & Engagement",
    description: "Documentary-style coverage of your wedding day, pre-wedding sessions, and engagement celebrations. We focus on vibrant colors and honest emotions.",
  },
  {
    name: "Bridal Photography",
    description: "Elegant, timeless bridal portraits capturing the intricate details, jewelry, and beauty of your special day with a royal touch.",
  },
  {
    name: "Couples Photography",
    description: "Intimate and relaxed sessions for couples, perfect for anniversaries, proposals, or simply celebrating your eternal bond.",
  },
  {
    name: "Events & Parties",
    description: "Unobtrusive documentation of your special events, birthdays, and grand celebrations, capturing the energy of the room and candid interactions.",
  },
  {
    name: "Baby & Newborn Photography",
    description: "Gentle, beautiful portraiture of your little ones in their earliest days, focusing on tender moments and precious details.",
  },
  {
    name: "Corporate Photography",
    description: "Professional headshots, team portraits, and corporate event coverage that align with your brand's narrative and prestige.",
  },
  {
    name: "Commercial Photography",
    description: "High-quality, thoughtfully directed visual assets for brands, products, and campaigns designed to elevate your market presence.",
  },
  {
    name: "Videography Services",
    description: "Cinematic, storytelling-focused video production to complement our photography, offering a moving memory of your most important celebrations.",
  },
  {
    name: "Photo Albums",
    description: "Bespoke, heirloom-quality photo albums and luxurious fine-art prints designed to preserve your legacy for generations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#1a1412] text-[#f4f0e6]">
      <Navbar />
      
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8c1c13]/20 via-[#d4af37]/5 to-transparent opacity-60 blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6 space-x-4">
              <span className="h-px w-12 bg-[#d4af37]"></span>
              <span className="uppercase tracking-[0.3em] text-[#d4af37] text-xs font-semibold">Offerings</span>
              <span className="h-px w-12 bg-[#d4af37]"></span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl text-[#d4af37] mb-6 drop-shadow-md">
              Our Services
            </h1>
            <p className="text-[#a89f91] text-lg md:text-xl font-light">
              Comprehensive photography and videography offerings by A.One Studio. 
              Tailored to tell your magnificent story.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {allServices.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
                key={index} 
                className="flex flex-col group"
              >
                <div className="border-t border-[#d4af37]/30 pt-6 group-hover:border-[#d4af37] transition-colors duration-300">
                  <h2 className="font-serif text-2xl text-[#f4f0e6] mb-4 group-hover:text-[#d4af37] transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-[#a89f91] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="text-xs uppercase tracking-[0.1em] text-[#d4af37] font-semibold flex items-center hover:text-[#e58d2e] transition-colors"
                  >
                    Enquire about this service 
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
