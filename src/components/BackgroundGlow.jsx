"use client"

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left - Blue Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00A3FF]/10 blur-[100px] rounded-full" />
      
      {/* Center Right - Subtle Purple */}
      <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full" />
      
      {/* Bottom Left - Cyan/Blue */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#00A3FF]/5 blur-[100px] rounded-full" />

      {/* Subtle Noise Texture (Optional: Is se premium feel aati hai) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}