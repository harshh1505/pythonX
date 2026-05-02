import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Google Ads / PPC',
    category: 'Digital Marketing',
    desc: 'Instantly drive highly targeted traffic and optimize your ROI with Python X\'s performance-based Google Ads and PPC management services in Kolkata.',
    features: ['Search & Display Campaigns', 'Smart Bid Optimization', 'Compelling Ad Creation', 'Advanced Conversion Tracking'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5363392?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Performance-Based SEM & PPC Solutions in Kolkata',
        text: 'Transform your business with Python X\'s all-encompassing Search Engine Marketing (SEM) and Pay-Per-Click (PPC) solutions. When you need immediate visibility and highly qualified leads, Google Ads is the ultimate tool. As Kolkata\'s premier PPC agency, we leverage cutting-edge targeting technology and deep market insights to amplify your online presence, ensuring you only pay for measurable, profitable results.'
      },
      {
        title: 'Maximize Your Ad Spend ROI',
        text: 'Our Google Ads experts orchestrate and oversee your paid campaigns from inception to execution. We handle every facet of your PPC strategy: from rigorous competitor keyword research and optimal campaign structuring to crafting compelling ad copy and implementing complex A/B testing. We continuously monitor and refine your Quality Scores and bid strategies to lower your Cost-Per-Click (CPC) while maximizing your conversion rates.'
      }
    ],
    whyChoose: [
      { title: 'Data-Driven Bid Management', text: 'We don\'t guess; we use hard data. We continuously fine-tune your bids to ensure maximum ROI and extreme cost-effectiveness for your daily budget.' },
      { title: 'Laser-Focused Targeting', text: 'We minimize wasted ad spend by precisely targeting your ideal audience using advanced demographic, geographic, and behavioral targeting parameters.' },
      { title: 'Comprehensive Conversion Tracking', text: 'We implement robust tracking systems to monitor every purchase, form submission, and phone call, proving the exact value of your PPC investment.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
