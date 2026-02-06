"use client"
import { motion } from "framer-motion";

const experiences = [
  { year: "2024 - PRESENT", title: "Lead QA Strategist", company: "Freelance", detail: "Developing automation scripts and high-level test plans." },
  { year: "2022 - 2026", title: "BS Software Engineering", company: "Islamia College Peshawar", detail: "Focusing on Software Quality Assurance and Engineering." }
];

export default function Journey() {
  return (
    <section className="bg-black py-32 px-12 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-5xl font-black uppercase mb-20 tracking-tighter"
        >
          My <span className="text-[#00A3FF]">Journey</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 20, backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-10 glass-card rounded-[40px] flex flex-col md:flex-row justify-between items-start md:items-center border border-white/5 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[#00A3FF] font-bold tracking-widest text-sm">{exp.year}</span>
                <h3 className="text-4xl font-bold">{exp.title}</h3>
                <p className="text-gray-400 text-lg">{exp.company}</p>
              </div>
              <p className="text-gray-500 max-w-sm text-lg italic mt-4 md:mt-0">"{exp.detail}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}