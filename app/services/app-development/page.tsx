
import { ServiceLayout } from '@/components/service-layout';
export default function Page() {
  const serviceData = {
    title: 'App Development',
    category: 'Design & Development',
    desc: 'As a top mobile app development agency in Kolkata, we provide tailored iOS, Android, and cross-platform solutions to keep your business connected with customers.',
    features: ['iPhone App Development', 'Android App Development', 'Cross-platform Solutions', 'Agile Methodology'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Expert Mobile Application Development Services in Kolkata',
        text: 'At Python X, we stand as seasoned experts in the realm of mobile application development, dedicated to providing top-notch solutions for businesses in Kolkata and beyond. Our adept team specializes in creating innovative and highly responsive mobile apps tailored for diverse platforms, including Android and iOS. Utilizing cutting-edge technology, we craft applications that not only help businesses effectively market themselves but also ensure a lasting, frictionless impact on their customers.'
      },
      {
        title: 'Native and Cross-Platform Excellence',
        text: 'Whether you require a native iOS application built with Swift, a robust Android app developed in Kotlin, or a versatile cross-platform solution using React Native or Flutter, Python X has the expertise to deliver. We understand that mobile users demand speed, intuitive UI/UX, and reliability. Our comprehensive testing phases guarantee a bug-free launch, giving your users an exceptional mobile experience.'
      }
    ],
    whyChoose: [
      { title: 'Agile Development Methodology', text: 'Embracing agile development methodologies, we ensure that your mobile app project is completed efficiently, adapting to changes swiftly without compromising on quality.' },
      { title: 'User-Centric Design', text: 'We prioritize the end-user experience, designing intuitive interfaces that increase engagement, retention, and ultimately, your mobile ROI.' },
      { title: 'End-to-End App Support', text: 'From the initial concept and wireframing to app store deployment and post-launch maintenance, we are your dedicated app development partners in Kolkata.' }
    ]
  };

  return <ServiceLayout service={serviceData} />;
}
