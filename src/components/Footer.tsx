import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0a08] text-[#a89f91] py-20 md:py-24 border-t border-[#d4af37]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl text-[#d4af37] mb-6 drop-shadow-md">A.One Studio</h2>
            <p className="font-light text-[#f4f0e6] max-w-sm text-balance mb-4">
              Editorial, narrative-driven photography that feels honest and looks spectacular.
            </p>
            <p className="font-light text-[#a89f91] max-w-sm text-balance">
              Gali wakil wali, Kucha Pandit Rd, near chawri bazar, Old Delhi, Shah Ganj, metro, Delhi, 110006
            </p>
          </div>
          
          <div>
            <h3 className="uppercase tracking-[0.2em] text-xs font-semibold text-[#d4af37] mb-6">Navigation</h3>
            <ul className="space-y-4 font-light">
              <li>
                <Link href="/#portfolio" className="hover:text-[#d4af37] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#d4af37] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#d4af37] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.2em] text-xs font-semibold text-[#d4af37] mb-6">Connect</h3>
            <ul className="space-y-4 font-light">
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d4af37] transition-colors">Facebook</a>
              </li>
              <li>
                <a href="mailto:hello@aonestudio.com" className="hover:text-[#d4af37] transition-colors">hello@aonestudio.com</a>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-[#d4af37] transition-colors">+91 123 456 7890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#8c1c13]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-[0.1em] text-[#a89f91]">
          <p>&copy; 2026 A.One Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
