"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.jpg"
          alt="Breathtaking Indian wedding portrait"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a08]/70 via-[#0f0a08]/40 to-[#0f0a08]/80"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-6 space-x-4">
            <span className="h-px w-12 bg-[#d4af37]"></span>
            <span className="uppercase tracking-[0.3em] text-[#d4af37] text-xs font-semibold">A.One Studio</span>
            <span className="h-px w-12 bg-[#d4af37]"></span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f4f0e6] text-balance mb-6 leading-tight drop-shadow-lg">
            Crafting Timeless <br className="hidden md:block" />
            <span className="italic text-[#d4af37]">Indian Memories.</span>
          </h1>
          <p className="text-[#a89f91] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-balance">
            Honest moments, beautiful light, and vivid colors you&apos;ll return to
            for generations to come.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#portfolio"
              className="w-full sm:w-auto px-10 py-4 bg-[#d4af37] text-[#0f0a08] text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#e58d2e] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              View Our Work
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[#d4af37] text-[#d4af37] text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#d4af37]/10 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
