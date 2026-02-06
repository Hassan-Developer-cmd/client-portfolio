"use client"
import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, MapPin } from "lucide-react";

export default function AcademicJourney() {
  const education = [
    {
      degree: "BS Software Engineering",
      institute: "Islamia College Peshawar",
      duration: "2023 — 2027",
      details: "Currently in 5th Semester. Specializing in Software Quality Assurance and Manual Testing.",
      type: "university"
    },
    {
      degree: "F.Sc Pre-Engineering",
      institute: "Islamia College Peshawar",
      duration: "2021 — 2023",
      details: "Intermediate studies with a focus on Mathematics and Physics.",
      type: "college"
    },
    {
      degree: "Secondary School (Matric)",
      institute: "Peshawar Model School",
      duration: "2019 — 2021",
      details: "Science group with focus on Computer Science fundamentals.",
      type: "school"
    }
  ];

  return (
    <section id="education" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header - Sizes Optimized */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00A3FF] font-mono tracking-[0.2em] text-[10px] uppercase mb-2"
          >
            02. Education
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            Academic <span className="text-white/20">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-3 h-3 bg-[#00A3FF] rounded-full shadow-[0_0_10px_rgba(0,163,255,0.4)]" />

              <div className="group">
                <div className="flex items-center gap-3 text-gray-500 font-mono text-[10px] mb-2 uppercase tracking-widest">
                  <Calendar size={12} /> {item.duration}
                  <span className="text-white/10">|</span>
                  <span className="text-[#00A3FF]/60 uppercase">Peshawar</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#00A3FF] transition-colors leading-tight">
                  {item.degree}
                </h3>
                
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-400 mt-1 mb-4">
                  {item.type === "university" ? <GraduationCap size={16} /> : <School size={16} />}
                  {item.institute}
                </div>

                <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Line animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-[-1px] w-[1px] bg-gradient-to-b from-[#00A3FF] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}