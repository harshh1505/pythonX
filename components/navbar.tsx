'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, ChevronDown, Monitor, Smartphone, Palette, Layout, 
  Search, BarChart, Share2, Mail, Phone, Instagram, Twitter, Linkedin 
} from 'lucide-react';

const services = [
  {
    category: 'DESIGN & DEVELOPMENT',
    items: [
      { name: 'Website Design & Development', icon: Monitor, desc: 'High-performance bespoke sites', slug: 'website-design-development' },
      { name: 'App Development', icon: Smartphone, desc: 'Native and cross-platform apps', slug: 'app-development' },
      { name: 'Graphic Design', icon: Palette, desc: 'Visual identity and assets', slug: 'graphic-design' },
      { name: 'UI/UX Design', icon: Layout, desc: 'User-centric experiences', slug: 'ui-ux-design' },
    ]
  },
  {
    category: 'DIGITAL MARKETING',
    items: [
      { name: 'Search Engine Optimization (SEO)', icon: Search, desc: 'Dominate search rankings', slug: 'seo' },
      { name: 'Google Ads / PPC', icon: BarChart, desc: 'Targeted paid performance', slug: 'google-ads-ppc' },
      { name: 'Social Media Marketing', icon: Share2, desc: 'Engagement and community', slug: 'social-media-marketing' },
      { name: 'Email Marketing', icon: Mail, desc: 'Direct conversion strategies', slug: 'email-marketing' },
    ]
  }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full transition-all duration-500">
      {/* Top Navbar: Contact & Logo */}
      <div className={`w-full border-b border-white/10 transition-all duration-500 ${
        scrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-background/90 backdrop-blur-xl py-4'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="tel:9905909990" className="flex items-center gap-3 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              9905909990
            </a>
            <a href="mailto:abhinav@pythonx.in" className="flex items-center gap-3 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              abhinav@pythonx.in
            </a>
          </div>
          
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter hover:text-primary transition-colors">
            PythonX
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Instagram className="w-4 h-4 text-foreground/50 hover:text-primary cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-foreground/50 hover:text-primary cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 text-foreground/50 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navbar: Navigation Links */}
      <nav 
        className={`w-full transition-all duration-500 ${
          scrolled ? 'bg-background/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Main Bar Logo (Visible only when scrolled or as secondary) */}
          <Link href="/" className={`text-2xl font-bold tracking-tighter transition-all duration-500 ${
            scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}>
            PythonX
          </Link>

          {/* Desktop Navigation */}
          <div className={`flex items-center gap-10 transition-all duration-500 ${
            scrolled ? '' : 'mx-auto'
          }`}>
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-xs font-black tracking-[0.2em] uppercase hover:text-primary transition-colors cursor-pointer outline-none">
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-300 origin-top ${
                isServicesOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
                <div className="grid grid-cols-2 gap-12">
                  {services.map((cat) => (
                    <div key={cat.category}>
                      <h3 className="text-[10px] font-black tracking-[0.2em] text-primary mb-6 opacity-80">{cat.category}</h3>
                      <div className="flex flex-col gap-6">
                        {cat.items.map((item) => (
                          <Link key={item.name} href={`/services/${item.slug}`} className="group/item flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-white/5 group-hover/item:bg-primary/20 transition-colors">
                              <item.icon className="w-4 h-4 group-hover/item:text-primary transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-bold group-hover/item:text-primary transition-colors">{item.name}</div>
                              <div className="text-[11px] text-foreground/40 font-medium">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <p className="text-[11px] text-foreground/40 font-medium italic">And many more tailored solutions for your growth...</p>
                  <Link href="/portfolio" className="text-xs font-bold text-primary hover:underline">View All Projects →</Link>
                </div>
              </div>
            </div>

            {['Portfolio', 'Agency', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-xs font-black tracking-[0.2em] uppercase hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Account */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <User className="w-4 h-4 group-hover:text-primary transition-colors" />
            </div>
            <span className="hidden md:block text-[10px] font-black tracking-widest uppercase group-hover:text-primary transition-colors">Account</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
