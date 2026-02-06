"use client"
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

export default function Certificates() { // Component ka naam Certificates
  const certs = [
    {
      title: "HTML for Programmers",
      provider: "LinkedIn Learning",
      image: "/cert1.jpg", 
    },
    {
      title: "CSS Fundamentals",
      provider: "LinkedIn Learning",
      image: "/cert2.jpg", 
    }
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    /* ID MUST BE EXACTLY "certificates" (all lowercase) */
    <section id="certificates" className="py-24 px-8 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00A3FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00A3FF] font-mono tracking-[0.5em] text-[10px] uppercase mb-4"
          >
            Verified Achievements
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white flex flex-wrap">
            {"Certificates".split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="text-[#00A3FF]"
            >
              .
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/5 bg-[#0A0A0A] transition-all duration-500 group-hover:border-[#00A3FF]/40">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-[#00A3FF]" size={18} />
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">LinkedIn Verified</span>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#00A3FF] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider">{cert.provider}</p>
                </div>

                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#00A3FF] hover:border-[#00A3FF] z-50"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="absolute -inset-2 bg-[#00A3FF]/10 blur-[50px] rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}