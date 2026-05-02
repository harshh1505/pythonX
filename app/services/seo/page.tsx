import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    desc: 'Transform your business visibility with Python X – Kolkata\'s premier SEO agency offering ethical, aggressive, and result-oriented SEO strategies.',
    features: ['Advanced Keyword Research', 'Technical SEO Audits', 'On-Page Optimization', 'High-Authority Link Building'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Kolkata\'s Leading SEO Agency',
        text: 'If you are searching for a definitive pathway to elevate your business visibility in Kolkata, look no further than Python X. As the premier SEO company in the region, we deliver ethical, aggressive, and highly effective Search Engine Optimization strategies built to benefit local and global businesses alike. Our team comprises skilled SEO professionals who understand the intricate, ever-changing algorithms of Google.'
      },
      {
        title: 'Comprehensive SEO Strategies for Dominant Rankings',
        text: 'We don\'t believe in one-size-fits-all solutions. Our customized SEO approach includes deep-dive technical audits to fix crawlability issues, meticulous on-page optimization of title tags and meta descriptions, and the creation of highly relevant, intent-driven content. Additionally, our robust off-page SEO and link-building campaigns acquire high-quality backlinks from authoritative domains, cementing your website\'s credibility and pushing you to the top of the search engine results pages (SERPs).'
      }
    ],
    whyChoose: [
      { title: 'Proven SEO Expertise', text: 'With years of industry experience and a dedicated team of SEO analysts, we bring unparalleled, up-to-date expertise to every optimization project.' },
      { title: 'White-Hat Techniques', text: 'We strictly adhere to Google’s Webmaster Guidelines, ensuring your website achieves sustainable, long-term growth without the risk of algorithmic penalties.' },
      { title: 'Transparent Reporting', text: 'We believe in complete transparency. You will receive detailed monthly reports tracking your keyword rankings, organic traffic growth, and ROI.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
