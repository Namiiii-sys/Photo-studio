"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "wedding",
    name: "Wedding & Engagement",
    description:
      "A documentary approach to your most important days. We focus on authentic moments, genuine emotion, and the subtle details of your traditions.",
    imageUrl:
      "/images/hero.jpg",
  },
  {
    id: "events",
    name: "Events & Parties",
    description:
      "Honest, editorial-style coverage of your celebrations, capturing the joy, connection, and energy of the room.",
    imageUrl:
      "/images/ceremony.jpg",
  },
  {
    id: "commercial",
    name: "Commercial & Corporate",
    description:
      "Thoughtfully directed campaigns, corporate profiles, and brand narratives for businesses and creatives.",
    imageUrl:
      "/images/couple.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0f0a08] border-t border-[#8c1c13]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-4">
              Services
            </h2>
            <p className="text-[#a89f91] text-lg">
              Dedicated approaches tailored to the nature of your story.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="text-sm uppercase tracking-widest border-b border-[#d4af37] pb-1 text-[#d4af37] hover:text-[#e58d2e] hover:border-[#e58d2e] transition-colors"
            >
              View All Services
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {services.map((service) => (
            <motion.div variants={itemVariants} key={service.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] w-full mb-8 overflow-hidden rounded-t-full border border-[#d4af37]/20 p-2 shadow-[0_0_15px_rgba(212,175,55,0.05)] bg-[#1a1412]">
                <div className="relative w-full h-full overflow-hidden rounded-t-full">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a08]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-[#f4f0e6] mb-4">
                {service.name}
              </h3>
              <p className="text-[#a89f91] font-light mb-8 flex-grow">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-sm uppercase tracking-widest border-b border-[#a89f91] pb-1 text-[#a89f91] group-hover:border-[#d4af37] group-hover:text-[#d4af37] self-start transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
