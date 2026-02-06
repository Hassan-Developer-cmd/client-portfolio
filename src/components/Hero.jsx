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
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 md:px-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00A3FF]/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
        
        <div className="lg:w-1/2 z-10 text-left">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#00A3FF] font-black tracking-[0.4em] text-[10px] uppercase block mb-6"
          >
            Software Quality Assurance
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            {displayText.split(" ")[0]} <span className="text-[#00A3FF]">{displayText.split(" ")[1] || ""}</span>
            <span className="text-white animate-pulse">|</span>
          </h1>
          
          <p className="text-gray-500 text-lg mt-8 max-w-lg font-medium leading-relaxed">
            Ensuring digital excellence through automated precision and resilient testing frameworks.
          </p>

          {/* Buttons Container */}
          <div className="mt-12 flex flex-wrap gap-4">
            {/* View Work */}
            <Link href="#certifications">
              <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                View Certificates
                <ArrowUpRight size={16} />
              </button>
            </Link>

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/daudahmad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="inline-block">
              <button className="flex items-center gap-3 border border-white/10 bg-[#0077B5]/10 text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all hover:bg-[#0077B5] hover:border-[#0077B5] group">
                <svg size={16} fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-[#0077B5] group-hover:text-white transition-colors">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </button>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/dawood1123" target="_blank" className="inline-block">
              <button className="flex items-center gap-3 border border-white/10 bg-white/5 text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all hover:bg-white/10 hover:border-[#00A3FF]/50">
                <Github size={16} />
                GitHub
              </button>
            </Link>

            {/* Resume */}
            <Link href="/resume.pdf" target="_blank" className="inline-block">
              <button className="flex items-center gap-3 border border-white/10 bg-white/5 text-white px-8 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all hover:bg-white/10 hover:border-[#00A3FF]/50">
                <FileText size={16} />
                Resume
              </button>
            </Link>
          </div>
        </div>

        {/* Image Area */}
        <div className="lg:w-1/2 relative flex items-end justify-center h-[500px] md:h-[700px]">
          <div className="absolute bottom-20 w-[450px] h-[450px] bg-[#00A3FF]/15 blur-[120px] rounded-full" />
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            src="/me.jpg" 
            alt="Dawood Ahmed"
            className="relative z-10 w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000 brightness-90"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 100%)'
            }}
          />
        </div>
      </div>
    </section>
  );
}