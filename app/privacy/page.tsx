'use client';

import { Navbar } from '@/components/navbar';

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Legal</span>
          </div>
          <h1 className="text-6xl font-serif mb-12 leading-tight">
            Privacy Policy
          </h1>
          
          <div className="space-y-12 text-foreground/70 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Introduction</h2>
              <p>
                At PythonX, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Information Collection</h2>
              <p>
                We collect information that you provide directly to us, such as when you contact us through our website, subscribe to our newsletter, or engage our services. This may include your name, email address, phone number, and business details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Use of Information</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li>Provide and maintain our services.</li>
                <li>Communicate with you regarding your projects or inquiries.</li>
                <li>Send promotional materials (with your consent).</li>
                <li>Improve our website performance and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Your Rights</h2>
              <p>
                You have the right to access, update, or delete the personal information we hold about you. Please contact us at hello@pythonx.agency to exercise these rights.
              </p>
            </section>

            <div className="pt-12 text-xs font-bold uppercase tracking-widest text-foreground/40">
              Last Updated: May 2, 2026
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
