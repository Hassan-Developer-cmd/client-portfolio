import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <p className="text-[#00A3FF] font-mono tracking-[0.3em] text-[10px] uppercase mb-4">04. Contact</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Let's <span className="text-white/20">Connect.</span>
          </h2>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
}