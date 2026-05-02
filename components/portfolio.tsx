'use client';

import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TechFlow Solutions',
    category: 'SaaS',
    traffic: '+250%',
    description: 'Growth Marketing',
  },
  {
    title: 'EcoStore Brand',
    category: 'E-Commerce',
    traffic: '+180%',
    description: 'SEO & Performance',
  },
  {
    title: 'CloudSync Platform',
    category: 'SaaS',
    traffic: '+320%',
    description: 'Full Marketing Funnel',
  },
  {
    title: 'Digital Agency Co',
    category: 'Services',
    traffic: '+150%',
    description: 'Brand Repositioning',
  },
  {
    title: 'StyleHub Fashion',
    category: 'Retail',
    traffic: '+280%',
    description: 'Social Media Growth',
  },
  {
    title: 'FinTech Innovations',
    category: 'FinTech',
    traffic: '+400%',
    description: 'Lead Generation',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Proven results from real clients across various industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>

              <p className="text-foreground/60 text-sm mb-6">{project.description}</p>

              <div className="pt-6 border-t border-border/50">
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  {project.traffic}
                </div>
                <p className="text-xs text-foreground/50 mt-1">Traffic Growth</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
