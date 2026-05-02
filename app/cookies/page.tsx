'use client';

import { Navbar } from '@/components/navbar';

export default function CookiesPage() {
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
            Cookies Settings
          </h1>
          
          <div className="space-y-12 text-foreground/70 leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help us understand how you interact with our site and provide a more personalized experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">How We Use Cookies</h2>
              <p>
                We use cookies for:
              </p>
              <ul className="list-disc pl-6 space-y-4 mt-4">
                <li>Essential site functionality.</li>
                <li>Analyzing traffic through Google Analytics.</li>
                <li>Remembering your preferences.</li>
                <li>Personalizing content and advertisements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Your Choices</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can choose to block all cookies, but please note that some parts of our website may not function correctly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-6">Managing Settings</h2>
              <p>
                You can adjust your cookie preferences at any time. By continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
            </section>

            <div className="pt-12 text-xs font-bold uppercase tracking-widest text-foreground/40">
              Last Updated: May 2, 2026
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
