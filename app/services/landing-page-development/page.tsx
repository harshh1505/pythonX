import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Landing Page Development',
    category: 'Design & Development',
    desc: 'Maximize your advertising ROI with high-converting, lightning-fast landing pages crafted by Kolkata\'s top web design agency.',
    features: ['High-Conversion Design', 'Sub-2 Second Load Times', 'Mobile-First Optimization', 'A/B Testing Ready'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'High-Performance Landing Page Design in Kolkata',
        text: 'A meticulously crafted landing page is your most effective, relentless 24/7 salesperson. If you are running paid ads without a dedicated landing page, you are leaving money on the table. At Python X, we engineer high-performance, ultra-responsive landing pages that are strategically optimized for maximum conversion. We reduce your bounce rates and significantly increase user retention through compelling design and flawless execution.'
      },
      {
        title: 'Built for Speed and Conversions',
        text: 'Our approach focuses heavily on psychological conversion triggers, clear and compelling value propositions, and entirely frictionless user journeys. We utilize persuasive copywriting, strategic color psychology, and clear calls-to-action (CTAs). Furthermore, our technical team ensures your landing page loads in under two seconds, satisfying both impatient users and strict search engine algorithms.'
      }
    ],
    whyChoose: [
      { title: 'Relentless ROI Focus', text: 'We prioritize measurable, bottom-line results over vanity metrics, ensuring your digital marketing spend translates directly into real business growth.' },
      { title: 'Lightning-Fast Speed Optimization', text: 'Our landing pages are technically optimized for extreme speed, minimizing bounce rates and maximizing the impact of your Google and Facebook ad campaigns.' },
      { title: 'Data-Driven A/B Testing', text: 'We build pages ready for multivariate testing, allowing us to continuously refine headlines and layouts to achieve the highest possible conversion rates.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
