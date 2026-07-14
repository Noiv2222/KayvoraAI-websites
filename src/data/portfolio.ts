// src/data/portfolio.ts
//
// This is the single source of truth for all 12 portfolio case studies.
// To add or edit a project, just edit the object below — no other files need to change.
//
// Fields:
// - slug: used in the URL, e.g. "dental-clinic" -> /portfolio/dental-clinic
// - emoji: shown next to the title on cards and the case study page
// - title: display name of the project
// - industry / challenge / solution: short paragraphs (2-4 sentences each)
// - technology: array of short tags (shown as pills/badges)
// - benefits: array of short bullet points
// - coverImage: path to an image in /public/portfolio/ (add the real file later)
// - demoVideo: optional path to a video in /public/portfolio/ — every project has a
//   placeholder path already. The video player only shows up on a case study page
//   once a real .mp4 file with that exact name exists in public/portfolio/.

export interface PortfolioProject {
  slug: string;
  emoji: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technology: string[];
  benefits: string[];
  coverImage: string;
  demoVideo?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "dental-clinic",
    emoji: "🦷",
    title: "Dental Clinic",
    industry: "Healthcare & Dental Practices",
    challenge:
      "Dental clinics lose significant revenue to missed calls, last-minute cancellations, and no-shows. Front-desk staff are often busy with in-office patients and can't answer every incoming call, especially during peak hours.",
    solution:
      "An AI voice agent answers every call 24/7, books and reschedules appointments directly into the clinic's calendar, and sends automated SMS/email reminders to reduce no-shows.",
    technology: ["AI Voice Agent", "Calendar Sync", "SMS Reminders", "CRM Integration"],
    benefits: [
      "Up to 30% reduction in no-shows",
      "24/7 call coverage with zero missed leads",
      "Faster booking cycle for new patients",
      "Front-desk staff freed up for in-person care",
    ],
    coverImage: "/portfolio/dental-clinic-cover.svg",
    demoVideo: "/portfolio/dental-clinic-demo.mp4",
  },
  {
    slug: "real-estate",
    emoji: "🏡",
    title: "Real Estate",
    industry: "Residential & Commercial Real Estate",
    challenge:
      "Agents struggle to respond to every lead within minutes, especially with listings that generate high volumes of inbound inquiries across multiple platforms.",
    solution:
      "An AI chat and voice agent qualifies leads instantly, answers property questions, schedules showings, and routes hot leads directly to the agent's phone in real time.",
    technology: ["AI Chat Agent", "Lead Qualification", "Showing Scheduler", "CRM Integration"],
    benefits: [
      "Instant response to every inbound lead",
      "Higher lead-to-showing conversion rate",
      "Automated follow-up reduces lost prospects",
      "Agents spend more time closing, less time chasing",
    ],
    coverImage: "/portfolio/real-estate-cover.svg",
    demoVideo: "/portfolio/real-estate-demo.mp4",
  },
  {
    slug: "law-firm",
    emoji: "⚖",
    title: "Law Firm",
    industry: "Legal Services",
    challenge:
      "Law firms often miss potential client calls after hours or during court appearances, and manual intake processes slow down case qualification.",
    solution:
      "An AI voice agent handles intake calls around the clock, screens callers with firm-specific qualifying questions, and books consultations directly onto the attorney's calendar.",
    technology: ["AI Voice Agent", "Intake Automation", "Calendar Sync", "Secure Data Handling"],
    benefits: [
      "No missed consultation requests, day or night",
      "Faster, more consistent client intake",
      "Reduced administrative workload for staff",
      "Improved first impression for prospective clients",
    ],
    coverImage: "/portfolio/law-firm-cover.svg",
    demoVideo: "/portfolio/law-firm-demo.mp4",
  },
  {
    slug: "hvac",
    emoji: "❄",
    title: "HVAC",
    industry: "Heating, Ventilation & Air Conditioning",
    challenge:
      "HVAC companies lose emergency service calls to competitors when the phone isn't answered fast enough, especially during peak seasons.",
    solution:
      "An AI voice agent triages emergency vs. routine calls, books service appointments, and dispatches urgent jobs to on-call technicians automatically.",
    technology: ["AI Voice Agent", "Job Dispatch Automation", "Calendar Sync", "SMS Alerts"],
    benefits: [
      "Faster response to emergency repair calls",
      "Higher booked-job rate during peak season",
      "Reduced dispatcher workload",
      "Improved customer satisfaction scores",
    ],
    coverImage: "/portfolio/hvac-cover.svg",
    demoVideo: "/portfolio/hvac-demo.mp4",
  },
  {
    slug: "restaurant",
    emoji: "🍽",
    title: "Restaurant",
    industry: "Food & Beverage",
    challenge:
      "Restaurants miss reservation calls during busy service hours, and staff don't have time to answer repetitive questions about hours, menus, or availability.",
    solution:
      "An AI voice and chat agent handles reservations, answers FAQs about the menu and hours, and takes waitlist requests — all without pulling staff away from the floor.",
    technology: ["AI Voice Agent", "Reservation System", "FAQ Automation", "Waitlist Management"],
    benefits: [
      "No missed reservations during rush hours",
      "Reduced staff interruptions",
      "Better table utilization",
      "Improved guest experience from first contact",
    ],
    coverImage: "/portfolio/restaurant-cover.svg",
    demoVideo: "/portfolio/restaurant-demo.mp4",
  },
  {
    slug: "gym",
    emoji: "💪",
    title: "Gym",
    industry: "Fitness & Wellness",
    challenge:
      "Gyms and studios struggle to convert trial inquiries into memberships and often lose leads who don't get a fast, personal response.",
    solution:
      "An AI chat agent answers membership questions instantly, books free trial sessions, and follows up automatically with leads who haven't converted yet.",
    technology: ["AI Chat Agent", "Trial Booking", "Automated Follow-Up", "CRM Integration"],
    benefits: [
      "Higher trial-to-membership conversion",
      "Instant answers for pricing and class questions",
      "Automated nurture for undecided leads",
      "Less manual follow-up work for staff",
    ],
    coverImage: "/portfolio/gym-cover.svg",
    demoVideo: "/portfolio/gym-demo.mp4",
  },
  {
    slug: "insurance",
    emoji: "🛡",
    title: "Insurance",
    industry: "Insurance Agencies & Brokers",
    challenge:
      "Insurance agencies receive high volumes of quote requests and policy questions, but manual follow-up is slow and inconsistent, costing them warm leads.",
    solution:
      "An AI voice and chat agent handles initial quote requests, qualifies leads based on coverage needs, and schedules calls with licensed agents automatically.",
    technology: ["AI Voice Agent", "Lead Qualification", "Quote Intake", "Calendar Sync"],
    benefits: [
      "Faster response to quote requests",
      "More qualified leads reaching agents",
      "Reduced drop-off during the quoting process",
      "Consistent, compliant intake conversations",
    ],
    coverImage: "/portfolio/insurance-cover.svg",
    demoVideo: "/portfolio/insurance-demo.mp4",
  },
  {
    slug: "roofing",
    emoji: "🏠",
    title: "Roofing",
    industry: "Roofing & Exterior Services",
    challenge:
      "Roofing companies often miss calls while crews are on job sites, losing storm-damage and emergency leads to faster-responding competitors.",
    solution:
      "An AI voice agent answers every call, captures job details and photos via SMS follow-up, and books inspection appointments directly into the scheduling system.",
    technology: ["AI Voice Agent", "Job Scheduling", "SMS Photo Intake", "CRM Integration"],
    benefits: [
      "No missed leads during storm season",
      "Faster inspection scheduling",
      "Better qualified jobs reaching estimators",
      "Improved close rate on inbound calls",
    ],
    coverImage: "/portfolio/roofing-cover.svg",
    demoVideo: "/portfolio/roofing-demo.mp4",
  },
  {
    slug: "construction",
    emoji: "🏗",
    title: "Construction",
    industry: "General & Specialty Contractors",
    challenge:
      "Contractors juggling active job sites frequently miss new project inquiries, and manual quoting workflows slow down the sales cycle.",
    solution:
      "An AI chat and voice agent captures project details from new inquiries, qualifies budget and timeline, and routes serious leads directly to the estimating team.",
    technology: ["AI Voice Agent", "Lead Qualification", "Project Intake Forms", "CRM Integration"],
    benefits: [
      "Faster response to new project inquiries",
      "Better qualified leads for estimators",
      "Reduced time spent on unqualified quotes",
      "More consistent client communication",
    ],
    coverImage: "/portfolio/construction-cover.svg",
    demoVideo: "/portfolio/construction-demo.mp4",
  },
  {
    slug: "marketing-agency",
    emoji: "📈",
    title: "Marketing Agency",
    industry: "Marketing & Advertising Agencies",
    challenge:
      "Agencies spend significant time on discovery calls with unqualified prospects, slowing down the sales pipeline for their own growth.",
    solution:
      "An AI chat agent pre-qualifies inbound leads with budget and goal-based questions, then books discovery calls only with prospects who meet the agency's criteria.",
    technology: ["AI Chat Agent", "Lead Scoring", "Calendar Sync", "CRM Integration"],
    benefits: [
      "Higher-quality discovery calls",
      "Reduced time wasted on unqualified prospects",
      "Faster sales cycle from inquiry to proposal",
      "More predictable pipeline growth",
    ],
    coverImage: "/portfolio/marketing-agency-cover.svg",
    demoVideo: "/portfolio/marketing-agency-demo.mp4",
  },
  {
    slug: "local-seo",
    emoji: "📍",
    title: "Local SEO",
    industry: "Local Business & SEO Services",
    challenge:
      "Local service businesses often don't realize how many potential customers are searching for them online, and struggle to turn search visibility into booked appointments.",
    solution:
      "An AI-powered local SEO package combines optimized business listings and content with a chat agent on-site that converts search traffic directly into booked calls or appointments.",
    technology: ["Local SEO Optimization", "AI Chat Agent", "Google Business Profile Management", "Analytics Dashboard"],
    benefits: [
      "Improved local search rankings",
      "More website visitors converted into leads",
      "Clear visibility into where leads come from",
      "Ongoing, measurable growth in local visibility",
    ],
    coverImage: "/portfolio/local-seo-cover.svg",
    demoVideo: "/portfolio/local-seo-demo.mp4",
  },
  {
    slug: "ai-workflow-automation",
    emoji: "⚙",
    title: "AI Workflow Automation",
    industry: "Cross-Industry Business Operations",
    challenge:
      "Businesses waste hours on repetitive manual tasks — data entry, follow-ups, reporting — that pull time away from higher-value work.",
    solution:
      "A custom AI automation workflow connects existing tools (CRM, email, calendar, spreadsheets) to handle repetitive tasks automatically, with human review only where it matters.",
    technology: ["Workflow Automation", "API Integrations", "AI Agents", "Custom Dashboards"],
    benefits: [
      "Hours saved per week on manual tasks",
      "Fewer errors from manual data entry",
      "Faster turnaround on routine processes",
      "Team time reallocated to higher-value work",
    ],
    coverImage: "/portfolio/ai-workflow-automation-cover.svg",
    demoVideo: "/portfolio/ai-workflow-automation-demo.mp4",
  },
];
