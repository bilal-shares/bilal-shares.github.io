import {
  Camera,
  CalendarRange,
  CirclePlay,
  Code2,
  Globe2,
  Monitor,
  Music2,
  Palette,
  Send,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Social.bil",
  domain: "https://socialslay.me",
  description:
    "Premium social media growth, creative strategy, branding, and web experiences for creators, artists, businesses, brands, and agencies.",
  whatsapp: "https://wa.me/917017727563",
  instagram: "https://instagram.com/social.bil",
  telegram: "https://t.me/inframe_vamp",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/proofs", label: "Proofs" },
  { href: "/contact", label: "Contact Us" },
];

export const services = [
  {
    title: "Instagram Growth",
    short: "Build visible momentum across followers, likes, reels, stories, saves, shares, and comments and many more. You name it we have it",
    description:
      "Audience growth packages shaped around your region, speed, refill needs, and campaign goals. Ideal for creators, artists, brands, and verified profiles.",
    tags: ["Followers", "Likes", "Views", "reposts and more+"],
    icon: Camera,
    accent: "#E1306C",
  },
  {
    title: "Facebook Growth",
    short: "Increase page authority with followers, likes, engagement, and video reach and get monetized.",
    description:
      "Flexible campaigns for pages, public figures, local businesses, launches, and high-volume agency fulfillment.",
    tags: ["Page Likes", "Followers", "Video Views", "Engagement"],
    icon: Users,
    accent: "#1877F2",
  },
  {
    title: "TikTok Growth",
    short: "Give strong content the early velocity it needs to be noticed.",
    description:
      "Views, likes, followers, and share-focused packages for individual posts or sustained campaign rollouts.",
    tags: ["Views", "Followers", "Likes", "Shares and more  "],
    icon: Music2,
    accent: "#00F2EA",
  },
  {
    title: "YouTube Growth",
    short: "Support channel milestones with subscribers, views, watch hours, likes, and comments.",
    description:
      "Structured growth for long-form channels, Shorts, launches, music releases, and monetization journeys.",
    tags: ["Subscribers", "Views", "Watch Hours", "Comments"],
    icon: CirclePlay,
    accent: "#FF0033",
  },
  {
    title: "Telegram Growth",
    short: "Grow channel presence through members, post views, and reactions.",
    description:
      "Campaigns for communities, announcement channels, creator groups, and high-frequency content publishers.",
    tags: ["Members", "Views", "Reactions", "Reach"],
    icon: Send,
    accent: "#229ED9",
  },
  {
    title: "Website Design",
    short: "Premium conversion-led interfaces with a clear brand point of view.",
    description:
      "Responsive website design, interaction concepts, landing pages, and content systems built to make the next action obvious.",
    tags: ["UI/UX", "Responsive", "Conversion", "Motion"],
    icon: Monitor,
    accent: "#FFFFFF",
  },
  {
    title: "Website Development",
    short: "Fast, maintainable websites engineered for real-world growth.",
    description:
      "Production builds using modern React and Next.js patterns, strong technical SEO, analytics readiness, and performance discipline.",
    tags: ["Next.js", "React", "SEO", "Performance"],
    icon: Code2,
    accent: "#F77737",
  },
  {
    title: "Content Planning",
    short: "Turn a posting habit into a repeatable publishing system.",
    description:
      "Campaign themes, platform-specific calendars, hooks, content pillars, and distribution plans aligned to your audience.",
    tags: ["Calendars", "Hooks", "Campaigns", "Strategy"],
    icon: CalendarRange,
    accent: "#25D366",
  },
  {
    title: "Branding",
    short: "Create a recognizable visual and verbal identity across every touchpoint.",
    description:
      "Positioning, identity direction, social templates, creative systems, and launch-ready brand assets for modern digital businesses.",
    tags: ["Identity", "Positioning", "Guidelines", "Creative"],
    icon: Palette,
    accent: "#FCAF45",
  },
];

export const platforms = [
  { name: "Instagram", icon: Camera, color: "#E1306C" },
  { name: "TikTok", icon: Music2, color: "#00F2EA" },
  { name: "YouTube", icon: CirclePlay, color: "#FF0033" },
  { name: "Facebook", icon: Users, color: "#1877F2" },
  { name: "Telegram", icon: Send, color: "#229ED9" },
  { name: "Web", icon: Globe2, color: "#FFFFFF" },
];

export const testimonials = [
  {
    quote:
      "Ordered 10K Instagram followers and they arrived within two hours. Support stayed responsive throughout the order.",
    name: "Aisha K.",
    role: "Instagram creator",
  },
  {
    quote:
      "The process was simple, the package was affordable, and delivery was much faster than I expected.",
    name: "Rahul S.",
    role: "Business owner",
  },
  {
    quote:
      "Professional communication from the first WhatsApp message to completion. I knew what was happening at every step.",
    name: "Mohamed T.",
    role: "YouTube creator",
  },
];

export const faqs = [
  {
    question: "Do you need my password?",
    answer:
      "No. we only needs the public profile, post, page, or channel link required for the selected services. We never ask for your account password.",
  },
  {
    question: "How fast does delivery start?",
    answer:
      "Most orders begin processing within minutes of confirmation. Final delivery time depends on the platform, quantity, and package selected.",
  },
  {
    question: "What quality options are available?",
    answer:
      "Packages vary by geography, retention, speed, and profile quality. We help you choose the most appropriate tier for your growth instead of forcing one option on every client.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Send your public link, target service, desired quantity, and preferred package through WhatsApp, Instagram, or Telegram. You receive a clear quote before work begins.",
  },
  {
    question: "What happens if followers drop?",
    answer:
      "all packages include free refill coverage for the stated period. Contact support with your order details and the team will review the dro and refill them for FREE.",
  },
  {
    question: "Do you support agencies and bulk orders?",
    answer:
      "Yes. Custom quantities, recurring fulfillment, and bulk pricing are available for agencies, brands, and campaign managers.",
  },
];
