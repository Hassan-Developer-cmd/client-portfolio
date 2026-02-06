"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Search, Code, ShieldCheck, Zap } from "lucide-react";

const services = [
  { title: "Manual Testing", icon: <Search />, desc: "Detailed exploratory testing to find edge-case bugs." },
  { title: "Automation", icon: <Code />, desc: "Building robust Selenium & Playwright frameworks." },
  { title: "Security QA", icon: <ShieldCheck />, desc: "Vulnerability assessment and security compliance." },
  { title: "Performance", icon: <Zap />, desc: "Load testing using JMeter for high-traffic apps." }
];

function ServiceCard({ service }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 overflow-hidden"
    >
      {/* Magic Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 163, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00A3FF] mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-20">
          My <span className="text-[#00A3FF]">Expertise.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}