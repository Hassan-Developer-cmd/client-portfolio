"use client"
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

export default function Certificates() {
  const certs = [
    { title: "HTML for Programmers", provider: "LinkedIn", image: "/cert1.jpg" },
    { title: "CSS Fundamentals", provider: "LinkedIn", image: "/cert2.jpg" }
  ];

  return (
    <section id="certificates" className="py-20 px-4 md:px-8 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Sizes adjusted for mobile */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white">
            Certificates<span className="text-[#00A3FF]">.</span>
          </h2>
        </div>

        {/* Grid - Stack on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} // Smoothness fix
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-[40px] border border-white/10 bg-[#0A0A0A]">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase">{cert.title}</h3>
                  <p className="text-gray-500 text-[10px] font-mono">{cert.provider}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}