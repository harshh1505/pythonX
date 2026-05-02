import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Graphic Design',
    category: 'Design & Development',
    desc: 'Elevate your brand\'s visual identity with Python X\'s expert Graphic Design Services in Kolkata. We create stunning visual assets that resonate with your audience.',
    features: ['Marketing Collateral', 'Social Media Graphics', 'Brand Identity', 'Print Design'],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Creative Graphic Design Services in Kolkata',
        text: 'Elevate your brand\'s visual identity with Python X\'s expert Graphic Design Services. Our talented team of designers in Kolkata combines creativity with strategic marketing insights to craft stunning visuals that truly resonate with your target audience. From comprehensive marketing materials and brochures to dynamic social media graphics, we tailor our designs to reflect your brand\'s unique personality and core values.'
      },
      {
        title: 'Visual Storytelling That Converts',
        text: 'With a keen eye for detail and a steadfast commitment to quality, we ensure that every graphic element communicates your message effectively. In today’s fast-paced digital world, visual storytelling is paramount. We help you cut through the noise with striking imagery, cohesive typography, and harmonious color palettes that capture attention and drive action.'
      }
    ],
    whyChoose: [
      { title: 'Tailored Visual Solutions', text: 'Whether you need comprehensive marketing materials or engaging digital graphics, we provide bespoke design solutions tailored to your specific campaign goals.' },
      { title: 'Brand Consistency', text: 'We ensure absolute consistency across all your visual touchpoints, strengthening brand recall and establishing professional trust.' },
      { title: 'Strategic Creativity', text: 'Our designs are beautiful, but more importantly, they are strategic—built to guide the viewer’s eye and encourage conversion.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
