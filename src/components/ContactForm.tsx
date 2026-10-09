"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    status: "idle", // idle, loading, success, error
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading" });
    
    // Simulate network request
    setTimeout(() => {
      setFormState({ status: "success" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0f0a08] relative">
      <div className="absolute inset-0 bg-[#8c1c13]/5"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] mb-6">
            Begin Your Journey
          </h2>
          <p className="text-[#a89f91] text-lg">
            Let's discuss how we can document your magnificent story.
          </p>
        </motion.div>

        {formState.status === "success" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1412] p-12 text-center rounded-sm border border-[#d4af37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <h3 className="font-serif text-3xl text-[#d4af37] mb-4">
              Thank you for reaching out.
            </h3>
            <p className="text-[#f4f0e6] mb-8 font-light">
              We've received your enquiry and will be in touch shortly.
            </p>
            <button
              onClick={() => setFormState({ status: "idle" })}
              className="text-sm uppercase tracking-[0.2em] border-b border-[#d4af37] pb-1 text-[#d4af37] hover:text-[#e58d2e] hover:border-[#e58d2e] transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-8 bg-[#1a1412] p-8 md:p-12 rounded-sm border border-[#d4af37]/20 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-[#a89f91]/40 py-3 text-[#f4f0e6] placeholder:text-[#a89f91]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-[#a89f91]/40 py-3 text-[#f4f0e6] placeholder:text-[#a89f91]/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="type"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]"
                >
                  Type of Photography
                </label>
                <select
                  id="type"
                  required
                  className="w-full bg-transparent border-b border-[#a89f91]/40 py-3 text-[#f4f0e6] focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#1a1412]">Select an option</option>
                  <option value="wedding" className="bg-[#1a1412]">Wedding & Engagement</option>
                  <option value="portrait" className="bg-[#1a1412]">Bridal Photography</option>
                  <option value="family" className="bg-[#1a1412]">Pre-wedding/Couples</option>
                  <option value="events" className="bg-[#1a1412]">Events & Parties</option>
                  <option value="other" className="bg-[#1a1412]">Other Services</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]"
                >
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full bg-transparent border-b border-[#a89f91]/40 py-3 text-[#f4f0e6] focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-[#a89f91]/40 py-3 text-[#f4f0e6] placeholder:text-[#a89f91]/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                placeholder="Tell us about the grand vision for your event..."
              ></textarea>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <button
                type="submit"
                disabled={formState.status === "loading"}
                className="w-full md:w-auto bg-[#d4af37] text-[#0f0a08] font-bold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#e58d2e] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState.status === "loading" ? "Sending..." : "Send Enquiry"}
              </button>
              
              <div className="text-[#a89f91] text-sm flex items-center">
                <span>or message us on </span>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 border-b border-[#d4af37] text-[#d4af37] font-semibold hover:border-[#e58d2e] hover:text-[#e58d2e] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
