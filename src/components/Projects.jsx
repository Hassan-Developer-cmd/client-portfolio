"use client"
import { motion } from "framer-motion";
import { Github } from "lucide-react"; // ArrowUpRight hata diya

export default function Projects() {
  const title = "Selected Works";

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

  const projectData = [
    {
      title: "Web Application Manual Testing (CRUD Application)",
      desc: "Managed end-to-end CRUD manual testing, Jira defect reporting, and regression cycles.",
      tags: ["TestRail", "Postman", "Jira"],
    },
    {
      title: "Live Website Manual Testing Assignment",
      desc: "Performed E2E testing on live sites, validating UI/UX, forms, and navigation with full test documentation.",
      tags: ["Postman", "Jira", "Testrail"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* --- ANIMATED HEADING START --- */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-[#00A3FF] font-mono tracking-[0.5em] text-[10px] uppercase mb-4"
          >
            Showcase
          </motion.p>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white flex flex-wrap">
            {title.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={letterVariants}
                className={char === " " ? "mr-4" : ""}
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
        {/* --- ANIMATED HEADING END --- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 overflow-hidden hover:border-[#00A3FF]/50 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[9px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Arrow icon aur Link yahan se remove kar diye hain */}
                </div>
                
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-2 max-w-sm">
                  {project.desc}
                </p>
              </div>

              {/* Background Glow on Hover */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00A3FF]/10 blur-[80px] rounded-full group-hover:bg-[#00A3FF]/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}