import { Bot, Building2, ChartNoAxesCombined, Code2, Truck } from "lucide-react";

export const insights = [
  {
    slug: "ai-automation-reduces-manual-work",
    category: "AI & Operations",
    title: "How AI automation reduces manual work",
    summary: "A practical framework for removing repetitive work without removing human judgment, accountability or control.",
    readTime: "8 min read",
    icon: Bot,
    takeaway: "Automate repeatable decisions and handoffs first. Keep people responsible for exceptions, approvals and outcomes.",
    sections: [
      { title: "Start with the workflow—not the tool", paragraphs: ["The strongest automation projects begin with a clear map of how work moves today: where information enters, who checks it, what decision is made and what happens next. A tool selected before that map exists usually adds another layer instead of removing one.", "Document the trigger, inputs, business rules, owner, exception path and final system of record. This exposes duplicate entry, slow handoffs and tasks that depend on one person remembering the next step."] },
      { title: "Choose work that is repetitive and measurable", paragraphs: ["Good first candidates include lead routing, appointment reminders, document classification, CRM updates, status notifications and recurring reporting. They happen often, follow recognizable rules and produce an outcome that can be checked.", "Avoid starting with rare, high-consequence decisions or processes with constantly changing rules. Those need stronger oversight and are harder to validate safely."] },
      { title: "Design human control into the system", paragraphs: ["Automation should make responsibility clearer. Define confidence thresholds, approval gates, audit logs and a route for unusual cases. A team member should always know what the system did, why a case was escalated and how to correct it.", "Review privacy, access permissions and retention before connecting customer, employee or financial data. Give every integration only the access it needs."] },
      { title: "Measure the operating result", paragraphs: ["Track cycle time, touches per case, error and rework rate, exception volume and time returned to the team. Compare a baseline with a controlled pilot before scaling.", "The objective is not simply more automation. It is a faster, more dependable process with fewer avoidable handoffs and a better customer experience."] },
    ],
    checklist: ["Map one workflow end to end", "Record baseline time and error rate", "Define rules, exceptions and an owner", "Pilot with a limited volume", "Review logs and quality before scaling"],
    sources: [
      { label: "NIST AI Risk Management Framework", href: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "NIST AI RMF Playbook", href: "https://airc.nist.gov/airmf-resources/playbook/" },
    ],
  },
  {
    slug: "choose-a-website-partner",
    category: "Web Strategy",
    title: "How businesses should choose a website partner",
    summary: "The questions that separate a strategic delivery partner from a vendor that only produces attractive screens.",
    readTime: "9 min read",
    icon: Code2,
    takeaway: "Choose the team that can explain business outcomes, ownership, accessibility, performance and post-launch operations before design begins.",
    sections: [
      { title: "Define the business job of the website", paragraphs: ["A clear brief connects audiences to actions: request a quote, book, apply, buy, call or understand a complex service. Without that priority, teams debate visual preferences while the customer journey stays unresolved.", "Ask a potential partner how they will validate navigation, messaging and calls to action. Their answer should include discovery and user behavior—not only design references."] },
      { title: "Evaluate the delivery process", paragraphs: ["Request a written scope covering content, design, development, integrations, redirects, analytics, testing, launch and training. Confirm who owns decisions and how changes affect timeline and scope.", "A credible partner can describe review milestones, browser and device testing, accessibility checks, quality assurance and a rollback plan."] },
      { title: "Make performance and accessibility requirements", paragraphs: ["Performance, responsive behavior, semantic structure, keyboard access, contrast and meaningful labels belong in the acceptance criteria. They are not optional polish after launch.", "Ask how the team monitors Core Web Vitals, compresses media, limits third-party scripts and supports people who prefer reduced motion."] },
      { title: "Protect long-term ownership", paragraphs: ["Confirm ownership of the domain, source code, analytics, content, design files and third-party accounts. Document hosting, backups, security updates and the process for future changes.", "The right relationship leaves your business with a maintainable system, clear credentials and usable documentation—not dependency on one individual."] },
    ],
    checklist: ["Agree on primary audiences and conversions", "Review scope, milestones and change control", "Set performance and accessibility criteria", "Confirm content and account ownership", "Define launch support and maintenance"],
    sources: [
      { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },
      { label: "W3C: Planning and managing web accessibility", href: "https://www.w3.org/WAI/planning-and-managing/" },
      { label: "Google Search Essentials", href: "https://developers.google.com/search/docs/essentials" },
    ],
  },
  {
    slug: "real-estate-media-launch-checklist",
    category: "Real Estate Media",
    title: "Real estate media launch checklist",
    summary: "A field-to-listing workflow for coordinating photography, aerials, 3D tours and launch assets without last-minute gaps.",
    readTime: "7 min read",
    icon: Building2,
    takeaway: "Treat media as one coordinated launch system: prepare the property, capture to a shot plan, verify every asset and publish consistently.",
    sections: [
      { title: "Prepare before the photographer arrives", paragraphs: ["Confirm access, occupancy, weather, parking, special features and any community restrictions. The property should be clean, decluttered and staged before the scheduled window so production time is spent capturing—not rearranging.", "Create a short priority list: hero exterior, primary living area, kitchen, main bedroom, outdoor space and the details that make the property distinct."] },
      { title: "Match deliverables to the launch", paragraphs: ["Decide which assets the listing actually needs: still photography, vertical social clips, property video, aerial media, floor plan or 3D tour. Confirm usage, aspect ratios, branding and delivery deadlines in advance.", "Drone work depends on location, airspace, weather and qualified operation. It should add geographic context, not replace clear ground-level coverage."] },
      { title: "Run quality control before publishing", paragraphs: ["Check exposure, color consistency, vertical lines, room sequence and whether the final set represents the property accurately. Verify the address, filenames, tour links, branding rules and image order.", "Keep an unbranded media set where platform rules require it and make sure every external tour link works on mobile."] },
      { title: "Coordinate the release", paragraphs: ["The listing, agent channels, email and paid promotion should launch from the same approved asset set. Prepare captions and key property facts while editing is underway, then assign one person to approve the release.", "After launch, verify the live listing and track inquiries, saves, tour engagement and content performance to inform the next property campaign."] },
    ],
    checklist: ["Confirm access, weather and property readiness", "Approve the shot and deliverables list", "Verify platform and drone requirements", "Quality-check every file and tour link", "Coordinate listing and social release"],
    sources: [
      { label: "Zillow 3D Home", href: "https://www.zillow.com/3d-home/" },
      { label: "FAA: Become a drone pilot", href: "https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot" },
    ],
  },
  {
    slug: "trucking-recruitment-campaign-strategy",
    category: "Trucking & Logistics",
    title: "Trucking recruitment campaign strategy",
    summary: "A structured campaign model that connects an honest driver offer, fast follow-up and compliant qualification steps.",
    readTime: "8 min read",
    icon: Truck,
    takeaway: "Recruitment improves when the offer is specific, the application is short, response is fast and qualification remains disciplined.",
    sections: [
      { title: "Build a driver-specific offer", paragraphs: ["Start with the lane, home-time pattern, equipment, compensation structure, schedule, minimum experience and operating area. Specific information helps suitable drivers self-select and reduces unproductive screening calls.", "Use real fleet, team and terminal content when possible. The campaign should show the work accurately rather than relying on generic recruitment promises."] },
      { title: "Create a low-friction response path", paragraphs: ["Mobile applicants should be able to express interest quickly with essential contact and qualification fields. Ask only what is needed to determine the next step; collect deeper documentation in the appropriate screening workflow.", "Connect each campaign source to a consistent tracking field so the team can see which audience and message produced qualified conversations."] },
      { title: "Make speed part of the campaign", paragraphs: ["Define who receives a new lead, the response-time expectation and what happens after missed contact. Automated confirmation and reminders can protect the handoff, while a trained recruiter handles questions and expectations.", "A clear sequence—new lead, initial contact, prequalification, documentation, interview and disposition—prevents candidates from disappearing between systems."] },
      { title: "Measure qualified progress", paragraphs: ["Cost per lead alone can reward low-quality volume. Track contact rate, qualification rate, completed applications, interviews, offers, hires and early retention by campaign source.", "Recruitment marketing must work alongside the carrier's safety and qualification process. Advertising should never imply that required checks can be bypassed."] },
    ],
    checklist: ["Document the lane and driver offer", "Create a fast mobile interest form", "Assign response ownership and timing", "Track stages through qualified hire", "Align marketing with qualification requirements"],
    sources: [
      { label: "FMCSA: Driver qualification files", href: "https://www.fmcsa.dot.gov/safety/new-entrant-safety-assurance-program/driver-qualification-files" },
      { label: "FMCSA: Entry-Level Driver Training", href: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt" },
    ],
  },
  {
    slug: "digital-marketing-measurement-guide",
    category: "Growth & Measurement",
    title: "Digital marketing measurement guide",
    summary: "A practical measurement system that connects channel activity to qualified leads, sales progress and business value.",
    readTime: "10 min read",
    icon: ChartNoAxesCombined,
    takeaway: "Start with business decisions, define a small conversion model and make every dashboard explain what should happen next.",
    sections: [
      { title: "Begin with the business question", paragraphs: ["A useful measurement plan answers questions such as: Which campaigns create qualified inquiries? Where do prospects abandon the journey? Which markets or services produce valuable work? Metrics should support a decision, not fill a dashboard.", "Write the primary outcome, supporting actions and owner for each campaign before launch. This keeps platform metrics connected to operating reality."] },
      { title: "Create a clean conversion model", paragraphs: ["Separate business outcomes—purchase, booked appointment, qualified lead—from useful signals such as a video view or brochure download. Name events consistently and record what each event means.", "Test forms, calls, booking tools and confirmation pages across devices. A conversion that fires twice or misses mobile traffic can distort budget decisions."] },
      { title: "Connect marketing to lead quality", paragraphs: ["Capture campaign source in the CRM or lead system, then add qualification and outcome stages. This allows teams to compare channels by qualified opportunity and revenue contribution rather than raw form volume.", "Use privacy-conscious collection, appropriate consent and limited access. Measurement should be dependable without collecting data the business does not need."] },
      { title: "Build a decision rhythm", paragraphs: ["Review delivery and tracking health frequently, optimize campaigns on a defined cadence and evaluate business outcomes over a window appropriate to the sales cycle. Annotate major changes so performance shifts have context.", "A strong report explains what changed, why it matters, what the team learned and which action will be tested next."] },
    ],
    checklist: ["Define one primary business outcome", "Document events and conversion rules", "Test tracking on every device", "Connect source to CRM outcome", "Report decisions, owners and next tests"],
    sources: [
      { label: "Google Analytics: Events", href: "https://support.google.com/analytics/answer/9267735" },
      { label: "Google Ads: About conversion measurement", href: "https://support.google.com/google-ads/answer/1722022" },
    ],
  },
];

export const insightBySlug = Object.fromEntries(insights.map((insight) => [insight.slug, insight]));
