export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  body: { h?: string; p?: string; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "ai-voice-agents-small-business",
    title: "How AI Voice Agents Are Changing Customer Service for Small Businesses",
    excerpt: "24/7 answering, instant qualification, zero missed calls — a practical look at what AI voice agents can (and can't) do for a small operations team.",
    category: "AI Voice",
    readTime: "6 min read",
    date: "2026-06-15",
    body: [
      { p: "For a decade, 'good customer service' at a small business meant one thing: a person picking up before the third ring. That standard is still true — but the definition of 'a person' has quietly shifted." },
      { h: "What an AI voice agent actually does" },
      { p: "A well-built voice agent is not an IVR. It's a conversational system that answers, understands intent, asks clarifying questions, checks your calendar, books the appointment, logs everything in your CRM, and hands off to a human when it should." },
      { list: [
        "Answers 24/7, including weekends and after-hours peaks.",
        "Qualifies leads with the same 3–5 questions your best receptionist asks.",
        "Books straight into Google Calendar, HubSpot, or GoHighLevel.",
        "Delivers a call summary and transcript to the owner within seconds.",
      ] },
      { h: "Where it wins" },
      { p: "The biggest gains show up in service businesses: dental, HVAC, roofing, real estate, legal intake. Missed calls in these industries are lost revenue — and studies consistently put after-hours missed-call rates for local service businesses above 30%." },
      { h: "Where it doesn't" },
      { p: "Emotional support, complex complaints, or negotiation-heavy calls still belong with a human. A good voice agent knows this and escalates fast — with full context so the human doesn't restart from zero." },
      { h: "Bottom line" },
      { p: "You don't need to replace your team. You need to stop losing leads at 8:47pm on a Tuesday. That's what a voice agent is for." },
    ],
  },
  {
    slug: "signs-you-need-marketing-automation",
    title: "5 Signs Your Business Needs Marketing Automation",
    excerpt: "If any of these feel familiar, you're not scaling — you're patching. Here's how to tell when it's time to automate.",
    category: "Automation",
    readTime: "5 min read",
    date: "2026-06-08",
    body: [
      { h: "1. Leads sit for hours before anyone follows up" },
      { p: "Response time is the single biggest predictor of conversion. If your speed-to-lead is measured in hours instead of minutes, automation will move that number more than any hire." },
      { h: "2. You're copy-pasting between tools" },
      { p: "If lead info gets manually pushed from a form to a spreadsheet to a CRM to an email tool, you're paying for four subscriptions to do one job — badly." },
      { h: "3. Follow-up is inconsistent" },
      { p: "Some leads get 5 touches, others get 1. The difference isn't strategy — it's whoever was free that afternoon. An automated sequence fixes that permanently." },
      { h: "4. You don't know your funnel numbers" },
      { p: "If you can't answer 'what's my lead-to-booking conversion rate this month?' in under 60 seconds, you don't have a marketing system — you have a marketing hope." },
      { h: "5. Your team spends more time reporting than selling" },
      { p: "Weekly reports built by hand in Google Sheets are a tax on your best people. Automation replaces the tax with a live dashboard." },
      { h: "The takeaway" },
      { p: "Marketing automation isn't about doing more. It's about removing the manual work between the good decisions you've already made." },
    ],
  },
  {
    slug: "local-seo-checklist-service-businesses",
    title: "Local SEO Checklist for Service-Based Businesses",
    excerpt: "The exact steps to get your business into the Google map pack — and stay there — without buying a single link.",
    category: "SEO",
    readTime: "7 min read",
    date: "2026-05-30",
    body: [
      { p: "For most local service businesses, the top three map-pack results get 80%+ of the clicks. Everything below that is a rounding error. Here's the checklist we run for every SEO engagement." },
      { h: "1. Google Business Profile — 100% complete" },
      { list: [
        "Every service listed with clear descriptions.",
        "Primary category chosen carefully (this is the #1 ranking signal for GBP).",
        "10+ high-quality photos, refreshed monthly.",
        "Business hours accurate — including holidays.",
        "Booking or quote link enabled.",
      ] },
      { h: "2. NAP consistency" },
      { p: "Name, Address, Phone — identical across your website, GBP, Yelp, BBB, industry directories, and social profiles. Inconsistent NAP is the most common preventable ranking killer." },
      { h: "3. On-site local signals" },
      { list: [
        "City + service in H1 on your homepage.",
        "A dedicated page per service AND per service area.",
        "LocalBusiness schema markup on every page.",
        "Embedded Google Map on the contact page.",
      ] },
      { h: "4. Reviews — the real ranking factor" },
      { p: "Ask every satisfied customer, in person, at the moment of maximum happiness. Reply to every review — good and bad — within 48 hours. Aim for a steady drip, not a spike." },
      { h: "5. Local content, not filler" },
      { p: "One useful post per month beats ten thin ones. Answer the questions your customers actually ask, with your city name in the URL and H1." },
      { h: "6. Measure what matters" },
      { p: "Track GBP calls, direction requests, and booking clicks — not just website traffic. That's where local revenue actually comes from." },
      { h: "Do these six things, in order" },
      { p: "Skip the shortcuts. This is what compounds." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}