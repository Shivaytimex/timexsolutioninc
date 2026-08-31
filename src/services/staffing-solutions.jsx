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
};

export default function StaffingSolutionsPage() {
  return <ServicePage {...staffingSolutionsContent} />;
}
