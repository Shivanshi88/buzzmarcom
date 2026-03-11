// Mock data for Buzzmarcom clone
import Ghan from "./assets/Ghan.jpg";
import Abhilasha from "./assets/Abhilasha.jpg";

export const navigationItems = [
    { label: 'Home', path: '/' },
    {
        label: 'About Us',
        path: '/about',
    },
    {
        label: 'Services',
        path: '/services',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Social Research', path: '/services/social-research' },
            { label: 'Market Research', path: '/services/market-research' },
            { label: 'Business Consultancy', path: '/services/business-consultancy' },
            { label: 'Branding & Advertisement', path: '/services/branding-advertisement' },
            { label: 'IT Solutions', path: '/services/it-solutions' },
            { label: 'Manpower Support', path: '/services/manpower-support' },
        ]
    },
  {
    label: 'Insights',
    path: '/insights',
    hasDropdown: true,
    dropdownItems: [
        { label: 'Blog', path: '/insights/blogs' },
        { label: 'Case Studies', path: '/insights/case-studies' },
    ],
},
   {
    label: 'Join Us',
    path: '/join',
    hasDropdown: true,
    dropdownItems: [
        { label: 'Career', path: '/career' },
        { label: 'Contact', path: '/contact' },
    ]
},
];

export const heroSlides = [
    {
        id: 1,
        tag: 'SOCIAL RESEARCH',
        title: 'Insights for Impact.',
        subtitle: 'Understanding society to drive meaningful change.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
    },
    {
        id: 2,
        tag: 'MARKET RESEARCH',
        title: 'Data-Driven Decisions.',
        subtitle: 'Decoding market trends to fuel your growth.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    },
    {
        id: 3,
        tag: 'BUSINESS CONSULTANCY',
        title: 'Strategy Meets Success.',
        subtitle: 'Expert guidance to navigate complex challenges.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    },
    {
        id: 4,
        tag: 'BRANDING & ADVERTISEMENT',
        title: 'Elevate Your Voice.',
        subtitle: 'Creative stories that turn audiences into advocates.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    },
    {
        id: 5,
        tag: 'IT SOLUTIONS',
        title: 'Future-Proof Technology.',
        subtitle: 'Smart digital infrastructure built for tomorrow.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    },
    {
        id: 6,
        tag: 'MANPOWER SUPPORT',
        title: 'Your Talent Partner.',
        subtitle: 'Connecting the right people with the right opportunities.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    },
];

export const aboutFeatures = [
    {
        title: 'Research',
        description: 'Data-driven insights via Market and Social Research.',
    },
    {
        title: 'Strategy',
        description: 'Expert Business Consultancy to drive growth.',
    },
    {
        title: 'Visibility',
        description: 'Impactful Branding & Advertisement campaigns.',
    },
    {
        title: 'Operations',
        description: 'Robust IT Solutions and reliable Manpower Support.',
    },
    {
        title: 'Risk-Mitigated',
        description: 'Legal and marketing expertise ensures brand protection.',
    },
    {
        title: 'Scalable',
        description: 'Solutions that adapt to your specific needs and timeline.',
    },
];

export const teamMembers = [
    
   {
    id: 1,
    name: 'Ghan Shyam Jha',
    title: 'Lead Consultant – Strategy & Compliance',
    expertise: '11 Years in Technical Marketing & Law',
    background: 'B.Tech | Law Practitioner',
    image: Ghan,
    description: 'Ghan Shyam bridges the gap between technical innovation and legal compliance. With a background in engineering and a specialization in law, he provides a holistic approach to Business Consultancy and Market Research. He ensures that every strategy implemented is data-driven, growth-oriented, and legally risk-mitigated.',
    whyWork: 'He understands the technical nuances of products while ensuring the business framework is rock-solid and legally compliant.',
},
{
    id: 2,
    name: 'Abhilasha Jha',
    title: 'Content Strategist & Communications Specialist',
    expertise: '4 Years in Content Strategy & Copywriting',
    background: 'BA - English',
    image: Abhilasha,
    description: 'Abhilasha is the creative force behind our Branding and Advertisement initiatives. With a strong foundation in literature and communications, she specializes in translating complex business ideas into compelling narratives that captivate audiences. She ensures your brand voice is consistent, engaging, and impactful across all platforms.',
    whyWork: 'She turns brand goals into high-converting copy and engaging digital content that resonates with target demographics.',
}
];

export const services = [
    {
        id: 1,
        title: 'Social Research',
        description: 'Understanding society to drive meaningful change through comprehensive research.',
        path: '/services/social-research',
    },
    {
        id: 2,
        title: 'Market Research',
        description: 'Data-driven insights to decode market trends and fuel business growth.',
        path: '/services/market-research',
    },
    {
        id: 3,
        title: 'Business Consultancy',
        description: 'Expert strategic guidance to navigate complex business challenges.',
        path: '/services/business-consultancy',
    },
    {
        id: 4,
        title: 'Branding & Advertisement',
        description: 'Creative narratives that transform audiences into loyal advocates.',
        path: '/services/branding-advertisement',
    },
    {
        id: 5,
        title: 'IT Solutions',
        description: 'Future-proof technology infrastructure built for tomorrow\'s challenges.',
        path: '/services/it-solutions',
    },
    {
        id: 6,
        title: 'Manpower Support',
        description: 'Connecting the right talent with the right opportunities for success.',
        path: '/services/manpower-support',
    },
];

export const whyChooseFeatures = [
    {
        title: 'Integrated Ecosystem',
        description: 'No more juggling multiple vendors. We handle everything from your legal compliance to your digital ads.',
    },
    {
        title: 'Expert-Led Approach',
        description: 'Benefit from 15+ combined years of experience in B.Tech, Law, and Communications.',
    },
    {
        title: 'Risk-Mitigated Growth',
        description: 'Our unique blend of legal and marketing expertise ensures your brand is not just popular, but protected.',
    },
    {
        title: 'Scalable Support',
        description: 'Whether you need a 1-year market study or temporary manpower for a 1-month project, we adapt to you.',
    },
];

export const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        title: 'CEO, Tech Innovations Ltd',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        quote: 'Buzzmarcom\'s market research helped us identify untapped opportunities that led to a 40% revenue increase. Their insights were precise and actionable.',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        title: 'Director, Green Earth NGO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        quote: 'Their social research and impact assessment studies transformed how we measure our CSR initiatives. Highly professional and thorough.',
    },
    {
        id: 3,
        name: 'Amit Verma',
        title: 'Founder, StartUp Ventures',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        quote: 'The branding strategy and digital campaigns created by Buzzmarcom gave our startup the visibility we needed. Results exceeded expectations!',
    },
];

export const clientLogos = [
    { id: 1, name: 'Client 1', placeholder: true },
    { id: 2, name: 'Client 2', placeholder: true },
    { id: 3, name: 'Client 3', placeholder: true },
    { id: 4, name: 'Client 4', placeholder: true },
    { id: 5, name: 'Client 5', placeholder: true },
    { id: 6, name: 'Client 6', placeholder: true },
];