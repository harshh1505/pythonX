'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ready to accelerate your growth? Let&apos;s talk about your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-foreground/60">hello@pythonx.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Phone</h4>
                <p className="text-foreground/60">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-foreground/60">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
