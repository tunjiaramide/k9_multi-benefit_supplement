import {
  Bone,
  Salad,
  Sparkles,
  Apple,
  ShieldCheck,
  Droplets,
  Leaf,
  FlaskConical,
  Fish,
  HeartPulse,
  Wheat,
  PawPrint,
  PackageCheck,
  Zap,
  Dog,
  Activity,
  Hourglass,
  ClipboardList,
  Package,
  type LucideIcon,
} from "lucide-react";

export const product = {
  name: "PrimoScience K9 Multi-Benefit Supplement",
  brand: "PrimoScience",
  manufacturer: "Transcendent Pet Products Inc.",
  category: "Dog vitamins and supplements",
  tagline: "One soft chew. Four areas of support.",
  description:
    "PrimoScience K9 Multi-Benefit Supplement combines nutritional support for joints, digestion, skin and coat, and everyday wellness in one convenient soft chew.",
  price: 25500,
  currency: "NGN",
  availability: "InStock" as const,
  servingSize: "3.5g soft chew",
  chewCount: 60,
  netWeight: "227 g (8 oz)",
  packageSize: "Approx. 60 soft chews · 8 oz (227g)",
  flavor: "Peanut butter banana flavour",
  storage:
    "Store in a cool, dry place below 27°C (80°F) and keep the jar sealed.",
  sourceUrl: "https://petshopplus.ng/product/k9-multi-benefit-supplement/",
  image: "/images/product-cutout.jpg",

  ctas: {
    primary: "Shop K9 Multi-Benefit Supplement",
    secondary: "Explore the Benefits",
    stickyMobile: "Shop Now",
    buyNow: "Buy Now",
    nav: "Shop Now",
    final: "Shop PrimoScience K9",
    whatsapp: "Chat with us on WhatsApp",
    orderWhatsapp: "Order on WhatsApp",
  },
};

export const supportAreas = [
  "Joint health",
  "Digestion",
  "Skin & coat",
  "Everyday wellness",
];

export const wellnessAreas = [
  "Mobility",
  "Digestion",
  "Skin & coat",
  "Daily nutrition",
  "Overall wellness",
];

export type BenefitArea = {
  id: string;
  title: string;
  ingredients: string[];
  copy: string;
  icon: LucideIcon;
};

export const benefitAreas: BenefitArea[] = [
  {
    id: "joint",
    title: "Joint Support",
    ingredients: ["Glucosamine", "Chondroitin", "MSM"],
    copy: "Formulated with ingredients commonly included in nutritional formulas designed to support joint health and mobility.",
    icon: Bone,
  },
  {
    id: "digestive",
    title: "Digestive Support",
    ingredients: ["Probiotic blend"],
    copy: "Includes a probiotic blend as part of a formula designed to support healthy digestion.",
    icon: Salad,
  },
  {
    id: "skin-coat",
    title: "Skin & Coat Wellness",
    ingredients: ["Wild Alaskan salmon oil", "Antioxidant nutrients"],
    copy: "Provides nutritional ingredients that contribute to overall skin and coat wellness.",
    icon: Droplets,
  },
  {
    id: "daily",
    title: "Daily Nutritional Support",
    ingredients: ["Taurine", "Vitamins", "Folic acid", "Vitamin B12"],
    copy: "A broad nutritional formula designed to complement your dog's daily wellness routine.",
    icon: Apple,
  },
];

export type IngredientEntry = {
  name: string;
  amount: string;
  /** What the ingredient is. */
  what: string;
  /** Why it's in the formula -- nutritional-support language only. */
  why: string;
  icon: LucideIcon;
};

export const ingredientSystem: IngredientEntry[] = [
  {
    name: "Glucosamine HCl",
    amount: "200mg",
    what: "A natural building block of cartilage.",
    why: "Included as the base of the joint-support system, to help maintain joint health and everyday mobility.",
    icon: Bone,
  },
  {
    name: "Chondroitin Sulfate",
    amount: "100mg",
    what: "A structural component found naturally in cartilage.",
    why: "Commonly paired with glucosamine in formulas designed to support joint health.",
    icon: FlaskConical,
  },
  {
    name: "MSM",
    amount: "100mg",
    what: "A source of organic sulfur, a mineral used in connective tissue.",
    why: "Rounds out the three-ingredient joint-support system alongside glucosamine and chondroitin.",
    icon: Sparkles,
  },
  {
    name: "Wild Alaskan Salmon Oil",
    amount: "100mg",
    what: "A natural source of omega-3 fatty acids.",
    why: "Included to provide nutritional support for skin and coat wellness.",
    icon: Fish,
  },
  {
    name: "Taurine",
    amount: "100mg",
    what: "An amino acid found naturally in heart, eye and muscle tissue.",
    why: "Included as part of the formula's everyday nutritional support.",
    icon: HeartPulse,
  },
  {
    name: "Probiotic Blend",
    amount: "1B CFU",
    what: "One billion colony-forming units per chew, from five strains of beneficial bacteria.",
    why: "Included to support a balanced gut and healthy digestion.",
    icon: Salad,
  },
  {
    name: "Vitamins C & E",
    amount: "50mg · 20 IU",
    what: "Two antioxidant vitamins.",
    why: "Included to contribute antioxidant support as part of daily nutrition.",
    icon: Leaf,
  },
  {
    name: "B Vitamins & Folic Acid",
    amount: "B1 · B2 · B6 · B12",
    what: "A group of vitamins involved in normal energy metabolism.",
    why: "Included to complement the nutrition your dog gets from a complete daily diet.",
    icon: Zap,
  },
];

