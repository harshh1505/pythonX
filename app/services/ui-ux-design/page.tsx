import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'UI/UX Design',
    category: 'Design & Development',
    desc: 'Elevate your digital presence in Kolkata with Python X\'s top-tier UI/UX design services. We craft intuitive interfaces that drive user engagement and conversions.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Premier UI/UX Design Agency in Kolkata',
        text: 'Elevate your digital presence in Kolkata with Python X\'s top-tier UI/UX design services. Our expert team crafts intuitive interfaces and stunning visual hierarchies to engage users effectively. We believe that exceptional design is the bridge between user needs and business goals. By employing deep user research and empathic design principles, we create digital products that people love to use.'
      },
      {
        title: 'Our Conversion-Driven Design Process',
        text: 'We begin with thorough market analysis and user journey mapping. This translates into wireframes that map out the structural functionality of your interface. We then create interactive prototypes to simulate real user interactions, allowing us to validate concepts before a single line of code is written. Our rigorous usability testing ensures the final product is flawless, accessible, and primed for conversion.'
      }
    ],
    whyChoose: [
      { title: 'Research-Backed Interfaces', text: 'Our designs are not just visually appealing; they are rooted in deep psychological research and behavioral analytics to maximize user engagement.' },
      { title: 'Seamless Prototyping', text: 'We provide high-fidelity interactive prototypes, giving you a crystal-clear vision of the final product before development begins.' },
      { title: 'Proven UI/UX Expertise', text: 'Python X boasts a seasoned team of UI/UX design specialists with a proven track record of delivering exceptional results across diverse industries in Kolkata.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
