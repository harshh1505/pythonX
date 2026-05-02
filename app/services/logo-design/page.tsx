import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Logo Design',
    category: 'Design & Development',
    desc: 'Establish a powerful, memorable, and recognizable brand identity with our creative, bespoke logo design services in Kolkata.',
    features: ['Unique Concept Creation', 'Vector Formats', 'Brand Guidelines', 'Multiple Variations'],
    image: 'https://images.unsplash.com/photo-1626785774625-ddc7c82a173e?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Professional Logo Design Services in Kolkata',
        text: 'Your logo is the cornerstone of your brand identity. It is often the very first point of contact between your business and your potential customers. At Python X, we specialize in creating memorable, versatile, and timeless logos that instantly communicate your brand values. Our logo design services in Kolkata are tailored to help businesses establish a powerful, authoritative presence in their respective markets.'
      },
      {
        title: 'Crafting Visual Identities That Last',
        text: 'Our expert designers combine artistic intuition with rigorous strategic thinking. The process begins with deep discovery—understanding your mission, audience, and competitors. We then move to conceptualization, sketching out unique directions. The final result is a polished, scalable vector graphic accompanied by comprehensive brand guidelines, ensuring your logo looks stunning everywhere from a tiny website favicon to a massive billboard.'
      }
    ],
    whyChoose: [
      { title: 'Unforgettable Memorability', text: 'We design distinctive logos that stick in the minds of your customers, fostering long-term brand recall and loyalty.' },
      { title: 'Infinite Versatility', text: 'Provided in pristine vector formats, your logo will maintain its crispness and impact across all digital and print mediums.' },
      { title: 'Comprehensive Brand Guidelines', text: 'We don’t just give you an image; we provide a complete rulebook for how to use your logo, colors, and typography effectively.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
