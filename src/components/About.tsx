"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#1a1412] relative overflow-hidden">
      {/* Decorative Indian-style mandala/pattern placeholder */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#8c1c13]/20 via-transparent to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent opacity-50 blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-t-full border-4 border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] p-2">
              <div className="relative w-full h-full rounded-t-full overflow-hidden">
                <Image
                  src="/images/bride.jpg"
                  alt="Photographer at Indian Wedding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-8 leading-tight">
              Capturing the grandeur of your <br/>
              <span className="italic text-[#f4f0e6]">most celebrated moments.</span>
            </h2>
            <div className="space-y-6 text-[#a89f91] text-lg font-light leading-relaxed">
              <p>
                Indian weddings are a tapestry of vivid colors, deep emotions, and centuries of tradition. We believe the best photographs happen when you can simply be yourself amidst the celebration.
              </p>
              <p>
                Founded on the belief that imagery should endure past current trends, A.One Studio crafts editorial, narrative-driven photography that feels honest and looks spectacular. We take the time to understand your vision, ensuring the experience is as memorable as the final images.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-block border-b border-[#d4af37] pb-1 text-sm uppercase tracking-widest text-[#d4af37] hover:text-[#e58d2e] hover:border-[#e58d2e] transition-colors"
              >
                Learn more about our approach
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
