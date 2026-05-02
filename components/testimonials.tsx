'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Solutions',
    content: 'PythonX transformed our marketing strategy. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, EcoStore',
    content: 'Professional, data-driven, and results-oriented. Best partnership we have made.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder, StyleHub Fashion',
    content: 'Their team understood our brand vision and executed flawlessly. Highly recommended!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border/50">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