/**
 * Active ingredients per chew, as listed on the product label. `key: true`
 * marks the headline quantities shown large in the "Inside one chew" visual.
 */
export const productFacts: { name: string; amount: string; key?: boolean; short?: string }[] = [
  { name: "Glucosamine HCl from shellfish", amount: "200mg", key: true, short: "Glucosamine" },
  { name: "Chondroitin sulfate (porcine)", amount: "100mg", key: true, short: "Chondroitin" },
  { name: "MSM", amount: "100mg", key: true, short: "MSM" },
  { name: "Wild Alaskan salmon oil", amount: "100mg", key: true, short: "Salmon oil" },
  { name: "Taurine", amount: "100mg", key: true, short: "Taurine" },
  { name: "Vitamin C", amount: "50mg" },
  { name: "Vitamin E", amount: "20 IU" },
  { name: "Vitamin B1", amount: "2mg" },
  { name: "Vitamin B6", amount: "1.35mg" },
  { name: "Vitamin B2", amount: "1.15mg" },
  { name: "Folic acid", amount: "200mcg" },
  { name: "Vitamin B12", amount: "5mcg" },
  { name: "Probiotic blend", amount: "1B CFU", key: true, short: "Probiotic blend" },
];

export const activeCount = productFacts.length;

/** Probiotic strains, as published on the seller's product listing. */
export const probioticStrains = [
  "Enterococcus faecium",
  "Lactobacillus acidophilus",
  "Lactobacillus casei",
  "Lactococcus lactis",
  "Lactobacillus reuteri",
];

/** Inactive ingredients, as published on the seller's product listing. */
export const inactiveIngredients = [
  "Citric acid (as preservative)",
  "Glycerin (palm, RSPO)",
  "Inulin",
  "Palm fruit oil (organic, RSPO)",
  "Peanut butter/banana flavour (non-allergenic)",
  "Sunflower lecithin",
  "Sweet potato flour",
];

export const doesNotContain: { label: string; icon: LucideIcon }[] = [
  { label: "No chemicals or fillers", icon: FlaskConical },
  { label: "No artificial flavours", icon: Leaf },
  { label: "No artificial colours", icon: ShieldCheck },
  { label: "Gluten free", icon: Wheat },
];

export const atAGlance: { label: string; value: string }[] = [
  { label: "Soft chews per jar", value: `${product.chewCount}` },
  { label: "Net weight", value: "227 g" },
  { label: "Flavour", value: "Peanut butter banana" },
  { label: "Key active ingredients", value: `${activeCount}` },
  { label: "Probiotics per chew", value: "1 billion CFU" },
];

export const whoItsFor: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Adult dogs",
    copy: "For owners who want broad, everyday nutritional support alongside a complete diet.",
    icon: Dog,
  },
  {
    title: "Senior dogs",
    copy: "Includes glucosamine, chondroitin and MSM, the nutrients owners of older dogs most often look for.",
    icon: Hourglass,
  },
  {
    title: "Active dogs",
    copy: "Joint-support nutrition for dogs that walk, run, train and play hard.",
    icon: Activity,
  },
  {
    title: "Dogs needing digestive support",
    copy: "A probiotic blend in every chew, to support healthy digestion.",
    icon: Salad,
  },
  {
    title: "Skin & coat care",
    copy: "Wild Alaskan salmon oil and antioxidant vitamins for skin and coat wellness.",
    icon: Droplets,
  },
];

export const whoItsForNote =
  "If your dog is a puppy, pregnant or nursing, has a medical condition, takes medication, or is on a special diet, speak to your veterinarian before adding any supplement.";

export const whyChoose: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: `${activeCount} key active ingredients`,
    copy: "Joint, digestive, skin and coat, and vitamin support in a single chew, instead of several separate products.",
    icon: Sparkles,
  },
  {
    title: `Approx. ${product.chewCount} soft chews per jar`,
    copy: "A peanut butter banana flavoured soft chew, easy to give by hand or with a meal.",
    icon: Package,
  },
  {
    title: "1 billion CFU probiotics",
    copy: "A probiotic blend is built into every chew, not sold as an add-on.",
    icon: Salad,
  },
  {
    title: "Every amount on the label",
    copy: "Each active ingredient is listed with its quantity per chew, so you know exactly what you're giving.",
    icon: ClipboardList,
  },
  {
    title: "Nothing artificial added",
    copy: "No chemicals or fillers, no artificial flavours, no artificial colours, and gluten free.",
    icon: ShieldCheck,
  },
  {
    title: "Sold in Nigeria by Petshop Plus",
    copy: "In stock locally, with outlets across Lagos you can call, message or walk into.",
    icon: PackageCheck,
  },
];

