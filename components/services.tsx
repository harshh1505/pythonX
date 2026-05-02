'use client';

import { SearchCheck, TrendingUp, Share2, Code2, Palette } from 'lucide-react';

const services = [
  {
    icon: SearchCheck,
    title: 'SEO Optimization',
    description: 'Rank higher on search engines with our comprehensive SEO strategies and continuous optimization.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable results and maximize your marketing ROI.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engage your audience with compelling content and strategic social media growth.',
  },
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Fast, responsive, and conversion-optimized websites built with modern technologies.',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Create a memorable brand identity with stunning visual design and strategic positioning.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
