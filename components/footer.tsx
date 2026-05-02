'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                PX
              </div>
              <span className="font-bold text-lg text-foreground">PythonX</span>
            </div>
            <p className="text-sm text-foreground/60">
              Accelerating digital growth for brands worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-foreground/60 hover:text-foreground transition">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/60 hover:text-foreground transition">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/60 hover:text-foreground transition">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#portfolio" className="text-foreground/60 hover:text-foreground transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/60 hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/60 hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Twitter size={20} className="text-foreground/60 hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Linkedin size={20} className="text-foreground/60 hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors">
                <Github size={20} className="text-foreground/60 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 PythonX Technology & Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
