import { ServicePage } from "../components/service-page";
import { FaApple, FaAndroid, FaReact, FaMobileAlt } from "react-icons/fa";
import { SiPwa } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";

const appDevelopmentContent = {
  serviceName: "App Development",
  description:
    "App development is at the forefront of innovation, enabling businesses to deliver unique user experiences and unlock new opportunities. Our app development services blend creativity and technical expertise to create mobile and web apps that excel in performance, usability, and scalability.",
  subServices: [
    { name: "iOS Development", icon: FaApple },
    { name: "Android Development", icon: FaAndroid },
    { name: "React Native Development", icon: FaReact },
    { name: "Flutter Development", icon: FaFlutter },
    { name: "Progressive Web Apps", icon: SiPwa },
    { name: "Custom App Development", icon: FaMobileAlt },
  ],
  packages: [
    {
      name: "Essential",
      price: "300",
      description:
        "Perfect for small businesses and startups looking to launch their first app. Get a professional mobile app with essential features to connect with your audience.",
      services: [
        "Responsive Mobile App Design",
        "Single Platform (iOS or Android)",
        "Up to 5 Screens",
        "Basic Authentication",
        "Push Notifications",
        "App Store Deployment",
        "1 Month Free Maintenance",
        "3 Rounds of Revisions",
      ],
    },
    {
      name: "Advantage",
      price: "500",
      description:
        "Ideal for growing businesses that require a feature-rich app and enhanced user experience. Get a robust app with comprehensive solutions.",
      services: [
        "All Features in Essential Package",
        "Cross-Platform (iOS and Android)",
        "Up to 10 Screens",
        "Custom API Integration",
        "Advanced Authentication",
        "In-app Purchases",
        "Advanced Push Notifications",
        "2 Months Free Maintenance",
      ],
    },
    {
      name: "Premium",
      price: "800",
      description:
        "Enterprise-level solution for businesses requiring a comprehensive app with advanced features and premium support.",
      services: [
        "All Features in Advantage Package",
        "Unlimited Screens",
        "Custom App Backend",
        "AI & ML Integration",
        "Real-time Data Sync",
        "Advanced Analytics Integration",
        "Offline Mode Support",
        "6 Months Free Maintenance",
        "24/7 Priority Support",
      ],
    },
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
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
  ],
};

export default function AppDevelopmentPage() {
  return <ServicePage {...appDevelopmentContent} />;
}
