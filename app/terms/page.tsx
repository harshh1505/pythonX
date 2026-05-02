'use client';

import { Navbar } from '@/components/navbar';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          
          <div className="space-y-12 text-foreground/70 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by PythonX, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Service Engagement</h2>
              <p>
                PythonX provides digital marketing, web architecture, and design services. Specific project terms, timelines, and deliverables will be outlined in separate Service Agreements or Statements of Work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, PythonX retains all intellectual property rights to the methods, processes, and tools used to deliver services. Client-specific deliverables will become the property of the Client upon full payment of fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Limitation of Liability</h2>
              <p>
                PythonX shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services. We do not guarantee specific business outcomes such as exact ranking positions or conversion rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
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
