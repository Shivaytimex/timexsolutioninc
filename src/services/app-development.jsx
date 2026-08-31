import { FaAndroid, FaApple, FaMobileAlt, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiPwa } from "react-icons/si";
import { ServicePage } from "../components/service-page";

const appDevelopmentContent = {
  serviceName: "App Development",
  description:
    "Timex Solution Inc designs and develops mobile products around real users, clear business requirements and reliable system behavior. From an initial product concept to an evolving customer platform, we connect experience design, engineering, integrations and launch preparation in one accountable workflow.",
  subServices: [
    { name: "iOS Development", icon: FaApple },
    { name: "Android Development", icon: FaAndroid },
    { name: "React Native Development", icon: FaReact },
    { name: "Flutter Development", icon: FaFlutter },
    { name: "Progressive Web Apps", icon: SiPwa },
    { name: "Custom App Development", icon: FaMobileAlt },
  ],
};

export default function AppDevelopmentPage() {
  return <ServicePage {...appDevelopmentContent} />;
}
