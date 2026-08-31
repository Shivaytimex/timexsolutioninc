import {
  FaArrowTrendDown,
  FaChartSimple,
  FaClipboardCheck,
  FaClockRotateLeft,
  FaFileInvoiceDollar,
  FaFolderOpen,
  FaListCheck,
  FaMoneyCheckDollar,
  FaPeopleGroup,
  FaReceipt,
  FaShieldHalved,
  FaTableList,
} from "react-icons/fa6";
import { SpecializedServicePage } from "../components/SpecializedServicePage";

const backOfficeContent = {
  serviceName: "Back-Office & Billing Support",
  eyebrow: "Reliable Business Operations",
  introTitle: "Reliable daily execution behind your business.",
  intro:
    "Timex Solution Inc supports recurring billing administration, records, coordination and reporting so your internal team can stay focused on customers and growth. Scope, access, turnaround expectations and quality checks are agreed before work begins.",
  heroIcon: FaFileInvoiceDollar,
  heroImage: "/images/timex-back-office-billing-team-1600.webp",
  imageAlt: "Professional business operations team reviewing back-office workflows",
  imageEyebrow: "Operational Excellence",
  imageTitle: "A dependable support layer behind your daily business.",
  visualLabels: ["Work received", "Quality checked", "Report delivered"],
  primaryCta: "Request an Operations Assessment",
  capabilities: [
    {
      title: "Billing Administration",
      description:
        "Support recurring billing tasks using your approved process, source documents, schedule and business systems.",
      icon: FaFileInvoiceDollar,
    },
    {
      title: "Invoice Preparation",
      description:
        "Prepare invoices from approved information, confirm required fields and route exceptions for client review.",
      icon: FaReceipt,
    },
    {
      title: "Payment Status Tracking",
      description:
        "Maintain organized status records so open, paid and overdue items can be reviewed through a consistent process.",
      icon: FaMoneyCheckDollar,
    },
    {
      title: "Receivables Follow-Up",
      description:
        "Coordinate approved reminder activity and document responses while following the tone and escalation rules you set.",
      icon: FaClockRotateLeft,
    },
    {
      title: "CRM & Data Administration",
      description:
        "Keep customer records, statuses, notes and assigned fields updated according to documented data standards.",
      icon: FaTableList,
    },
    {
      title: "Document & Reporting Support",
      description:
        "Organize working documents and deliver agreed operational summaries for clearer review and accountability.",
      icon: FaFolderOpen,
    },
  ],
  processTitle: "A documented operating model for dependable execution",
  processDescription:
    "We confirm the scope, access controls, operating steps, review rules and reporting cadence before taking on recurring work.",
  process: [
    {
      title: "Scope & Onboard",
      description:
        "Define responsibilities, volume, turnaround times, source information and escalation contacts.",
      icon: FaListCheck,
    },
    {
      title: "Secure Process Setup",
      description:
        "Document access, file handling, role permissions, working templates and client approval points.",
      icon: FaShieldHalved,
    },
    {
      title: "Daily Execution",
      description:
        "Complete assigned tasks against the agreed schedule and surface missing information or exceptions.",
      icon: FaClipboardCheck,
    },
    {
      title: "Quality & Reporting",
      description:
        "Review completed work, track exceptions and provide the agreed weekly or monthly operational summary.",
      icon: FaChartSimple,
    },
  ],
  valueTitle: "Back-office support built for control and consistency",
  valueDescription:
    "A successful support relationship should make responsibilities clearer, work easier to review and capacity easier to plan.",
  outcomes: [
    {
      title: "Lower Operating Load",
      description:
        "Move defined recurring tasks away from internal teams while retaining agreed review and approval controls.",
      icon: FaArrowTrendDown,
    },
    {
      title: "Reliable Execution",
      description:
        "Use checklists, ownership rules and reporting cadence to create a more predictable operating rhythm.",
      icon: FaClipboardCheck,
    },
    {
      title: "Flexible Capacity",
      description:
        "Choose project, managed or dedicated support based on workload, continuity and required coverage.",
      icon: FaPeopleGroup,
    },
  ],
  faqs: [
    {
      question: "What does back-office and billing support cover?",
      answer:
        "Coverage can include invoice preparation, billing administration, status tracking, receivables follow-up, records updates, document organization and operational reporting. Exact responsibilities are defined in the scope.",
    },
    {
      question: "How do you protect business information?",
      answer:
        "We define approved access, user roles, file handling, review points and escalation contacts before work begins. Any additional security or regulatory requirement must be confirmed during onboarding.",
    },
    {
      question: "Can we approve work before it is finalized?",
      answer:
        "Yes. Client approvals and exception review can be built into the operating checklist based on the type of work and your internal controls.",
    },
    {
      question: "Is this medical billing or specialized regulated billing?",
      answer:
        "This page describes general business billing and back-office support. Medical billing or another regulated workflow requires a separate scope and compliance review before any service can be confirmed.",
    },
  ],
  ctaTitle: "Build a clearer, more dependable support process.",
  ctaDescription:
    "Share the recurring work, volume, systems and review requirements you want supported. We will help define a practical operating scope.",
};

export default function BackOfficeSupportPage() {
  return <SpecializedServicePage content={backOfficeContent} />;
}
