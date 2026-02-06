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
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] w-full px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full">
        {/* Logo */}
        <Link href="#home" className="text-white font-black text-xl tracking-tighter">
          DA<span className="text-[#00A3FF]">.</span>
        </Link>

        {/* Links with Underline Animation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group relative text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00A3FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Button */}
        <Link href="#contact" className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
          Let's Talk
        </Link>
      </nav>
    </motion.header>
  );
}