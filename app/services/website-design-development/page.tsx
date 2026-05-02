import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'Website Design & Development',
    category: 'Design & Development',
    desc: 'Embark on a digital journey with our unparalleled web development services in Kolkata. Our seasoned team of developers combines innovation and expertise to craft dynamic websites tailored to your unique business needs.',
    features: ['CMS Website Development', 'E-Commerce Solutions', 'Responsive Web Design', 'Mobile Website Development'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Premium Web Development Services in Kolkata',
        text: 'Embark on a digital journey with our unparalleled web development services in Kolkata. Our seasoned team of developers combines innovation and expertise to craft dynamic websites tailored to your unique business needs. From intuitive user interfaces to robust backend systems, we deliver excellence at every stage. As pioneers in the digital realm, we navigate the evolving landscape, ensuring your online presence is not just responsive but ahead of the curve. Collaborate with Python X to transform ideas into pixel-perfect reality, driving your business towards unparalleled success.'
      },
      {
        title: 'Custom CMS & E-Commerce Solutions',
        text: 'At Python X, our web development team in Kolkata thrives on a commitment to meticulous attention to detail, boundless creativity, and unwavering technical excellence in the realm of CMS development. Whether opting for Drupal, Joomla, or the versatile WordPress platform, our adept developers specialize in crafting bespoke CMS solutions precisely aligned with the distinctive requirements of our clients. Furthermore, we build high-converting e-commerce platforms that provide seamless shopping experiences.'
      }
    ],
    whyChoose: [
      { title: 'Goal-Oriented Approach', text: 'At Python X, our web design team in Kolkata places a strong emphasis on understanding user behavior. We use data-driven insights to structure websites that guide visitors toward conversion.' },
      { title: 'Easy-to-Manage Websites', text: 'We construct websites utilizing browser-based CMS systems, empowering you to effortlessly generate pages, upload content, and modify data without the need for coding expertise.' },
      { title: 'SEO-Optimized Architecture', text: 'Every website we build is optimized from the ground up for search engines, ensuring your business ranks higher in Kolkata and beyond.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
