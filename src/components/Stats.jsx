"use client"
import { motion } from "framer-motion";
// Yahan 'LayoutSegments' ko 'LayoutGrid' se change kar diya hai
import { Bug, ClipboardCheck, LayoutGrid, PenTool } from "lucide-react";

export default function Stats() {
  const impactData = [
    { 
      label: "Manual Testing", 
      value: "Expert", 
      desc: "Precise execution & test cases", 
      icon: <ClipboardCheck className="text-[#00A3FF]" size={24} /> 
    },
    { 
      label: "Bug Tracking", 
      value: "JIRA", 
      desc: "Reporting & defect lifecycle", 
      icon: <Bug className="text-[#FF4D4D]" size={24} /> 
    },
    { 
      label: "Agile Flow", 
      value: "Sprint", 
      desc: "Agile testing methodologies", 
      icon: <LayoutGrid className="text-[#00FF85]" size={24} /> // Fixed Icon
    },
    { 
      label: "Documentation", 
      value: "Plans", 
      desc: "Detailed QA test reports", 
      icon: <PenTool className="text-[#FFB800]" size={24} /> 
    },
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#00A3FF]/40 transition-all group"
          >
            <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
              {item.icon}
            </div>
            <h3 className="text-3xl font-black text-white tracking-tighter">
              {item.value}
            </h3>
            <p className="text-[#00A3FF] text-[10px] uppercase tracking-[0.2em] font-bold mt-1">
              {item.label}
            </p>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}