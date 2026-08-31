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
};

export default function DigitalMarketingPage() {
  return <ServicePage {...digitalMarketingContent} />;
}
