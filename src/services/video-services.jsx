import { ServicePage } from "./../components/service-page";
import {
  FaVideo,
  FaYoutube,
  FaPlay,
  FaCamera,
  FaEdit,
  FaFilm,
} from "react-icons/fa";
import { MdAnimation, MdVideocam } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const videoServicesContent = {
  serviceName: "Real Estate Photography",
  description:
    "Meet Lovepreet Chandi - Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, Lovepreet's expertise shines as she navigates the intricate Northern California Real Estate Market. Recognized as one of America's Top 100 Agents, Lovepreet brings an unmatched level of dedication and expertise to every transaction. We specialize in creating stunning real estate photography and videography that showcases properties in their best light, helping agents like Lovepreet attract more clients and close deals faster.",
  subServices: [
    { name: "Property Photography", icon: FaCamera },
    { name: "Virtual Tours", icon: FaVideo },
    { name: "Drone Photography", icon: FaPlay },
    { name: "Video Editing", icon: FaEdit },
    { name: "Social Media Content", icon: FaYoutube },
    { name: "Property Marketing Videos", icon: FaFilm },
    { name: "Before & After Shots", icon: BiMoviePlay },
    { name: "Professional Editing", icon: MdAnimation },
  ],
  packages: [
    {
      name: "Basic Real Estate Package",
      price: "299",
      description:
        "Perfect for real estate agents looking to enhance their property listings with professional photography and basic video content.",
      services: [
        "Professional Property Photography",
        "Up to 20 High-Quality Photos",
        "Basic Video Tour (2-3 minutes)",
        "Virtual Tour Creation",
        "Social Media Optimized Images",
        "Basic Photo Editing",
        "Property Description Integration",
        "2 Rounds of Revisions",
        "HD Quality Delivery",
        "30-Day Support",
      ],
    },
    {
      name: "Professional Real Estate Package",
      price: "599",
      description:
        "Ideal for top-performing agents requiring comprehensive photography and videography services with advanced features.",
      services: [
        "All Features in Basic Package",
        "Up to 50 High-Quality Photos",
        "Extended Video Tour (5-7 minutes)",
        "Drone Photography",
        "Advanced Photo Editing",
        "Before & After Shots",
        "Professional Video Editing",
        "Virtual Staging",
        "Social Media Content Package",
        "3 Rounds of Revisions",
        "4K Quality Delivery",
        "90-Day Support",
      ],
    },
    {
      name: "Premium Real Estate Package",
      price: "999",
      description:
        "Enterprise-level solution for top agents requiring comprehensive photography and videography with advanced features for maximum property exposure.",
      services: [
        "All Features in Professional Package",
        "Unlimited Photos",
        "Cinematic Video Tours",
        "Advanced Drone Photography",
        "Professional Video Production",
        "Virtual Reality Tours",
        "3D Property Walkthroughs",
        "Custom Branding Integration",
        "Multiple Video Formats",
        "Priority Support",
        "6 Months Extended Support",
        "Monthly Analytics Reports",
        "Competitor Analysis",
      ],
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=50",
  ],
};


export default function VideoServices() {
  return <ServicePage {...videoServicesContent} />;
}
