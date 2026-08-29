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
  packages: [
    {
      name: "Product Foundation",
      description:
        "A focused discovery and validation engagement for teams that need to clarify the product before committing to a full build.",
      services: [
        "Product goals and user definition",
        "Feature and workflow prioritization",
        "Core journey mapping",
        "Technical approach and dependencies",
        "Launch-phase roadmap",
        "Documented scope recommendation",
      ],
    },
    {
      name: "Product Build",
      description:
        "Design and engineering for a defined application release with visible milestones, testing and launch preparation.",
      services: [
        "Experience and interface design",
        "Approved platform development",
        "Authentication and core workflows",
        "Supported API integrations",
        "Quality assurance and release review",
        "Deployment and handoff preparation",
      ],
    },
    {
      name: "Product Partnership",
      description:
        "Ongoing product delivery for organizations that need continuous improvements, releases and technical support.",
      services: [
        "Prioritized product backlog",
        "Release planning and delivery cadence",
        "New feature development",
        "Performance and reliability improvements",
        "Integration expansion",
        "Maintenance and operating documentation",
      ],
    },
  ],
};

export default function AppDevelopmentPage() {
  return <ServicePage {...appDevelopmentContent} />;
}
