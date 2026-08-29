import {
  FaLaravel,
  FaMagento,
  FaNodeJs,
  FaPhp,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { ServicePage } from "../components/service-page";

const webDevelopmentContent = {
  serviceName: "Web Development",
  description:
    "Timex Solution Inc creates business websites, ecommerce experiences and custom web platforms that connect clear positioning with useful customer journeys. Every build is shaped around the content, actions, integrations and operating requirements the website needs to support.",
  subServices: [
    { name: "WordPress Development", icon: FaWordpress },
    { name: "PHP Development", icon: FaPhp },
    { name: "Laravel Development", icon: FaLaravel },
    { name: "Node Development", icon: FaNodeJs },
    { name: "Shopify Development", icon: FaShopify },
    { name: "Magento Development", icon: FaMagento },
  ],
  packages: [
    {
      name: "Business Launch",
      description:
        "A focused website engagement for businesses that need a credible, responsive and clearly structured digital presence.",
      services: [
        "Discovery and content structure",
        "Responsive page system",
        "Clear inquiry or booking journey",
        "Core search and analytics setup",
        "Performance and launch review",
        "Content-management handoff",
      ],
    },
    {
      name: "Growth Platform",
      description:
        "A conversion-focused web experience for organizations with deeper content, campaigns, ecommerce or integration needs.",
      services: [
        "Customer journey and conversion planning",
        "Expanded page and component system",
        "Ecommerce or lead-flow integration",
        "CRM and approved tool connections",
        "Advanced measurement requirements",
        "Launch support and operating notes",
      ],
    },
    {
      name: "Custom Experience",
      description:
        "A tailored platform engagement for complex workflows, custom application behavior and longer-term digital delivery.",
      services: [
        "Requirements and technical architecture",
        "Custom user and administrative workflows",
        "Approved data and API integrations",
        "Role and permission planning",
        "Testing and controlled release",
        "Ongoing roadmap and maintenance options",
      ],
    },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePage {...webDevelopmentContent} />;
}