/**
 * Official daily serving by dog weight.
 *
 * LEFT EMPTY ON PURPOSE: the manufacturer's directions panel isn't published
 * on the seller's listing, and dosage must never be guessed. Copy the rows
 * exactly as printed on the jar, e.g.
 *   { weight: "Up to 10 kg", serving: "1 chew daily" }
 * and the weight table renders automatically in the "How to Use" section.
 */
export const dosingRows: { weight: string; serving: string }[] = [];

/** How long one jar lasts at a given number of chews per day. */
export const jarDuration = [1, 2, 3].map((chewsPerDay) => {
  const days = Math.floor(product.chewCount / chewsPerDay);
  return {
    chewsPerDay,
    days,
    costPerDay: Math.round(product.price / days),
  };
});

export const usageSteps: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Give the serving for your dog's weight",
    copy: "Follow the directions panel on the jar. Not sure which serving applies? Message us your dog's weight and we'll check for you.",
    icon: PawPrint,
  },
  {
    title: "Make it a daily routine",
    copy: "Offer the soft chew by hand like a treat or alongside a meal, at the same time each day.",
    icon: Sparkles,
  },
  {
    title: "Store it properly",
    copy: product.storage,
    icon: PackageCheck,
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  /** e.g. "March 2026" -- shown on the card when present. */
  date?: string;
  /** e.g. "Labrador, 6 yrs" -- shown on the card when present. */
  dog?: string;
  /** Path under /public for a customer or dog photo. */
  photo?: string;
};

// Genuine, verified customer reviews only. The earlier placeholder set was
// removed after the 2026 client review -- while this is empty the section
// shows a "Reviews coming soon" state. Don't add reviews that promise a
// specific health outcome.
export const testimonials: Testimonial[] = [];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is PrimoScience K9 Multi-Benefit Supplement?",
    answer: `It's a soft chew supplement for dogs with ${activeCount} key active ingredients, formulated to provide nutritional support for joint health, digestion, skin and coat, and everyday wellness.`,
  },
  {
    question: "How many chews should I give my dog?",
    answer:
      "The daily serving depends on your dog's weight. Follow the directions panel on the jar, and if you're unsure which serving applies, message us on WhatsApp with your dog's weight before you start.",
  },
  {
    question: "How long will one jar last?",
    answer: `A jar contains approximately ${product.chewCount} soft chews. At 1 chew a day that's about 60 days, at 2 a day about 30 days, and at 3 a day about 20 days, depending on the serving for your dog's weight.`,
  },
  {
    question: "Is it suitable for puppies?",
    answer:
      "Puppies have different nutritional needs while they're growing. Check the directions on the jar and confirm with your veterinarian before giving this supplement to a puppy.",
  },
  {
    question: "Is it suitable for senior dogs?",
    answer:
      "The formula includes glucosamine, chondroitin and MSM, which are commonly chosen for older dogs. If your senior dog has a health condition or takes medication, check with your veterinarian first.",
  },
  {
    question: "Can I give it with my dog's regular food?",
    answer:
      "Yes. It's a supplement that complements a complete and balanced diet rather than replacing it. The soft chew can be given by hand like a treat or alongside a meal.",
  },
  {
    question: "Can I use it with other supplements?",
    answer:
      "Check the labels for overlapping ingredients first, such as glucosamine or the same vitamins, and ask your veterinarian before combining supplements.",
  },
  {
    question: "What flavour is it?",
    answer: "Peanut butter banana. The soft chews contain no artificial flavours or colours.",
  },
  {
    question: "Does it contain common allergens?",
    answer: `The glucosamine is sourced from shellfish, the chondroitin is porcine (pork-derived), and the chews are peanut butter banana flavoured. The product is gluten free. Inactive ingredients are: ${inactiveIngredients.join(", ").toLowerCase()}. If your dog has a known allergy or food sensitivity, check with your veterinarian before use.`,
  },
  {
    question: "What ingredients are included?",
    answer:
      "Per 3.5 g chew: glucosamine HCl 200mg, chondroitin sulfate 100mg, MSM 100mg, wild Alaskan salmon oil 100mg, taurine 100mg, a 1 billion CFU probiotic blend, plus vitamins C, E, B1, B2, B6, B12 and folic acid.",
  },
  {
    question: "How should it be stored?",
    answer: product.storage,
  },
  {
    question: "Who makes it?",
    answer: `PrimoScience is a brand of ${product.manufacturer} In Nigeria it is sold and fulfilled by Petshop Plus.`,
  },
  {
    question: "Is it suitable during pregnancy or lactation?",
    answer:
      "Speak to your veterinarian before giving any supplement to a pregnant or nursing dog.",
  },
  {
    question: "How do I order, and do you deliver?",
    answer:
      "Choose your quantity in the order section and tap \"Buy Now\" to add it to your Petshop Plus cart, or tap \"Order on WhatsApp\" to send us your order by chat. Petshop Plus offers home delivery within Lagos and ships to other parts of Nigeria through transport partners. Delivery costs are shown at checkout.",
  },
];

export const faqNote =
  "For veterinary or medical questions about your dog's specific health needs, please consult a qualified veterinarian.";
