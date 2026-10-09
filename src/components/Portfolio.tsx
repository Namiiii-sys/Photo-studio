"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "The Haldi",
    category: "Weddings",
    imageUrl:
      "/images/ceremony.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Golden Hour",
    category: "Portraits",
    imageUrl:
      "/images/couple.jpg",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 3,
    title: "The Reception",
    category: "Families",
    imageUrl:
      "/images/hero.jpg",
    aspectRatio: "aspect-[16/9]",
  },
  {
    id: 4,
    title: "Bridal Details",
    category: "Fashion",
    imageUrl:
      "/images/bride.jpg",
    aspectRatio: "aspect-square",
  },
  {
    id: 5,
    title: "Sangeet Night",
    category: "Couples",
    imageUrl:
      "/images/ceremony.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 6,
    title: "Quiet Spaces",
    category: "Editorial",
    imageUrl:
      "/images/couple.jpg",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#1a1412]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-4">
              Selected Work
            </h2>
            <p className="text-[#a89f91] text-lg">
              A collection of vibrant moments and celebrated traditions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#contact"
              className="text-sm uppercase tracking-widest border-b border-[#d4af37] pb-1 text-[#d4af37] hover:text-[#e58d2e] hover:border-[#e58d2e] transition-colors"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.2 }}
              key={project.id}
              className="group cursor-pointer break-inside-avoid relative overflow-hidden rounded-sm border border-transparent hover:border-[#d4af37]/30 transition-all duration-500 p-1 bg-[#0f0a08]"
            >
              <div
                className={`relative w-full overflow-hidden rounded-sm ${project.aspectRatio}`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8c1c13]/80 via-[#0f0a08]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-bold drop-shadow-md">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#f4f0e6] drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
