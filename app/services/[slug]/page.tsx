'use client';

import { use } from 'react';
import { Navbar } from '@/components/navbar';
import { 
  Monitor, Smartphone, Palette, Layout, Search, BarChart, Share2, Mail, 
  ArrowRight, CheckCircle2, Zap, Target, BarChart3 
} from 'lucide-react';
import Link from 'next/link';

const servicesData: Record<string, any> = {
  'website-design-development': {
    title: 'Website Design & Development',
    category: 'Design & Development',
    icon: Monitor,
    desc: 'Embark on a digital journey with our unparalleled web development services in Kolkata. Our seasoned team of developers combines innovation and expertise to craft dynamic websites tailored to your unique business needs.',
    features: ['CMS Website Development', 'E-Commerce Solutions', 'Responsive Web Design', 'Mobile Website Development'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Web Development Services in Kolkata',
        text: 'Embark on a digital journey with our unparalleled web development services in Kolkata. Our seasoned team of developers combines innovation and expertise to craft dynamic websites tailored to your unique business needs. From intuitive user interfaces to robust backend systems, we deliver excellence at every stage. As pioneers in the digital realm, we navigate the evolving landscape, ensuring your online presence is not just responsive but ahead of the curve. Collaborate with us to transform ideas into pixel-perfect reality, driving your business towards unparalleled success. Elevate your online identity with our cutting-edge web development solutions, right here in the heart of Kolkata.'
      },
      {
        title: 'CMS Website',
        text: 'At Python X, our web development team in Kolkata thrives on a commitment to meticulous attention to detail, boundless creativity, and unwavering technical excellence in the realm of CMS development. Whether opting for Drupal, Joomla, or the versatile WordPress platform, our adept developers specialize in crafting bespoke CMS solutions precisely aligned with the distinctive requirements of our clients.'
      },
      {
        title: 'E-Commerce Website',
        text: 'At Python X in Kolkata, our team of adept designers and coders is dedicated to crafting captivating e-commerce websites that make a lasting impact. We specialize in developing user-friendly, mobile-responsive, and visually stunning online stores that not only engage your audience but also enhance user experience, ultimately contributing to an increased return on investment for your business.'
      },
      {
        title: 'Responsive Website',
        text: 'Expand your outreach to potential customers with a seamlessly functioning design on every device. Our responsive website designs at Python X in Kolkata ensure a cohesive user experience across all platforms, simultaneously enhancing search engine visibility and minimizing bounce rates. Leveraging the latest technologies, our web development experts are dedicated to crafting responsive websites tailored to meet the specific needs of your business.'
      },
      {
        title: 'Mobile Website Development',
        text: 'As mobile usage continues to soar, the majority of internet users prefer accessing content through their mobile devices. Tap into the thriving mobile market with a flawlessly functioning mobile website. At Python X in Kolkata, our mobile website development services guarantee seamless performance across all mobile devices, delivering a superb user experience to your customers.'
      },
      {
        title: 'Strategic Website Design Services in Kolkata for Business Growth',
        text: 'At Python X, a premier web design company in Kolkata, we deeply understand the pivotal role your website plays in representing your business and embodying your brand’s identity. Our commitment is to provide bespoke website design services that not only meet but exceed your expectations, bringing your brand to life in the online sphere.\n\nPython X is dedicated to crafting websites that go beyond mere visual appeal – we focus on driving conversions and ensuring a robust return on your investment. Recognizing the individuality of each business, regardless of its size, we tailor our digital strategy to meet the unique needs of your enterprise.\n\nOur custom website design services in Kolkata are designed to make your website stand out amidst competition and deliver a flawless user experience that seamlessly aligns with your brand’s identity. Entrust us with the task of establishing a powerful digital presence for your business, and let Python X elevate your enterprise to new heights.'
      }
    ],
    whyChoose: [
      { title: 'Goal-Oriented Approach', text: 'At Python X, our web design team in Kolkata places a strong emphasis on understanding user behavior to craft websites that captivate your intended audience. Employing advanced measurement tools, we meticulously monitor and analyze key metrics such as website traffic, engagement levels, bounce rates, page popularity, and conversion rates.' },
      { title: 'Easy-to-Manage Websites', text: 'At Python X in Kolkata, our tailored website design offers a flexible and user-friendly solution. We construct websites utilizing a browser-based CMS system, empowering you to effortlessly generate pages, menus, and posts, upload content, and modify data without the need for coding expertise.' },
      { title: '24/7 Support', text: 'At Python X in Kolkata, we recognize that challenges with your website can arise unexpectedly, potentially affecting your business operations. To mitigate downtime and guarantee seamless performance, our website design team provides around-the-clock support.' }
    ]
  },
  'app-development': {
    title: 'App Development',
    category: 'Design & Development',
    icon: Smartphone,
    desc: 'At Python X, we stand as seasoned experts in the realm of mobile application development, dedicated to providing top-notch solutions for businesses in Kolkata and beyond.',
    features: ['iPhone App Development', 'Android App Development', 'Cross-platform Solutions', 'Agile Methodology'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Application Development Services in Kolkata',
        text: 'At Python X, we stand as seasoned experts in the realm of mobile application development, dedicated to providing top-notch solutions for businesses in Kolkata and beyond. Our adept team of developers specializes in creating innovative and effective mobile apps tailored for diverse platforms, including Android and iOS.\n\nUtilizing cutting-edge technology, we craft applications that not only help businesses effectively market themselves but also ensure a lasting impact on their customers. Our mobile app development process is comprehensive and flexible, designed to cater to the unique needs of each client. From the initial ideation phase to the final launch, we collaborate closely with our clients to bring their visions to fruition.\n\nEmbracing agile development methodologies, we ensure that projects are completed efficiently without compromising on quality.'
      },
      {
        title: 'iPhone Apps',
        text: 'At Python X, we recognize the essence of iOS applications lies in their blend of sophistication, style, and functionality. Our focus is on crafting apps that stand apart, seamlessly integrating the latest technologies and techniques to deliver a captivating user experience. Our adept developers are skilled in the craft of designing impactful iPhone and iPad apps that captivate and retain your users.\n\nOur development process is meticulous, adhering to a stringent framework from ideation to deployment. This ensures that your app not only meets but exceeds your exact requirements, delivering the desired results.'
      },
      {
        title: 'Android Apps',
        text: 'In the dynamic landscape of the expanding Android app market, Python X emerges as your go-to partner for tailored solutions. Our creative developers specialize in crafting Android-specific apps that are not only unique but also user-friendly. We recognize the diversity in Android devices and understand the importance of customization for each one. Collaborating closely with you, we ensure that your app functions seamlessly across a spectrum of Android devices.\n\nOur development process is meticulous, encompassing thorough testing and quality assurance measures to guarantee a bug-free and high-performing application.'
      },
      {
        title: 'Cross-platform Applications',
        text: 'At Python X, we take pride in keeping your business seamlessly connected with your customers across various devices through our cross-platform applications. Our team of skilled mobile app developers is dedicated to ensuring that your business remains accessible and engaging, catering to diverse device preferences.\n\nOur approach to mobile app development is holistic, considering every facet of your business to deliver tailored solutions that align with your unique needs. The outcome is an effective and engaging application that enhances your connectivity with customers.'
      }
    ],
    whyChoose: [
      { title: 'Goal-Oriented Approach', text: 'At Python X, our mobile app team in Kolkata places a strong emphasis on understanding user behavior to craft apps that captivate your intended audience.' },
      { title: 'Agile Development', text: 'Embracing agile development methodologies, we ensure that projects are completed efficiently without compromising on quality.' },
      { title: '24/7 Support', text: 'At Python X in Kolkata, we recognize that challenges with your app can arise unexpectedly. Our team provides round-the-clock support to ensure uninterrupted assistance.' }
    ]
  },
  'graphic-design': {
    title: 'Graphic Design',
    category: 'Design & Development',
    icon: Palette,
    desc: 'Elevate your brand\'s visual identity with Python X\'s expert Graphic Design Service. Our talented team of designers combines creativity with strategy to craft stunning visuals that resonate with your audience.',
    features: ['Logo Design', 'Marketing Materials', 'Brand Identity', 'Social Media Graphics'],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Graphic Design Services in Kolkata',
        text: 'Elevate your brand\'s visual identity with Python X\'s expert Graphic Design Service. Our talented team of designers combines creativity with strategy to craft stunning visuals that resonate with your audience. From logos to marketing materials, we tailor our designs to reflect your brand\'s personality and values.\n\nWith a keen eye for detail and a commitment to quality, we ensure that every graphic element communicates your message effectively. Whether you\'re launching a new brand or refreshing your existing identity, trust Python X to deliver professional-grade designs.'
      },
      {
        title: 'Graphic Design Process',
        text: '1. Discovery & Research: We delve deep into understanding your brand, target audience, and objectives.\n\n2. Ideation & Conceptualization: Our creative team collaborates to brainstorm innovative ideas and concepts tailored to your brand.\n\n3. Design Development: Translating concepts into visually captivating graphics, our skilled designers bring ideas to life.\n\n4. Feedback & Revision: We value your input and seek feedback on initial designs to refine and enhance the graphics.\n\n5. Finalization & Delivery: After incorporating feedback, we finalize the designs to perfection.\n\n6. Support & Maintenance: We offer ongoing support to ensure your graphic designs remain effective and up-to-date.'
      }
    ],
    whyChoose: [
      { title: 'Captivating Visuals', text: 'Our expert designers create captivating visuals that resonate with your audience, leaving a lasting impression and enhancing brand recognition.' },
      { title: 'Tailored Solutions', text: 'Whether you need a new logo, marketing materials, or website graphics, we provide tailored solutions to meet your specific needs and goals.' },
      { title: 'Professional Quality', text: 'Expect professional-grade designs that are not only visually appealing but also highly effective in conveying your message.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    category: 'Design & Development',
    icon: Layout,
    desc: 'Elevate your digital presence in Kolkata with Python X\'s top-tier UI/UX design services. Our expert team crafts intuitive interfaces and stunning visuals to engage users effectively.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'UI/UX Design Services in Kolkata',
        text: 'Elevate your digital presence in Kolkata with Python X\'s top-tier UI/UX design services. Our expert team crafts intuitive interfaces and stunning visuals to engage users effectively. From wireframing to prototyping, we tailor solutions to align with your brand identity and user needs.'
      },
      {
        title: 'UI/UX Design Process',
        text: '1. Research: Uncover user preferences and pain points through thorough market analysis.\n\n2. Wireframing: Develop basic layouts to map out the structure and functionality of the interface.\n\n3. Prototyping: Create interactive models to simulate user interactions and validate concepts.\n\n4. Design: Merge aesthetics with functionality to craft visually captivating interfaces.\n\n5. Testing: Conduct rigorous usability tests to evaluate the effectiveness of the design.\n\n6. Iteration: Refine the design based on user insights and testing results.\n\n7. Implementation: Translate finalized designs into functional interfaces.\n\n8. Evaluation: Monitor user engagement post-launch to assess effectiveness.'
      }
    ],
    whyChoose: [
      { title: 'Expertise', text: 'Python X boasts a seasoned team of UI/UX design specialists with a proven track record of delivering exceptional results across diverse industries.' },
      { title: 'Collaborative Approach', text: 'We prioritize collaboration and communication, working closely with clients to understand their vision and objectives.' },
      { title: 'Innovation', text: 'We are committed to pushing the boundaries of creativity and innovation, delivering forward-thinking solutions that set you apart.' }
    ]
  },
  'seo': {
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    icon: Search,
    desc: 'Transform Your Business with Python X – Kolkata\'s Esteemed SEO Solutions. We tailor our approach to suit the specific needs and demands of your business.',
    features: ['Keyword Research', 'Technical SEO', 'On-Page Optimization', 'Link Building'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Kolkata\'s Esteemed SEO Solutions',
        text: 'If you are on the hunt for a pathway to elevate your business in Kolkata, look no further than the premier SEO company in the area. Python X Marketing stands out as a top-tier provider of SEO services in Kolkata. Our team comprises skilled professionals certified by Google and equipped with years of industry experience.'
      },
      {
        title: 'Customized SEO Solutions',
        text: '1. Keyword Research: Identifying the right keywords ensuring your website ranks for relevant searches.\n\n2. Website Audit: Deep dive into every aspect of your site\'s performance to uncover areas for improvement.\n\n3. On-Page Optimization: Crafting compelling title tags, meta descriptions, and optimized content.\n\n4. Content Optimization: Developing high-quality content that resonates with your target audience.\n\n5. Link Building: Acquiring high-quality backlinks from reputable websites.\n\n6. Local SEO: Optimizing your website for local searches and Google My Business.\n\n7. Mobile Optimization: Ensuring your website is seamlessly accessible across all devices.\n\n8. Technical SEO: Optimizing site speed, crawlability, indexing, and schema markup.\n\n9. Monitoring & Analysis: Using advanced analytics to track key metrics and performance.\n\n10. Reporting & Refinement: Adapting to search algorithm changes for long-term growth.'
      }
    ],
    whyChoose: [
      { title: 'Expertise and Experience', text: 'With years of industry experience and a team of seasoned professionals, we bring unparalleled expertise to every project.' },
      { title: 'Tailored Solutions', text: 'We understand that every business is unique. That\'s why we craft customized strategies to suit your specific needs and goals.' },
      { title: 'Transparency', text: 'We prioritize transparent communication and accountability, providing regular updates and detailed reports on progress.' }
    ]
  },
  'google-ads-ppc': {
    title: 'Google Ads / PPC',
    category: 'Digital Marketing',
    icon: BarChart,
    desc: 'Optimize ROI with Performance-Based Google Ads/PPC Services. Pay for Measurable Results Only!',
    features: ['Campaign Management', 'Bid Optimization', 'Ad Creation', 'Conversion Tracking'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Performance-Based SEM Solutions',
        text: 'Transform your business with Python X\'s all-encompassing search engine marketing solution in Kolkata. Leveraging cutting-edge technology and a skilled team, we amplify your online presence with maximum visibility and adaptability.'
      },
      {
        title: 'Google Ads/PPC Process',
        text: '1. Keyword Research: Meticulously analyze search trends to identify high-converting keywords.\n\n2. Campaign Setup: Tailoring your account to align with your business goals.\n\n3. Ad Creation: Crafting compelling ad copy that resonates with your target audience.\n\n4. Targeting: Precisely targeting your ideal audience across demographics and behaviors.\n\n5. Bid Management: Fine-tuning bids for maximum ROI and cost-effectiveness.\n\n6. Ad Extensions: Providing additional information like site links and callouts.\n\n7. Monitoring: Constant tracking and adjustment for continuous growth.\n\n8. Quality Score: Elevating relevance and landing page experience for lower costs.\n\n9. Conversion Tracking: Robust systems to monitor purchases, forms, and calls.\n\n10. Reporting: Actionable insights to empower informed decision-making.'
      }
    ],
    whyChoose: [
      { title: 'Expertise and Innovation', text: 'Benefit from our innovative solutions tailored to your business needs, combining industry knowledge with cutting-edge tech.' },
      { title: 'Full Management', text: 'From bid adjustments to ad creation, we handle every aspect of your SEM campaigns with precision.' },
      { title: 'Proven Track Record', text: 'Our history of delivering tangible results through SEM campaigns demonstrates our commitment to your success.' }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    category: 'Digital Marketing',
    icon: Share2,
    desc: 'Python X, a data-driven social media marketing agency in Kolkata, specializes in optimizing social media campaigns for both B2B and B2C businesses.',
    features: ['SMM Planning', 'Market Identification', 'Campaign Creation', 'Audience Engagement'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Boost Your Social Media Impact with Python X',
        text: 'Python X, a data-driven social media marketing agency in Kolkata, specializes in optimizing social media campaigns for both B2B and B2C businesses. Our team ensures your social media content not only captivates but also drives lead generation.\n\nWe take a proactive approach, managing your social media channels by creating engaging content, responding to inquiries, and expanding your follower base. Our data-backed strategy allows us to track impressions, clicks, and conversions, optimizing your marketing budget for maximum ROI.'
      },
      {
        title: 'Customized SMM Process in Kolkata',
        text: '1. Planning: Creating an effective strategy demands meticulous planning. we kickstart the process with a thorough analysis of your current accounts.\n\n2. Identifying Market: We help you pinpoint where your potential customers are most active online to avoid wasted time and resources.\n\n3. Account Creation: We excel in crafting optimized social media accounts for businesses seeking a presence on social networks.\n\n4. Campaign Creation: Our marketers collaborate closely with you to craft campaigns aligned with your budget and audience demographics.\n\n5. Engaging Audience: We employ various engagement strategies to interact with your audience effectively and drive traffic.'
      }
    ],
    whyChoose: [
      { title: 'Understanding Your Requirements', text: 'We take the time to truly understand your needs and objectives through open communication and attentive listening.' },
      { title: 'Successful Strategies', text: 'We possess deep insights into effective tactics and strategies by analyzing data and staying abreast of industry trends.' },
      { title: 'Maximizing Results', text: 'We understand the power of paid advertising in driving sales and performance, ensuring sustainable long-term success.' }
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    category: 'Digital Marketing',
    icon: Mail,
    desc: 'Email marketing remains a powerful tool for customer engagement and revenue generation. Python X specializes in crafting impactful email campaigns that deliver results.',
    features: ['Campaign Automation', 'User Analysis', 'Newsletter Design', 'A/B Testing'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200',
    longContent: [
      {
        title: 'Drive Sales with Targeted Email Campaigns',
        text: 'Email marketing remains a powerful tool for customer engagement and revenue generation. Python X specializes in crafting impactful email campaigns that deliver both immediate and long-term results, propelling your business forward.\n\nOur approach emphasizes the importance of a robust database. Leveraging strategies like content upgrades, email capture apps, and lead magnets, we ensure rapid growth of your qualified contacts.'
      },
      {
        title: 'Masterfully Designed Email Marketing Strategies',
        text: '1. User Analysis: We utilize our expertise as MailChimp marketers to analyze the database and develop personalized strategies for any stage of the sales funnel.\n\n2. Personalized Experience: Our approach avoids repetitive newsletters by utilizing predictive intelligence to tailor each communication.\n\n3. Newsletter Design: We design HTML marketing templates for newsletters mirroring your landing page content to ensure a seamless transition.\n\n4. A/B Testing: Our methodology entails comprehensive A/B testing to assess the efficacy of various campaign elements and pinpoint the most effective strategies.\n\n5. Tracking & Reporting: We provide detailed monthly reports covering metrics such as open rates, click-through rates, and conversion rates.'
      }
    ],
    whyChoose: [
      { title: 'Expertise in Targeted Campaigns', text: 'Benefit from our expertise in crafting targeted email campaigns tailored to your unique audience segments using advanced techniques.' },
      { title: 'Innovative Design Solutions', text: 'We create visually appealing and mobile-responsive templates that captivate your audience and leave a lasting impression.' },
      { title: 'Comprehensive Analytics', text: 'Gain valuable insights with our comprehensive analytics and reporting, providing you with actionable data to optimize your strategies.' }
    ]
  }
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return (
      <main className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <div className="pt-48 pb-32 container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">{service.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-foreground/60 leading-relaxed mb-12">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-background font-bold py-4 px-8 rounded-xl hover:bg-primary/90 transition-all uppercase tracking-widest text-xs">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 border border-white/20 font-bold py-4 px-8 rounded-xl hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 animate-in fade-in slide-in-from-right-8 duration-1000">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Detailed Long Content Sections */}
        {service.longContent && (
          <div className="space-y-32 mb-48">
            {service.longContent.map((item: any, i: number) => (
              <div key={i} className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight border-l-4 border-primary pl-6">
                  {item.title}
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed whitespace-pre-wrap">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Why Choose Us Section */}
        {service.whyChoose && (
          <div className="pt-32 border-t border-white/5 mb-48">
            <h2 className="text-4xl md:text-6xl font-serif mb-24 text-center">Why Choose Our {service.title} Services?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {service.whyChoose.map((item: any, i: number) => (
                <div key={i} className="p-10 glass rounded-3xl hover:bg-white/5 transition-colors">
                  <h3 className="text-2xl font-bold mb-6 text-primary">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Financial Success Promo Section */}
        <div className="py-24 border-y border-white/5 mb-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-serif mb-4">Empowering Financial Success</h3>
            <p className="text-foreground/50 leading-relaxed italic">
              "Lending Line empowers your financial success with comprehensive solutions for individuals and businesses. We offer a range of financial services tailored to your unique needs. Trust us as your dedicated partner in achieving your financial goals."
            </p>
          </div>
          <Link href="/contact" className="text-primary font-bold border-b border-primary pb-1">
            Partner with us →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-32 border-t border-white/5">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">Core Capabilities</h2>
            <p className="text-foreground/50 leading-relaxed">
              We leverage the latest technologies and data-driven insights to deliver exceptional results in {service.title.toLowerCase()}.
            </p>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            {service.features.map((f: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-8 glass rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-bold">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-48 glass rounded-[3rem] p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Ready to achieve <br /> digital dominance?
          </h2>
          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Contact us today for a free strategy session and let's map out your path to the peak of digital success.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-background font-bold py-6 px-12 rounded-2xl hover:bg-primary/90 transition-all uppercase tracking-[0.2em] text-sm">
            Contact Our Strategists
          </Link>
        </div>
      </div>
    </main>
  );
}
