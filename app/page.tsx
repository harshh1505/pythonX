'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ServicesGrid } from '@/components/services';

const sections = [
  {
    id: '01',
    label: 'DIGITAL STRATEGY',
    title: 'Data-Driven Marketing That Scales',
    content: 'We don\'t just run ads; we build growth engines. Our strategic approach combines deep market analysis with creative excellence to ensure your brand doesn\'t just reach people—it resonates with them.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    label: 'WEB ARCHITECTURE',
    title: 'Websites That Convert Visitors Into Fans',
    content: 'A great website is your 24/7 salesperson. We craft high-performance, responsive web experiences that are as beautiful as they are functional, optimized for speed, SEO, and maximum conversion.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    label: 'BRAND EVOLUTION',
    title: 'Transforming Identity Into Impact',
    content: 'Your brand is more than a logo. It\'s the story you tell and the promise you keep. We help ambitious companies redefine their digital presence and build lasting authority in their industry.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your business, goals, and target audience.' },
  { step: '02', title: 'Strategy', desc: 'Crafting a bespoke roadmap for your digital success.' },
  { step: '03', title: 'Execution', desc: 'Flawless implementation of tech and marketing assets.' },
  { step: '04', title: 'Optimization', desc: 'Continuous monitoring and scaling for maximum ROI.' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('start');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (scrollPosition / docHeight) * 100;
      
      setScrollPercent(scrolled);
      
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection('start');
      } else {
        const current = Math.floor((scrollPosition - windowHeight * 0.5) / windowHeight) + 1;
        if (current <= sections.length) {
          setActiveSection(`0${current}`);
        } else {
          setActiveSection('footer');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Indicator (Right Sidebar) */}
      <div className="hidden lg:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col items-end gap-6 z-50">
        <div className="flex flex-col items-end gap-8 relative">
          {/* Progress Line */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/10" />
          <div 
            className="absolute right-0 top-0 w-[2px] bg-primary z-10 transition-all duration-300" 
            style={{ height: `${scrollPercent}%` }}
          />

          <div className="flex flex-col items-end gap-8">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`text-xs font-bold tracking-tighter transition-colors ${activeSection === 'start' ? 'text-foreground' : 'text-foreground/40'}`}>Start</a>
            {sections.map((s) => (
              <a 
                key={s.id}
                href={`#${s.id}`}
                className={`text-xs font-bold tracking-tighter transition-colors ${activeSection === s.id ? 'text-foreground' : 'text-foreground/40'}`}
              >
                {s.id}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Hero />
      <ServicesGrid />

      {/* Main Sections */}
      <div className="container mx-auto px-6 md:px-12 relative">
        {sections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id}
            className="min-h-screen flex flex-col md:flex-row items-center gap-12 md:gap-24 py-24"
          >
            <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative">
                <span className="absolute -top-20 -left-10 text-[10rem] md:text-[15rem] font-bold text-white/5 pointer-events-none">
                  {section.id}
                </span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-primary" />
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">{section.label}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-foreground/70 text-lg mb-8 max-w-lg leading-relaxed">
                    {section.content}
                  </p>
                  <button className="text-primary font-bold flex items-center gap-2 group">
                    explore service
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </section>
        ))}

        {/* --- New Sections to make the page longer --- */}

        {/* Process Section */}
        <section className="py-32 border-t border-white/5">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">How we work</span>
              <div className="w-8 h-[1px] bg-primary" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Our Proven Process</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {processSteps.map((s) => (
              <div key={s.step} className="group cursor-default">
                <div className="text-4xl font-serif text-white/10 group-hover:text-primary transition-colors duration-500 mb-6">{s.step}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32">
          <div className="glass rounded-[2rem] p-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-serif text-primary mb-2">150+</div>
              <div className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">98%</div>
              <div className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Client Retention</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">10x</div>
              <div className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Average ROI</div>
            </div>
            <div>
              <div className="text-5xl font-serif text-primary mb-2">24/7</div>
              <div className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Ongoing Support</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 pb-48">
          <div className="max-w-4xl mx-auto text-center italic">
            <h2 className="text-primary text-6xl font-serif mb-12 opacity-20">"</h2>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-12">
              PythonX transformed our digital presence from a simple website into a high-performance business tool. Their strategic approach to marketing and attention to detail in design is unparalleled.
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 mb-6 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=1" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="font-bold tracking-widest uppercase text-xs mb-1">Sarah Jenkins</div>
              <div className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">CEO, TechFlow Systems</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}




