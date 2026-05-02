import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Email Marketing',
    category: 'Digital Marketing',
    desc: 'Drive repeat sales and nurture leads with highly targeted, automated email marketing campaigns crafted by our Kolkata digital agency.',
    features: ['Automated Drip Campaigns', 'List Segmentation', 'Responsive Newsletter Design', 'A/B Subject Line Testing'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'High-Converting Email Marketing Services',
        text: 'Despite the rise of new platforms, email marketing remains one of the most powerful and cost-effective tools for direct customer engagement and revenue generation. Python X specializes in crafting impactful email campaigns that deliver both immediate sales and long-term brand loyalty. We help you transform your subscriber list into a highly profitable business asset.'
      },
      {
        title: 'Masterfully Designed Automation Strategies',
        text: 'Our approach goes far beyond simple newsletters. We emphasize the importance of a robust, segmented database, utilizing strategies like lead magnets and content upgrades for rapid list growth. We then implement intelligent, automated drip campaigns that deliver personalized offers automatically. Through rigorous A/B testing of subject lines and HTML newsletter designs, we ensure your emails avoid the spam folder and drive massive conversion rates.'
      }
    ],
    whyChoose: [
      { title: 'Advanced User Segmentation', text: 'We analyze your database to develop highly personalized email strategies tailored for specific users at different stages of the sales funnel.' },
      { title: 'Beautiful, Responsive Templates', text: 'We design stunning HTML marketing templates that mirror your website’s branding, ensuring a seamless transition from inbox to landing page.' },
      { title: 'In-Depth Campaign Analytics', text: 'Gain actionable insights with our detailed reports covering open rates, click-through rates, bounce rates, and total revenue generated per campaign.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
