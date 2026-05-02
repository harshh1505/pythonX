'use client';

import { Navbar } from '@/components/navbar';

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Contact Us</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">
              Let's Scale <br /> Together.
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12 max-w-md">
              Ready to take your digital presence to the next level? Get in touch and let's discuss your vision.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] font-black tracking-widest text-primary uppercase mb-2">Email Us</h4>
                <p className="text-2xl font-serif">hello@pythonx.agency</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black tracking-widest text-primary uppercase mb-2">Visit Us</h4>
                <p className="text-2xl font-serif">123 Digital Drive, Silicon Valley, CA</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-[2rem] p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase opacity-40">Your Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors font-serif text-xl" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase opacity-40">Your Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors font-serif text-xl" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest uppercase opacity-40">Your Message</label>
                <textarea className="w-full bg-transparent border-b border-white/10 py-4 h-32 outline-none focus:border-primary transition-colors font-serif text-xl resize-none" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full bg-primary text-background font-bold py-6 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-[0.2em] text-xs">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
