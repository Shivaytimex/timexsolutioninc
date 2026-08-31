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
};

export default function WebDevelopmentPage() {
  return <ServicePage {...webDevelopmentContent} />;
}
