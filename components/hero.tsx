'use client';

import { ArrowDown, Instagram, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          alt="Digital Network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>

      {/* Social Links (Left Sidebar) */}
      <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-20">
        <span className="text-vertical text-xs font-bold tracking-widest text-foreground/80">Follow us</span>
        <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
        <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
      </div>

      <div className="container mx-auto px-6 md:px-24 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Digital Growth Agency</span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] font-serif mb-12 leading-[1.1] text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Elevate Your Brand To <br /> The Peak Of Success
          </h1>

          <div 
            className="flex items-center gap-2 cursor-pointer group animate-in fade-in duration-1000 delay-500"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs font-bold tracking-widest uppercase">scroll to explore</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}




