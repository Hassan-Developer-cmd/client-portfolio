"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, FileText, Linkedin } from "lucide-react";
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
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden pt-20 md:pt-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-[#00A3FF]/10 blur-[120px] rounded-full" />
      </div>

      {/* Main Responsive Wrapper */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* TEXT AREA: Takes up remaining space fluently */}
        <div className="w-full lg:flex-1 z-10 text-left order-2 lg:order-1">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#00A3FF] font-extrabold tracking-[0.4em] text-[10px] md:text-xs uppercase block mb-4"
          >
            Software Quality Assurance
          </motion.span>
          
          <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[90px] font-black uppercase tracking-tighter leading-[0.85] text-white">
            {displayText.split(" ")[0]} <br className="block md:hidden" />
            <span className="text-[#00A3FF]">{displayText.split(" ").slice(1).join(" ") || ""}</span>
            <span className="inline-block w-[2px] h-[0.8em] bg-white ml-2 animate-pulse align-middle"></span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-lg mt-6 max-w-2xl font-medium leading-relaxed">
            Ensuring digital excellence through automated precision and resilient testing. I specialize in delivering bug-free, high-performance software solutions through rigorous QA cycles.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link href="#certifications" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all">
                Certificates <ArrowUpRight size={14} />
              </button>
            </Link>

            <Link href="/resume.pdf" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:border-[#00A3FF]/50 transition-all">
                <FileText size={16} /> Resume
              </button>
            </Link>

            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/daudahmad/" target="_blank">
                <button className="flex items-center justify-center border border-white/10 bg-[#0077B5]/10 text-white p-4 rounded-full hover:bg-[#0077B5] transition-all">
                  <Linkedin size={20} />
                </button>
              </Link>
              <Link href="https://github.com/dawood1123" target="_blank">
                <button className="flex items-center justify-center border border-white/10 bg-white/5 text-white p-4 rounded-full hover:border-[#00A3FF]/50 transition-all">
                  <Github size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* IMAGE AREA: Adjusted to never feel "disconnected" */}
        <div className="w-full lg:w-auto relative flex justify-center lg:justify-end items-center h-[300px] md:h-[450px] lg:h-[600px] order-1 lg:order-2">
          {/* Subtle Glow behind image to bridge the gap */}
          <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#00A3FF]/10 blur-[100px] rounded-full" />
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            src="/me.jpg" 
            alt="Dawood Ahmad"
            className="relative z-10 max-h-full w-auto object-contain transition-all duration-300" 
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)'
            }}
          />
        </div>

      </div>
    </section>
  );
}