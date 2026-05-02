'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Monitor, Smartphone, Palette, Layout, Search, 
  BarChart, Share2, Mail, MessageSquare, ShieldCheck, 
  ArrowRight, Code, Zap
} from 'lucide-react';

type Category = 'design' | 'marketing';

const services: Record<Category, any[]> = {
  design: [
    {
      title: 'Website Development',
      desc: 'Our web development agency in Kolkata takes pride in our attention to detail, creativity, and technical excellence when it comes to CMS...',
      icon: Code,
      slug: 'website-design-development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'App Development',
      desc: 'At Python X, our team of expert mobile app developers ensures that your business stays connected with your customers, regardless...',
      icon: Smartphone,
      slug: 'app-development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Landing Page Development',
      desc: 'Reduce your website bounce rate and increase user retention with our expert landing page design services in Kolkata...',
      icon: Zap,
      slug: 'landing-page-development',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'UI/UX Design',
      desc: 'Conversion-focused designs and search engine-friendly developments are part of our approach to creating a successful...',
      icon: Layout,
      slug: 'ui-ux-design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Graphic Design',
      desc: 'At our creative design agency in Kolkata, we specialize in crafting visually stunning and strategically effective designs that...',
      icon: Palette,
      slug: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Logo Design',
      desc: 'Establish a powerful and recognizable brand identity with our creative logo design services in Kolkata. Our team of experienced designers...',
      icon: ShieldCheck,
      slug: 'logo-design',
      image: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a173e?auto=format&fit=crop&q=80&w=300'
    }
  ],
  marketing: [
    {
      title: 'SEO',
      desc: 'Increase your qualified leads and revenue with ethical and aggressive SEO strategies built to benefit businesses in Kolkata...',
      icon: Search,
      slug: 'seo',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Google Ads / PPC',
      desc: 'Turn regular visitors into loyal customers, re-engage users who have become inactive, and get a competitive advantage with paid ads...',
      icon: BarChart,
      slug: 'google-ads-ppc',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Social Media Marketing',
      desc: "It's not the number of impressions that matter, it's the number of quality leads. Whether you're an international brand or a local business...",
      icon: Share2,
      slug: 'social-media-marketing',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Email Marketing',
      desc: 'Improve your brand engagement by delivering offers automatically. Get more conversions with scheduled follow-ups of qualified leads...',
      icon: Mail,
      slug: 'email-marketing',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'WhatsApp Marketing',
      desc: 'At our creative design agency in Kolkata, we specialize in crafting visually stunning and strategically effective designs that...',
      icon: MessageSquare,
      slug: 'whatsapp-marketing',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=300'
    },
    {
      title: 'Online Reputation Management',
      desc: 'Online Reputation Management (ORM) is the study and application of management styles to maintain a positive reputation of the business...',
      icon: ShieldCheck,
      slug: 'online-reputation-management',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=300'
    }
  ]
};

const categories: { id: Category; label: string }[] = [
  { id: 'design', label: 'DESIGN & DEVELOPMENT' },
  { id: 'marketing', label: 'DIGITAL MARKETING' }
];

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<Category>('design');

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold max-w-2xl leading-tight">
            Grow Your Business Online with Web Design, Internet Marketing, PPC and SEO in Kolkata
          </h2>
          
          <div className="flex border-b border-white/10 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-4 text-[10px] font-black tracking-widest uppercase transition-all relative ${
                  activeTab === cat.id ? 'text-primary' : 'text-foreground/40 hover:text-foreground'
                }`}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services[activeTab].map((service, i) => (
            <div 
              key={i} 
              className="bg-[#141414] rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </div>

              <div className="flex justify-between items-end mt-8">
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-primary hover:bg-primary hover:text-background transition-all duration-300 text-[10px] font-black tracking-widest uppercase"
                >
                  Read More
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-background/20">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
                
                <div className="w-32 h-32 absolute bottom-0 right-0 opacity-20 group-hover:opacity-100 transition-all duration-700 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <img src={service.image} alt="" className="w-full h-full object-cover rounded-tl-3xl grayscale group-hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
