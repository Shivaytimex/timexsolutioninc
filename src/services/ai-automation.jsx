import {
  FaBrain,
  FaCalendarCheck,
  FaChartLine,
  FaComments,
  FaEnvelopeOpenText,
  FaFilter,
  FaLink,
  FaMagnifyingGlassChart,
  FaRocket,
  FaRoute,
  FaSliders,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { SpecializedServicePage } from "../components/SpecializedServicePage";

const aiAutomationContent = {
  serviceName: "AI Automation",
  eyebrow: "Intelligent Workflow Systems",
  introTitle: "Turn repetitive work into connected, intelligent workflows.",
  intro:
    "Timex Solution Inc designs practical automation systems that help businesses respond faster, keep follow-ups consistent, connect customer journeys and give teams clearer operational visibility. Every solution begins with your real process—not with a generic tool.",
  heroIcon: FaBrain,
  heroImage: "/images/timex-ai-automation-founder-1600.webp",
  imageAlt: "Premium enterprise AI automation command environment",
  imageEyebrow: "Connected Intelligence",
  imageTitle: "One orchestration layer across every customer workflow.",
  visualLabels: ["Lead captured", "Workflow connected", "Action completed"],
  primaryCta: "Request an Automation Audit",
  capabilities: [
    {
      title: "AI Lead Qualification",
      description:
        "Collect, organize and qualify incoming inquiries using business-specific questions before the right opportunity reaches your team.",
      icon: FaFilter,
    },
    {
      title: "Automated Follow-Ups",
      description:
        "Create timely email, SMS or supported messaging sequences that keep prospects moving without relying on manual reminders.",
      icon: FaEnvelopeOpenText,
    },
    {
      title: "CRM & Pipeline Automation",
      description:
        "Connect lead sources, pipeline stages, task creation and ownership rules so information moves through one dependable system.",
      icon: FaRoute,
    },
    {
      title: "Booking Automation",
      description:
        "Route qualified inquiries to the correct calendar, send confirmations and reduce scheduling friction for customers and teams.",
      icon: FaCalendarCheck,
    },
    {
      title: "AI Customer Support",
      description:
        "Build guided assistants for common questions, request collection and human handoff while keeping escalation paths clear.",
      icon: FaComments,
    },
    {
      title: "Reporting & Insights",
      description:
        "Bring key workflow activity into understandable dashboards so teams can identify bottlenecks and improve decisions.",
      icon: FaChartLine,
    },
  ],
  processTitle: "A clear path from manual process to working automation",
  processDescription:
    "We map the process first, define decision rules, build the connections and test real-world scenarios before launch.",
  process: [
    {
      title: "Discover",
      description:
        "We document the current workflow, repetitive tasks, exceptions, systems and success criteria.",
      icon: FaMagnifyingGlassChart,
    },
    {
      title: "Design",
      description:
        "We create the automation map, decision logic, human checkpoints and handoff experience.",
      icon: FaRoute,
    },
    {
      title: "Build & Connect",
      description:
        "We configure the workflow and connect approved tools, forms, calendars and customer systems.",
      icon: FaLink,
    },
    {
      title: "Test & Optimize",
      description:
        "We validate edge cases, monitor performance and refine the workflow after real usage begins.",
      icon: FaSliders,
    },
  ],
  valueTitle: "Automation designed around business outcomes",
  valueDescription:
    "The goal is not more software. The goal is a faster, more consistent journey that your team can understand and manage.",
  outcomes: [
    {
      title: "Faster Response",
      description:
        "Trigger the next approved action as soon as an inquiry or workflow event arrives.",
      icon: FaRocket,
    },
    {
      title: "Consistent Follow-Through",
      description:
        "Use defined rules and checkpoints so important steps are less likely to be overlooked.",
      icon: FaWandMagicSparkles,
    },
    {
      title: "Connected Visibility",
      description:
        "Understand where work is moving, where it is waiting and when a person needs to step in.",
      icon: FaChartLine,
    },
  ],
  engagementTitle: "Choose the level of automation support you need",
  engagementDescription:
    "Start with one high-impact workflow or build a connected automation roadmap. Scope is matched to the systems you already use and the process you want to improve.",
  engagementChecks: [
    "Documented workflow and decision logic",
    "Clear ownership and human handoff points",
    "Testing, launch guidance and operating notes",
    "Optional monitoring and ongoing optimization",
  ],
  engagements: [
    {
      title: "Automation Opportunity Audit",
      description:
        "Identify the strongest use cases, system dependencies, risks and recommended implementation order.",
    },
    {
      title: "Workflow Build",
      description:
        "Design and implement a defined automation—from qualification and routing to follow-up and reporting.",
    },
    {
      title: "Managed Optimization",
      description:
        "Monitor an active workflow, refine rules and expand the system as your operating needs change.",
    },
  ],
  faqs: [
    {
      question: "Which business process should we automate first?",
      answer:
        "The best starting point is usually a repeated, rules-based process with meaningful volume and a clear business outcome. We confirm that during the opportunity audit.",
    },
    {
      question: "Can the workflow connect with our current tools?",
      answer:
        "It depends on the available integrations, permissions and data access. We review your current stack before recommending a connection or alternative approach.",
    },
    {
      question: "Will people still be able to take control?",
      answer:
        "Yes. Human review, exception handling and escalation points are defined as part of the workflow instead of being treated as an afterthought.",
    },
    {
      question: "How is an automation tested before launch?",
      answer:
        "We test normal paths, missing information, duplicate events, handoffs and failure cases, then document the approved operating flow.",
    },
  ],
  ctaTitle: "Find the workflow that can create the most value first.",
  ctaDescription:
    "Tell us where your team loses time, waits for information or repeats the same steps. We will help you define a practical starting point.",
};

export default function AiAutomationPage() {
  return <SpecializedServicePage content={aiAutomationContent} />;
}
