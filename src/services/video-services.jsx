import {
  FaCalendarCheck,
  FaCamera,
  FaClipboardCheck,
  FaClock,
  FaCube,
  FaEye,
  FaHome,
  FaInstagram,
  FaPhotoVideo,
  FaPlay,
  FaRoute,
  FaUserTie,
  FaVideo,
} from "react-icons/fa";
import { SpecializedServicePage } from "../components/SpecializedServicePage";

const videoServicesContent = {
  serviceName: "Real Estate Media",
  eyebrow: "Listing Media & Agent Content",
  introTitle: "Present every property—and every agent brand—with greater confidence.",
  intro:
    "Timex Solution Inc creates coordinated real estate photography, cinematic video, aerial perspectives and social content for listings and agent marketing. The objective is a consistent visual system that helps properties stand out while making the next campaign easier to execute.",
  primaryCta: "Plan a Media Project",
  heroIcon: FaPhotoVideo,
  heroImage: "/images/timex-real-estate-media-1600.webp",
  imageAlt: "Premium real estate media production at a luxury California home",
  imageEyebrow: "Property Storytelling",
  imageTitle: "One polished visual system from the listing launch to social media.",
  visualLabels: ["Property captured", "Story edited", "Assets delivered"],
  capabilities: [
    {
      title: "Property Photography",
      description:
        "Clean, carefully composed interior and exterior images prepared for listing platforms, campaigns and agent marketing.",
      icon: FaCamera,
    },
    {
      title: "Cinematic Video Tours",
      description:
        "Story-led property films that connect architecture, movement and atmosphere in a polished viewing experience.",
      icon: FaVideo,
    },
    {
      title: "Aerial Media",
      description:
        "Drone photography and video used to communicate setting, lot context, access and surrounding features when conditions allow.",
      icon: FaPlay,
    },
    {
      title: "3D & Virtual Experiences",
      description:
        "Immersive walkthrough assets that help remote buyers understand flow, scale and spatial relationships.",
      icon: FaCube,
    },
    {
      title: "Agent Social Content",
      description:
        "Vertical reels, property highlights and agent-led content formatted for consistent publishing across social channels.",
      icon: FaInstagram,
    },
    {
      title: "Listing Launch Media",
      description:
        "A coordinated set of photo, video and platform-ready assets organized around the property launch timeline.",
      icon: FaHome,
    },
  ],
  showcase: {
    eyebrow: "Selected Visual Direction",
    title: "Property stories designed for different moments in the campaign",
    description:
      "Each frame has a role—from introducing the property and establishing lifestyle to communicating location and scale.",
    items: [
      {
        title: "Listing Introduction",
        description: "A people-led opening that gives the property story a clear, confident point of view.",
        image: "/vedio/thumbnails/video003-poster.jpg",
        alt: "Real estate presenters introducing a property",
      },
      {
        title: "Lifestyle & Location",
        description: "Supporting visuals that connect the home with community, amenities and the surrounding environment.",
        image: "/vedio/thumbnails/video005-poster.jpg",
        alt: "Community and location detail captured for real estate media",
      },
      {
        title: "Aerial Context",
        description: "Wide perspectives that help viewers understand the property, neighborhood and nearby development.",
        image: "/vedio/thumbnails/video007-poster.jpg",
        alt: "Aerial real estate view showing homes and surrounding area",
      },
    ],
  },
  processTitle: "A controlled production flow from booking to delivery",
  processDescription:
    "We confirm the property, deliverables and publishing priorities before the shoot, then organize assets for practical campaign use.",
  process: [
    {
      title: "Plan the Story",
      description: "Confirm property details, audience, required assets, access, timing and the listing launch objective.",
      icon: FaClipboardCheck,
    },
    {
      title: "Schedule & Prepare",
      description: "Coordinate the production window, property readiness, weather considerations and on-camera requirements.",
      icon: FaCalendarCheck,
    },
    {
      title: "Capture",
      description: "Produce the agreed photography, walkthrough, aerial and agent content with a consistent visual direction.",
      icon: FaCamera,
    },
    {
      title: "Edit & Deliver",
      description: "Refine the selected assets and organize final formats for listing, web, advertising and social use.",
      icon: FaRoute,
    },
  ],
  valueTitle: "Media designed to support the complete listing campaign",
  valueDescription:
    "Strong real estate media should improve presentation, reduce campaign friction and help the agent remain visually consistent.",
  outcomes: [
    {
      title: "Stronger Property Attention",
      description: "Use polished visuals and a clear story to make the listing easier to notice and explore.",
      icon: FaEye,
    },
    {
      title: "Consistent Agent Brand",
      description: "Connect property marketing with repeatable, recognizable content across digital channels.",
      icon: FaUserTie,
    },
    {
      title: "Faster Campaign Execution",
      description: "Receive organized deliverables prepared around the platforms and launch timeline agreed in advance.",
      icon: FaClock,
    },
  ],
  faqs: [
    {
      question: "Which areas do you serve?",
      answer:
        "Timex is based in Fresno and supports projects across the Central Valley and selected California locations. Travel scope is confirmed when the project is scheduled.",
    },
    {
      question: "How quickly are listing assets delivered?",
      answer:
        "Turnaround depends on the deliverables, property size, production requirements and revision scope. The target delivery window is confirmed before the shoot.",
    },
    {
      question: "Can we request both horizontal and vertical video?",
      answer:
        "Yes. Required formats for listing platforms, websites, ads, reels and stories should be included in the approved production brief.",
    },
    {
      question: "Is drone media always available?",
      answer:
        "Aerial production depends on weather, property conditions, airspace, location permissions and applicable operating requirements.",
    },
  ],
  ctaTitle: "Give the next property a stronger visual launch.",
  ctaDescription:
    "Share the address, expected listing date and media priorities. We will help organize the right production plan.",
};

export default function VideoServices() {
  return <SpecializedServicePage content={videoServicesContent} />;
}
