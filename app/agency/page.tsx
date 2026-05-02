'use client';

import { Navbar } from '@/components/navbar';

export default function AgencyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Our Story</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">
            We are PythonX. <br /> Architects of Digital Growth.
          </h1>
          <p className="text-2xl text-foreground/60 font-serif leading-relaxed mb-12">
            Founded with a vision to bridge the gap between creative design and data-driven marketing, PythonX has evolved into a powerhouse for ambitious brands seeking global impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-24 mt-24">
          <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif mb-8">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              We believe that every brand has a unique story that deserves to be told through high-performance digital experiences. Our mission is to empower businesses with the tools, strategies, and design excellence they need to thrive in a rapidly evolving digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-serif text-primary mb-2">Creativity</div>
                <p className="text-xs text-foreground/40 leading-relaxed">Pushing the boundaries of what's possible in design.</p>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary mb-2">Strategy</div>
                <p className="text-xs text-foreground/40 leading-relaxed">Data-driven decisions for measurable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
