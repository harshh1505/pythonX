'use client';

import { Navbar } from '@/components/navbar';
import { 
  Monitor, Smartphone, Palette, Layout, Search, BarChart, Share2, Mail, 
  ArrowRight, CheckCircle2, Zap, Target, BarChart3, ShieldCheck, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

interface ServiceLayoutProps {
  service: {
    title: string;
    category: string;
    desc: string;
    features: string[];
    image: string;
    longContent: { title: string; text: string }[];
    whyChoose: { title: string; text: string }[];
  };
}

export function ServiceLayout({ service }: ServiceLayoutProps) {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">{service.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-background font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-widest text-xs">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 border border-white/20 font-bold py-4 px-8 rounded-xl hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 animate-in fade-in slide-in-from-right-8 duration-1000">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Detailed Long Content Sections */}
        {service.longContent && (
          <div className="space-y-32 mb-48">
            {service.longContent.map((item, i) => (
              <div key={i} className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight border-l-4 border-primary pl-6">
                  {item.title}
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed whitespace-pre-wrap">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Why Choose Us Section */}
        {service.whyChoose && (
          <div className="pt-32 border-t border-white/5 mb-48">
            <h2 className="text-4xl md:text-6xl font-serif mb-24 text-center">Why Choose Our {service.title} Services?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {service.whyChoose.map((item, i) => (
                <div key={i} className="p-10 glass rounded-3xl hover:bg-white/5 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Promo Section */}
        <div className="py-24 border-y border-white/5 mb-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-serif mb-4">Empowering Digital Growth</h3>
            <p className="text-foreground/50 leading-relaxed italic">
              "At PythonX, we empower your digital journey with comprehensive solutions tailored to your unique business needs. Trust us as your dedicated partner in achieving your growth goals."
            </p>
          </div>
          <Link href="/contact" className="text-primary font-bold border-b border-primary pb-1">
            Partner with us →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-32 border-t border-white/5">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">Core Capabilities</h2>
            <p className="text-foreground/50 leading-relaxed">
              We leverage the latest technologies and data-driven insights to deliver exceptional results in {service.title.toLowerCase()}.
            </p>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-8 glass rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-bold">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-48 glass rounded-[3rem] p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Ready to achieve <br /> digital dominance?
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Contact us today for a free strategy session and let's map out your path to the peak of digital success.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-background font-bold py-6 px-12 rounded-2xl hover:bg-primary/90 transition-all uppercase tracking-[0.2em] text-sm">
            Contact Our Strategists
          </Link>
        </div>
      </div>
    </main>
  );
}
