"use client"
import { motion } from "framer-motion";

const tools = [
  { name: "Selenium", level: "90%" },
  { name: "Postman", level: "85%" },
  { name: "Jira", level: "80%" },
  { name: "Playwright", level: "75%" },
  { name: "Java", level: "85%" },
  { name: "Python", level: "70%" },
];

export default function TechStack() {
  return (
    <section className="py-32 px-8 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-20">
          Technical <span className="text-[#00A3FF]">Arsenal.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[30px] bg-white/5 border border-white/10 group transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest">{tool.name}</h3>
                <span className="text-[#00A3FF] font-black">{tool.level}</span>
              </div>
              {/* Progress Bar */}
              <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: tool.level }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#00A3FF]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}