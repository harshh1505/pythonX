import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'WhatsApp Marketing',
    category: 'Digital Marketing',
    desc: 'Achieve 90%+ open rates by engaging your customers directly on their favorite app. Python X offers cutting-edge WhatsApp automation services in Kolkata.',
    features: ['Smart Automated Replies', 'Targeted Broadcast Campaigns', 'WhatsApp Business API', 'Engagement Analytics'],
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Direct-to-Consumer Excellence via WhatsApp',
        text: 'In today\'s mobile-first world, traditional channels are becoming crowded. With open rates routinely exceeding 90%, WhatsApp marketing is undisputedly the most direct, intimate, and effective way to reach your target audience. Python X helps businesses in Kolkata leverage the immense power of the WhatsApp Business API to drive engagement, provide instant support, and significantly boost conversion rates.'
      },
      {
        title: 'Scalable Automation & Broadcast Strategies',
        text: 'We develop comprehensive WhatsApp strategies that include ethical contact list building through opt-in campaigns. Our team crafts concise, highly engaging broadcast messages that drive immediate action without feeling intrusive. Furthermore, we implement sophisticated chatbot automation to handle common customer inquiries 24/7, ensuring your business never misses an opportunity to connect with a potential lead.'
      }
    ],
    whyChoose: [
      { title: 'Unbeatable Engagement Rates', text: 'Cut through the noise of crowded email inboxes and social feeds with direct messages that get seen, read, and acted upon instantly.' },
      { title: 'Personalized Customer Touch', text: 'Build stronger, more trusting relationships through one-on-one conversational marketing that feels highly personal and human.' },
      { title: 'Scalable 24/7 Automation', text: 'Handle thousands of customer conversations and inquiries simultaneously with intelligent chatbots, without losing the personal touch.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
