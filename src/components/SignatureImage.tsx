"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SignatureImage() {
  return (
    <section className="py-12 md:py-24 bg-[#0f0a08] border-y border-[#d4af37]/20 relative">
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8c1c13]/10 via-transparent to-transparent opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-sm border-2 border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] p-1"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/couple.jpg"
              alt="Beautifully composed wedding moment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-3xl md:text-5xl text-[#d4af37] text-balance">
            "Some moments deserve to <br className="hidden md:block" /><span className="italic text-[#f4f0e6]">stay with us forever.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
