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
  serviceName: "Video Services",
  description:
    "Transform your ideas into compelling visual stories with our comprehensive video production services. From concept to final delivery, we create high-quality videos that engage your audience and drive results. Our expert team combines creativity with technical excellence to deliver videos that make an impact.",
  subServices: [
    { name: "Video Production", icon: FaVideo },
    { name: "YouTube Content", icon: FaYoutube },
    { name: "Video Editing", icon: FaEdit },
    { name: "Animation & Motion Graphics", icon: MdAnimation },
    { name: "Corporate Videos", icon: FaCamera },
    { name: "Commercial Production", icon: FaFilm },
    { name: "Video Marketing", icon: BiMoviePlay },
    { name: "Live Streaming", icon: MdVideocam },
  ],
  packages: [
    {
      name: "Basic Video Package",
      price: "299",
      description:
        "Perfect for small businesses and startups looking to create professional video content. Get high-quality video production with essential features to enhance your brand presence.",
      services: [
        "Professional Video Production",
        "Up to 2-Minute Final Video",
        "Basic Color Grading",
        "Background Music Selection",
        "Simple Motion Graphics",
        "Social Media Optimization",
        "2 Rounds of Revisions",
        "HD Quality Delivery",
        "Multiple Format Exports",
        "30-Day Support",
      ],
    },
    {
      name: "Professional Video Package",
      price: "599",
      description:
        "Ideal for growing businesses requiring advanced video production with enhanced visual effects and comprehensive post-production services.",
      services: [
        "All Features in Basic Package",
        "Up to 5-Minute Final Video",
        "Advanced Color Grading",
        "Custom Motion Graphics",
        "Professional Audio Mixing",
        "Multiple Camera Angles",
        "Green Screen Effects",
        "Custom Animations",
        "Brand Integration",
        "3 Rounds of Revisions",
        "4K Quality Delivery",
        "90-Day Support",
      ],
    },
    {
      name: "Premium Video Package",
      price: "999",
      description:
        "Enterprise-level solution for businesses requiring comprehensive video production with advanced features and premium support for maximum impact.",
      services: [
        "All Features in Professional Package",
        "Unlimited Video Length",
        "Cinematic Color Grading",
        "Advanced Visual Effects",
        "Custom Sound Design",
        "Multi-location Shooting",
        "Drone Footage",
        "3D Animation",
        "Interactive Elements",
        "Multiple Video Formats",
        "Priority Support",
        "6 Months Extended Support",
        "Monthly Analytics Reports",
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


export default function VideoServices() {
  return <ServicePage {...videoServicesContent} />;
}
