import { ServicePage } from './../components/service-page'
import { FaWordpress, FaPhp, FaLaravel, FaNodeJs, FaShopify, FaMagento } from 'react-icons/fa'

const webDevelopmentContent = {
  serviceName: "Web Development",
  description: "Web development is the backbone of your digital presence. It's more than just creating a website; it's about building a powerful tool that drives your business forward.Our web development services combine cutting-edge technology with creative design to deliver websites that not only look great but also perform exceptionally.",
  subServices: [
    { name: "WordPress Development", icon: FaWordpress },
    { name: "PHP Development", icon: FaPhp },
    { name: "Laravel Development", icon: FaLaravel },
    { name: "Node Development", icon: FaNodeJs },
    { name: "Shopify Development", icon: FaShopify },
    { name: "Magento Development", icon: FaMagento }
  ],
  packages: [
    {
      name: "Essential",
      price: "250",
      description: "Perfect for small businesses and startups looking to establish their online presence. Get a professional website with essential features to kickstart your digital journey.",
      services: [
        "Responsive Website Design",
        "5 Custom Web Pages",
        "Contact Form Integration",
        "Mobile-Friendly Design",
        "Basic SEO Setup",
        "Social Media Integration",
        "Website Security Setup",
        "Loading Speed Optimization",
        "3 Rounds of Revisions",
        "1 Month Free Maintenance"
      ]
    },
    {
      name: "Advantage",
      price: "350",
      description: "Ideal for growing businesses requiring advanced functionality and enhanced user experience. Get a feature-rich website with comprehensive digital solutions.",
      services: [
        "All Features in Essential Package",
        "Up to 10 Custom Pages",
        "Advanced SEO Implementation",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "Custom Database Integration",
        "Admin Dashboard",
        "Content Management System",
        "Advanced Security Features",
        "3 Months Free Maintenance"
      ]
    },
    {
      name: "Premium",
      price: "450",
      description: "Enterprise-level solution for businesses requiring comprehensive web presence. Get a fully customized website with advanced features and premium support.",
      services: [
        "All Features in Advantage Package",
        "Unlimited Custom Pages",
        "Custom Web Application Development",
        "Advanced Analytics Integration",
        "Multi-language Support",
        "AI Chatbot Integration",
        "Performance Monitoring",
        "24/7 Priority Support",
        "6 Months Free Maintenance",
        "Monthly Performance Reports"
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
}

export default function WebDevelopmentPage() {
  return <ServicePage {...webDevelopmentContent} />
}

