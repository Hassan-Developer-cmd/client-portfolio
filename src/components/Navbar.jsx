"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" }, // Check karein ye ID match ho
  ];

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-120%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[999] w-full px-4 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
        {/* Logo */}
        <Link href="#home" className="text-white font-black text-lg tracking-tighter">
          DA<span className="text-[#00A3FF]">.</span>
        </Link>

        {/* Links: Mobile par bhi dikhane ke liye 'hidden' hata diya ya gap kam kiya */}
        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00A3FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Let's Talk Button: Mobile par chota ya hide kar sakte hain */}
        <Link href="#contact" className="hidden sm:block bg-white text-black px-5 py-2 rounded-full font-black text-[9px] uppercase tracking-widest hover:scale-105 transition-transform">
          Talk
        </Link>
      </nav>
    </motion.header>
  );
}