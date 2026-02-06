import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; 
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// Education aur Certifications sections properly imported
import AcademicJourney from "@/components/Education"; 
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Cursor from "@/components/Cursor";
import BackgroundGlow from "@/components/BackgroundGlow";
import SmoothWrapper from "@/components/SmoothWrapper";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen">
      {/* Background elements (Fixed behind everything) */}
      <BackgroundGlow />
      <Cursor />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Hero Section - Main Entry */}
        <Hero />

        <div className="space-y-0">
          {/* 1. About Section - Introduction */}
          <section id="about">
            <SmoothWrapper><About /></SmoothWrapper>
          </section>

          {/* 2. Stats Section - Numbers/Impact */}
          <SmoothWrapper><Stats /></SmoothWrapper>
          
          {/* 3. Services Section - Expertise */}
          <section id="services">
            <SmoothWrapper><Services /></SmoothWrapper>
          </section>

          {/* 4. Skills Section - Tech Stack */}
          <SmoothWrapper><Skills /></SmoothWrapper>

          {/* 5. Projects Section - Portfolio Work */}
          <section id="projects">
            <SmoothWrapper><Projects /></SmoothWrapper>
          </section>

          {/* 6. Education Section - Academic Journey */}
          <section id="education">
            <SmoothWrapper><AcademicJourney /></SmoothWrapper>
          </section>

          {/* 7. Certifications Section - Professional Badges */}
          <section id="certifications">
            <SmoothWrapper><Certificates /></SmoothWrapper>
          </section>

          {/* 8. Contact Section - Lead Generation via WhatsApp */}
          <section id="contact">
            <SmoothWrapper><ContactForm /></SmoothWrapper>
          </section>
        </div>

        {/* Footer */}
        <footer className="py-20 text-center border-t border-white/5 bg-[#050505]">
          <div className="mb-4">
             <span className="text-white font-black text-xl tracking-tighter">
                DA<span className="text-[#00A3FF]">.</span>
             </span>
          </div>
          <p className="text-gray-600 font-bold uppercase tracking-[0.5em] text-[10px]">
            Dawood Ahmed — Peshawar, PK
          </p>
          <p className="text-gray-800 text-[8px] mt-4 uppercase tracking-widest">
            © 2026 All Rights Reserved
          </p>
        </footer>
      </div>
    </main>
  );
}