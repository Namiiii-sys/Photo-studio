"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "They perfectly captured the vibrant colors and deep emotions of our Haldi. Every picture tells a story we'll cherish forever.",
      author: "Priya & Rohan",
      context: "Wedding Celebration",
    },
    {
      id: 2,
      quote:
        "A truly remarkable eye for light and tradition. The editorial quality of our portraits exceeded all expectations.",
      author: "Anjali S.",
      context: "Bridal Portrait",
    },
    {
      id: 3,
      quote:
        "Looking back at our gallery brings tears to my eyes. It's the most authentic documentation of our family's joy.",
      author: "The Mehta Family",
      context: "Family Session",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1a1412] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-4">
            Kind Words
          </h2>
          <div className="h-px w-24 bg-[#8c1c13] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={testimonial.id} 
              className="flex flex-col text-center p-8 border border-[#d4af37]/20 rounded-sm bg-[#0f0a08] relative"
            >
              <div className="text-4xl text-[#8c1c13] font-serif absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a1412] px-4">"</div>
              <p className="text-[#a89f91] font-light text-lg md:text-xl leading-relaxed mb-8 flex-grow pt-4">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-[#d4af37] uppercase tracking-[0.2em] font-semibold text-sm mb-1">
                  {testimonial.author}
                </p>
                <p className="text-[#8c1c13] text-xs uppercase tracking-widest">
                  {testimonial.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
