import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Social Media Marketing',
    category: 'Digital Marketing',
    desc: 'Python X is a data-driven social media marketing agency in Kolkata, specializing in viral campaigns and community building for B2B and B2C brands.',
    features: ['Strategic SMM Planning', 'Platform-Specific Content', 'Viral Campaign Creation', 'Community Engagement'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Data-Driven Social Media Marketing Agency in Kolkata',
        text: 'Boost your digital impact with Python X, a data-driven social media marketing (SMM) agency based in Kolkata. We specialize in optimizing social media campaigns for both B2B and B2C businesses across platforms like Instagram, Facebook, LinkedIn, and Twitter. We know that it’s not just the number of impressions that matter—it’s the quality of engagement and the volume of qualified leads generated.'
      },
      {
        title: 'Building Communities and Driving Sales',
        text: 'We take a highly proactive approach to managing your social media channels. Our creative team develops visually stunning, highly shareable content that captivates your audience while our strategists actively engage with followers to build a loyal community. By utilizing data-backed strategies, we meticulously track clicks, shares, and conversions, constantly optimizing your marketing budget to ensure maximum Return on Investment (ROI).'
      }
    ],
    whyChoose: [
      { title: 'Targeted Market Identification', text: 'We help you pinpoint exactly where your potential customers are most active online, preventing wasted resources on the wrong platforms.' },
      { title: 'Engaging Content Creation', text: 'Our in-house creatives produce compelling videos, graphics, and copy that stops the scroll and demands attention from your target demographic.' },
      { title: 'Maximizing Paid Social Results', text: 'Beyond organic growth, we masterfully manage highly targeted paid social media advertising campaigns to drive immediate sales and performance.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
