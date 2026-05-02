'use client';

import Link from 'next/link';
import { 
  Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin, 
  ArrowRight, Monitor, Smartphone, Palette, Layout, Search, BarChart, Share2 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tighter hover:text-primary transition-colors">
              PythonX
            </Link>
            <p className="text-foreground/50 leading-relaxed max-w-xs">
              Architects of digital growth, blending high-performance engineering with data-driven marketing to elevate ambitious brands to new heights.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-8">Core Expertise</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Architecture', href: '/services/website-design-development' },
                { name: 'App Engineering', href: '/services/app-development' },
                { name: 'UI/UX Strategy', href: '/services/ui-ux-design' },
                { name: 'SEO Dominance', href: '/services/seo' },
                { name: 'Growth Marketing', href: '/services/google-ads-ppc' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-8">Agency</h4>
            <ul className="space-y-4">
              {[
                { name: 'The Studio', href: '/agency' },
                { name: 'Our Work', href: '/portfolio' },
                { name: 'Process', href: '/#process' },
                { name: 'Insights', href: '#' },
                { name: 'Get in Touch', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hub */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-8">Contact Hub</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/60 leading-relaxed">
                  123 Digital Plaza, Park Street,<br />Kolkata, WB 700016
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/60">+91 (33) 2244 5566</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/60">hello@pythonx.agency</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
                Start a Project <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Legal & Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs text-foreground/40 font-medium">
            © {currentYear} PythonX Agency. All rights reserved. Made for ambitious brands.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-[10px] uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
