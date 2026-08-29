import {
  FaFileContract,
  FaMoneyCheckAlt,
  FaUserClock,
  FaUserPlus,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { ServicePage } from "../components/service-page";

const staffingSolutionsContent = {
  serviceName: "Staffing Solutions",
  description:
    "Timex Solution Inc supports organizations that need defined roles, structured candidate coordination and flexible workforce capacity. Each engagement begins with the real responsibilities, working model, evaluation criteria and ownership required for a dependable staffing process.",
  subServices: [
    { name: "Business Staffing", icon: FaUsers },
    { name: "Executive Search", icon: FaUserTie },
    { name: "Temporary Staffing", icon: FaUserClock },
    { name: "Permanent Placement", icon: FaUserPlus },
    { name: "Contract-to-Hire", icon: FaFileContract },
    { name: "Payroll Services", icon: FaMoneyCheckAlt },
  ],
  packages: [
    {
      name: "Targeted Search",
      description:
        "A focused engagement for one defined role with agreed requirements, evaluation stages and placement expectations.",
      services: [
        "Role and requirement intake",
        "Search and sourcing coordination",
        "Initial profile screening",
        "Candidate communication",
        "Interview scheduling support",
        "Placement follow-through",
      ],
    },
    {
      name: "Managed Staffing",
      description:
        "Ongoing support for organizations with recurring hiring needs, multiple roles or a more active candidate pipeline.",
      services: [
        "Multi-role intake and prioritization",
        "Recurring sourcing activity",
        "Structured candidate tracking",
        "Interview and feedback coordination",
        "Defined reporting cadence",
        "Onboarding communication support",
      ],
    },
    {
      name: "Dedicated Workforce",
      description:
        "A longer-term delivery model for teams that need consistent recruiting capacity and closer process coordination.",
      services: [
        "Dedicated staffing coordination",
        "Documented screening workflow",
        "Candidate pipeline management",
        "Stakeholder communication rhythm",
        "Placement and onboarding tracking",
        "Ongoing process improvement",
      ],
    },
  ],
};

export default function StaffingSolutionsPage() {
  return <ServicePage {...staffingSolutionsContent} />;
}
