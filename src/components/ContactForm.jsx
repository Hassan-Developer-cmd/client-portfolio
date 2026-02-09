"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const phoneNumber = "923439125442"; 
    
    // Sirf Name aur Message jayega, koi "Portfolio Inquiry" ka tag nahi
    const text = `*Name:* ${formData.name}%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#00A3FF] font-mono tracking-[0.4em] text-[10px] uppercase mb-4"
          >
            04. Get in touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
          >
            Let's <span className="text-white/20">Connect.</span>
          </motion.h2>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form onSubmit={handleWhatsAppSend} className="space-y-4">
            <input 
              type="text" 
              placeholder="YOUR NAME"
              required
              className="w-full bg-white/[0.03] border border-white/10 p-6 rounded-[24px] focus:border-[#00A3FF]/50 outline-none transition-all text-white font-mono text-[10px] tracking-widest"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            
            <textarea 
              placeholder="YOUR MESSAGE"
              required
              rows="6"
              className="w-full bg-white/[0.03] border border-white/10 p-8 rounded-[32px] focus:border-[#00A3FF]/50 outline-none transition-all text-white font-mono text-[10px] tracking-widest resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            
            <button 
              type="submit"
              className="group w-full flex items-center justify-center gap-4 bg-white text-black py-7 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#00A3FF] hover:text-white transition-all duration-500"
            >
              Send via WhatsApp
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}