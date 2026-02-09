"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const words = ["DAWOOD AHMED", "QA ENGINEER", "AUTOMATION EXPERT"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index % words.length];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-16 md:pt-0">
      
      {/* Background Decor - Minimal for Mobile Speed */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[40%] bg-[#00A3FF]/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-5 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* TEXT AREA: Mobile par center-ish, Desktop par Left */}
        <div className="w-full lg:w-[55%] z-10 text-left order-2 lg:order-1">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#00A3FF] font-extrabold tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-3"
          >
            Software Quality Assurance
          </motion.span>
          
          {/* Font Sizes fixed taake phate nahi */}
          <h1 className="text-[11vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            {displayText.split(" ")[0]} <br className="block md:hidden" />
            <span className="text-[#00A3FF]">{displayText.split(" ").slice(1).join(" ") || ""}</span>
            <span className="text-white animate-pulse">|</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-lg mt-5 md:mt-8 max-w-md font-medium leading-relaxed">
            Ensuring digital excellence through automated precision and resilient testing.
          </p>

          {/* BUTTONS: Mobile par 2x2 grid ya stack, Desktop par line */}
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <Link href="#certifications" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
                Certificates <ArrowUpRight size={14} />
              </button>
            </Link>

            <Link href="https://www.linkedin.com/in/daudahmad/" className="flex-1 sm:flex-none">
              <button className="w-full flex items-center justify-center gap-2 border border-white/10 bg-[#0077B5]/10 text-white px-6 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#0077B5]">
                LinkedIn
              </button>
            </Link>

            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="https://github.com/dawood1123" className="flex-1">
                <button className="w-full flex items-center justify-center border border-white/10 bg-white/5 text-white p-4 rounded-full hover:border-[#00A3FF]/50">
                  <Github size={18} />
                </button>
              </Link>
              <Link href="/resume.pdf" className="flex-1">
                <button className="w-full flex items-center justify-center border border-white/10 bg-white/5 text-white p-4 rounded-full hover:border-[#00A3FF]/50">
                  <FileText size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE AREA: Scaled for Mobile */}
        <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end items-end h-[300px] sm:h-[450px] md:h-[600px] order-1 lg:order-2">
          <div className="absolute bottom-5 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#00A3FF]/20 blur-[80px] rounded-full" />
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src="/me.jpg" 
            alt="Dawood Ahmad"
            className="relative z-10 max-w-full h-full object-contain grayscale"
            style={{
              willChange: "transform",
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
            }}
          />
        </div>

      </div>
    </section>
  );
}