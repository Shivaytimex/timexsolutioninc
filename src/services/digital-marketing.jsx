import { FaBullhorn } from "react-icons/fa6";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { SiContentful } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { ServicePage } from "../components/service-page";

const digitalMarketingContent = {
  serviceName: "Digital Marketing",
  description:
    "Timex Solution Inc connects search, paid media, social content and campaign experiences around the complete customer journey. The objective is not simply more activity—it is stronger visibility, clearer conversion paths and performance decisions your team can understand.",
  subServices: [
    { name: "Social Media Marketing", icon: FaFacebook },
    { name: "Search Engine Optimization (SEO)", icon: TbSeo },
    { name: "Content Marketing", icon: SiContentful },
    { name: "Pay-Per-Click Advertising (PPC)", icon: FaGoogle },
    { name: "Influencer Marketing", icon: FaInstagram },
    { name: "Email Marketing", icon: FaBullhorn },
  ],
  packages: [
    {
      name: "Growth Foundation",
      description:
        "A focused strategy and setup engagement for businesses that need clearer positioning, channel priorities and measurement.",
      services: [
        "Digital visibility and journey audit",
        "Audience and offer alignment",
        "Channel-role recommendation",
        "Campaign and content roadmap",
        "Measurement priorities",
        "Documented implementation plan",
      ],
    },
    {
      name: "Managed Growth",
      description:
        "Recurring campaign and content management organized around agreed channels, conversion actions and reporting cadence.",
      services: [
        "Campaign planning and management",
        "Content and creative coordination",
        "Search or paid-media execution",
        "Landing-path recommendations",
        "Performance review and optimization",
        "Scheduled reporting and next actions",
      ],
    },
    {
      name: "Integrated Growth",
      description:
        "A coordinated multi-channel engagement connecting creative production, media, web experience and follow-through.",
      services: [
        "Cross-channel growth strategy",
        "Campaign creative production",
        "Paid and organic channel coordination",
        "Landing-page and conversion support",
        "CRM or follow-up alignment",
        "Ongoing testing and performance planning",
      ],
    },
  ],
};

export default function DigitalMarketingPage() {
  return <ServicePage {...digitalMarketingContent} />;
}
