"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bug, FileCode, CheckCircle, Search } from "lucide-react";

// 3D Card Animation Component
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative h-44 w-full rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:border-[#00A3FF]/50 transition-colors"
    >
      <div style={{ transform: "translateZ(50px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default function About() {
  // Stats updated from your PDF skills and experience [cite: 19, 20, 21]
  const stats = [
    { label: "Bug Tracking", value: "JIRA", icon: <Bug size={24} className="text-[#FF4D4D]"/> },
    { label: "Execution", value: "Manual", icon: <CheckCircle size={24} className="text-[#00FF85]"/> },
    { label: "Documentation", value: "QA Plans", icon: <FileCode size={24} className="text-[#00A3FF]"/> },
    { label: "Analysis", value: "Detail", icon: <Search size={24} className="text-[#FFB800]"/> },
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Professional Bio [cite: 12, 13, 16] */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00A3FF] font-mono tracking-[0.3em] uppercase text-xs mb-4"
          >
            01. Professional Bio
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            who is <br /> <span className="text-[#00A3FF]">Dawood Ahmed?</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-8">
            A <span className="text-white font-medium italic">Quality Assurance Expert</span> and Software Engineering student at <span className="text-white border-b border-[#00A3FF]">Islamia College Peshawar</span>. 
          </p>
          <p className="text-gray-500 text-lg max-w-xl">
            Currently in my 5th semester, I specialize in manual test execution and identifying the smallest glitches that others miss. My mission is to improve every line of code and deliver bug-free, user-friendly software.
          </p>
        </motion.div>

        {/* Right Side: 3D Stats Cards [cite: 5, 18] */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <div className="flex flex-col h-full justify-between">
                  <div className="opacity-50">{stat.icon}</div>
                  <div>
                    <h3 className="text-3xl font-black tracking-tighter">{stat.value}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{stat.label}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}