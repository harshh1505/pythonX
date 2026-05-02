'use client';

import { Navbar } from '@/components/navbar';

const projects = [
  { title: 'TechFlow Evolution', category: 'Web Architecture', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Lumina Branding', category: 'Brand Evolution', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
  { title: 'Zenith App', category: 'Mobile Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
  { title: 'Apex Strategy', category: 'Digital Strategy', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800' },
  { title: 'Nova Marketing', category: 'Growth Engine', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' },
  { title: 'Orbit Cloud', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800' },
];

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">
            Curated Impact. <br /> Selected Works.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{p.category}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="container mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/5 mt-24">
        <div className="max-w-xs">
          <div className="text-2xl font-bold mb-6">PythonX</div>
          <p className="text-foreground/60 leading-relaxed">
            Elevating ambitious brands through data-driven digital marketing and high-performance web architecture.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div>
            <h4 className="text-primary font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-foreground/80">
              <li>SEO Optimization</li>
              <li>Web Development</li>
              <li>Brand Identity</li>
              <li>Growth Strategy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-bold mb-6">Agency</h4>
            <ul className="flex flex-col gap-4 text-foreground/80">
              <li>Our Team</li>
              <li>Portfolio</li>
              <li>Process</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
