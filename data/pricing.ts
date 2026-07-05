export type PricePlan = {
  tier: string;
  quantity: string;
  type: string;
  price: string;
  description: string;
  badge?: string;
  featured?: boolean;
};

export type PricingGroup = {
  id: string;
  label: string;
  title: string;
  note: string;
  features: string[];
  plans: PricePlan[];
};

// Edit package names, quantities, and prices here. Every pricing card is rendered from this file.
export const pricingGroups: PricingGroup[] = [
  {
    id: "reel-views",
    label: "Reel views",
    title: "Instagram Reel views",
    note: "Fast view packages sourced across Explore, browser, and feed placements all in-app based, 100% authentic .",
    features: ["Fast start", "High-volume delivery", "Public link only", "Custom quantities available"],
    plans: [
      { tier: "Basic", quantity: "1K", type: "Views", price: "₹20", description: "Try a small campaign", badge: "Try now" },
      { tier: "Starter", quantity: "5K", type: "Views", price: "₹80", description: "Grow initial reach" },
      { tier: "Growth", quantity: "10K", type: "Views", price: "₹150", description: "Best for consistent reach", badge: "Popular", featured: true },
      { tier: "Viral", quantity: "50K", type: "Views", price: "₹700", description: "High-volume exposure" },
      { tier: "Mega", quantity: "100K", type: "Views", price: "₹1,200", description: "Maximum visibility", badge: "Best value" },
    ],
  },
  {
    id: "followers-worldwide",
    label: "Worldwide followers",
    title: "Instagram followers",
    note: "Worldwide mix with 150 days of refill coverage.",
    features: ["Worldwide mix", "150-day refill", "Fast delivery", "Password-free setup"],
    plans: [
      { tier: "Starter", quantity: "1K", type: "Followers", price: "₹299", description: "A clean first step" },
      { tier: "Growth", quantity: "5K", type: "Followers", price: "₹1,299", description: "Best value for momentum", badge: "Most popular", featured: true },
      { tier: "Pro", quantity: "10K", type: "Followers", price: "₹2,499", description: "Built for visible impact", badge: "Best deal" },
    ],
  },
  {
    id: "followers-indian",
    label: "Indian followers",
    title: "Instagram followers",
    note: "Mostly Indian mix with 300+ days of refill coverage.",
    features: ["Mostly Indian mix", "300+ day refill", "Fast delivery", "Password-free setup"],
    plans: [
      { tier: "Starter", quantity: "1K", type: "Followers", price: "₹399", description: "Perfect to get started" },
      { tier: "Growth", quantity: "5K", type: "Followers", price: "₹1,550", description: "Best value for growth", badge: "Most popular", featured: true },
      { tier: "Pro", quantity: "10K", type: "Followers", price: "₹2,999", description: "A high-visibility plan", badge: "Best deal" },
    ],
  },
  {
    id: "followers-premium",
    label: "Premium international",
    title: "Premium Instagram followers",
    note: "International targeting options with 350+ days of refill coverage.",
    features: ["International mix", "350+ day refill", "Priority delivery", "Enhanced refill support"],
    plans: [
      { tier: "Starter", quantity: "1K", type: "Followers", price: "$15", description: "Premium entry package" },
      { tier: "Growth", quantity: "5K", type: "Followers", price: "$74", description: "Scaled international growth", badge: "Most popular", featured: true },
      { tier: "Pro", quantity: "10K", type: "Followers", price: "$130", description: "Maximum campaign impact", badge: "Best deal" },
    ],
  },
  {
    id: "likes-worldwide",
    label: "Worldwide likes",
    title: "Instagram likes",
    note: "Worldwide profiles with fast delivery and lifetime coverage on eligible packages.",
    features: ["Worldwide profiles", "Fast delivery", "Public link only", "Lifetime coverage"],
    plans: [
      { tier: "Starter", quantity: "100", type: "Likes", price: "₹20", description: "Perfect to get started" },
      { tier: "Growth", quantity: "500", type: "Likes", price: "₹90", description: "Best value", badge: "Most popular", featured: true },
      { tier: "Popular", quantity: "1,000", type: "Likes", price: "₹150", description: "Visible engagement" },
      { tier: "Mega", quantity: "10K", type: "Likes", price: "₹1,100", description: "Maximum engagement", badge: "Best value" },
    ],
  },
  {
    id: "likes-indian",
    label: "Indian likes",
    title: "Instagram likes",
    note: "Mostly Indian profiles with fast delivery and lifetime coverage on eligible packages.",
    features: ["Mostly Indian profiles", "Fast delivery", "Public link only", "Lifetime coverage"],
    plans: [
      { tier: "Starter", quantity: "100", type: "Likes", price: "₹25", description: "Perfect to get started" },
      { tier: "Growth", quantity: "500", type: "Likes", price: "₹120", description: "Best value", badge: "Most popular", featured: true },
      { tier: "Popular", quantity: "1,000", type: "Likes", price: "₹200", description: "High-impact engagement" },
      { tier: "Mega", quantity: "10K", type: "Likes", price: "₹1,350", description: "Maximum engagement", badge: "Best value" },
    ],
  },
];
