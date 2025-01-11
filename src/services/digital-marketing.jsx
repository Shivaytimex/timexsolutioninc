import { ServicePage } from '../components/service-page'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import { SiContentful } from 'react-icons/si';
import { FaBullhorn } from "react-icons/fa6";
import { TbSeo } from "react-icons/tb";

const digitalMarketingContent = {
    serviceName: "Digital Marketing",
    description:
        "Digital marketing is the key to reaching your audience and achieving your business goals in the online world. Our services combine creativity, data-driven strategies, and cutting-edge tools to deliver impactful campaigns that drive growth and engagement.",
    subServices: [
        { name: "Social Media Marketing", icon: FaFacebook },
        { name: "Search Engine Optimization (SEO)", icon: TbSeo },
        { name: "Content Marketing", icon: SiContentful },
        { name: "Pay-Per-Click Advertising (PPC)", icon: FaGoogle },
        { name: "Influencer Marketing", icon: FaInstagram },
        { name: "Email Marketing", icon: FaBullhorn }
    ],
    packages: [
        {
            name: "Essential",
            price: "250",
            description:
                "Perfect for small businesses looking to establish an online presence. Get essential tools and strategies to start building your digital footprint.",
            services: [
                "Social Media Account Setup",
                "Basic SEO Optimization",
                "1 Campaign Per Month",
                "Keyword Research",
                "Monthly Performance Reports",
                "1 Month Free Support",
                "3 Content Pieces"
            ]
        },
        {
            name: "Advantage",
            price: "350",
            description:
                "Designed for growing businesses that need a comprehensive and innovative digital marketing approach to expand their reach and drive measurable results.",
            services: [
                "All Features in Starter Package",
                "Advanced SEO Strategies",
                "3 Campaigns Per Month",
                "Custom Content Creation",
                "PPC Campaign Management",
                "Bi-Weekly Performance Reports",
                "2 Months Free Support"
            ]
        },
        {
            name: "Premium",
            price: "450",
            description:
                "Enterprise-level package for businesses looking for a complete and tailored digital marketing solution to effectively dominate the online space.",
            services: [
                "All Features in Growth Package",
                "Full Website SEO Audit",
                "Unlimited Campaigns",
                "Advanced Analytics Integration",
                "Custom Strategy Development",
                "Real-Time Campaign Tracking",
                "24/7 Priority Support",
                "6 Months Free Support"
            ]
        }
    ],
    images: [
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
        "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50"
    ]
};


export default function AppDevelopmentPage() {
    return <ServicePage {...digitalMarketingContent} />
}