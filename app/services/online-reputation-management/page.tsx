import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Online Reputation Management',
    category: 'Digital Marketing',
    desc: 'Protect your brand equity and build unwavering consumer trust. Python X provides elite online reputation management (ORM) services in Kolkata.',
    features: ['Proactive Crisis Management', '24/7 Review Monitoring', 'Sentiment Analysis', 'Search Result Suppression'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Protect and Enhance Your Brand Equity',
        text: 'In the modern digital age, your online reputation is your most valuable business asset. A single negative review, a misleading article, or an unfavorable search result can impact your bottom line and deter potential customers significantly. Python X provides elite Online Reputation Management (ORM) services in Kolkata, working tirelessly to ensure that when people search for your brand, they are met with a positive, authoritative, and highly professional image.'
      },
      {
        title: 'Comprehensive ORM and Crisis Mitigation',
        text: 'Our ORM experts employ a proactive approach to brand protection. We conduct deep-dive reputation audits across search engines and social media platforms to assess current brand sentiment. From there, we deploy strategies to suppress negative search results by creating and ranking high-quality, positive content. We also manage review generation campaigns, encouraging your satisfied customers to share their positive experiences on platforms like Google My Business and Trustpilot.'
      }
    ],
    whyChoose: [
      { title: 'Proactive Brand Defense', text: 'We stop reputation crises before they escalate by identifying negative trends early and implementing swift, strategic mitigation responses.' },
      { title: 'Positive Review Generation', text: 'We implement automated systems to encourage your happiest clients to leave 5-star reviews, burying any unwarranted negative feedback naturally.' },
      { title: 'SEO-Driven Reputation Synergy', text: 'Our ORM strategies utilize advanced SEO techniques to ensure that your own positive, controlled content dominates the first page of Google for your brand name.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
