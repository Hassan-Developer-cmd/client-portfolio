"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- 1. Sub-Component: 3D Interactive Card ---
const SkillCard = ({ title, category, percentage, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Card ki tilt intensity (7 degrees rakhi hai taake subtle lage)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group p-4"
    >
      {/* Background Neon Glow (Jo hover par card ke peechay chamakta hai) */}
      <div className="absolute inset-0 bg-[#00A3FF]/20 blur-[60px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100" />

      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - rect.left) / rect.width - 0.5);
          y.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-40 w-full rounded-2xl bg-[#0A0A0A] border border-white/5 p-6 transition-all duration-500 hover:border-[#00A3FF]/50 z-10"
      >
        <div style={{ transform: "translateZ(40px)" }} className="flex flex-col h-full justify-between">
          <div>
            <span className="text-[#00A3FF] font-mono text-[9px] uppercase tracking-widest block mb-2 opacity-80">
              {category}
            </span>
            <h3 className="text-white font-bold text-xl tracking-tight uppercase group-hover:text-[#00A3FF] transition-colors">
              {title}
            </h3>
          </div>
          
          <div className="flex items-end justify-between">
            <div className="w-full bg-white/5 h-[2px] mr-4 mb-2 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: `${percentage}%` }}
                 transition={{ duration: 1, delay: 0.5 }}
                 className="h-full bg-[#00A3FF]" 
               />
            </div>
            <span className="text-white font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">
              {percentage}%
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 2. Main Component: Skills Section ---
export default function Skills() {
  const title = "Arsenal";
  
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

  const skills = [
    { title: "Testiny/TestRail", category: "Automation", percentage: "90" },
    { title: "Playwright", category: "Automation", percentage: "85" },
    { title: "Postman", category: "API Testing", percentage: "95" },
    { title: "JMeter", category: "Performance", percentage: "80" },
    { title: "JIRA", category: "CI/CD", percentage: "95" },
    { title: "Python/Javascript", category: "Scripting", percentage: "85" },
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-black relative overflow-hidden">
      {/* Global Center Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className="text-[#00A3FF] font-mono tracking-[0.5em] text-[10px] uppercase mb-4"
            >
              Technical Expertise
            </motion.p>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.8] flex flex-wrap">
              {title.split("").map((char, index) => (
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

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="max-w-[280px] text-gray-500 font-mono text-[10px] uppercase leading-relaxed tracking-widest border-l border-white/10 pl-6"
          >
            Building automated quality gates and high-performance testing frameworks.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} index={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}