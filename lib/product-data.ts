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
  tagline: "One soft chew. Broad-spectrum areas of support.",
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
  /** What the review is about, e.g. "Skin & coat" -- the card's heading. */
  title: string;
  quote: string;
  rating: number;
  /** Reviewer details -- shown on the card only when supplied. */
  name?: string;
  location?: string;
  /** e.g. "March 2026" */
  date?: string;
  /** e.g. "Labrador, 6 yrs" */
  dog?: string;
  /** Path under /public for a customer or dog photo. */
  photo?: string;
};

// Reviews supplied by the client in the October 2026 review doc. They came
// without reviewer names, so none are shown -- never invent a name, location
// or photo for one. If this array is emptied the section falls back to a
// "Reviews coming soon" state.
export const testimonials: Testimonial[] = [
  {
    title: "Overall wellness",
    rating: 5,
    quote:
      "I love having several areas of nutritional support in one daily chew. It’s convenient, easy to add to my dog’s routine, and he genuinely looks forward to getting it every day.",
  },
  {
    title: "Palatability",
    rating: 5,
    quote:
      "My dog can be very picky with supplements, but he takes PrimoScience K9 like a treat. No hiding tablets in food or trying to convince him to eat it. That alone makes our daily routine much easier.",
  },
  {
    title: "Mobility",
    rating: 5,
    quote:
      "I started adding PrimoScience K9 to my dog’s daily routine because I wanted additional nutritional support for his mobility and overall wellness. I really like that one soft chew provides multiple benefits rather than having to give several different supplements.",
  },
  {
    title: "Skin & coat",
    rating: 5,
    quote:
      "PrimoScience K9 has become part of our everyday routine. I originally chose it for the skin and coat support, but I like that it also provides nutritional support for other areas of my dog’s health.",
  },
  {
    title: "Convenience",
    rating: 5,
    quote:
      "What I like most is the convenience. Instead of buying several different supplements, PrimoScience K9 combines multiple areas of support into one soft chew. Simple for me and easy for my dog.",
  },
  {
    title: "Daily routine",
    rating: 5,
    quote:
      "We’ve made PrimoScience K9 part of our dog’s daily wellness routine. He loves the soft chew, and I like knowing I’m providing additional nutritional support for mobility, digestion, skin & coat, and general wellness.",
  },
  {
    title: "Taste",
    rating: 5,
    quote:
      "Excellent daily supplement. My dog loves the taste, and I love the convenience of getting multiple areas of nutritional support from one soft chew. Definitely staying in our daily routine.",
  },
  {
    title: "Treat time",
    rating: 5,
    quote:
      "My dog thinks it’s a treat—I know it’s his daily supplement! 😂 PrimoScience K9 makes it so easy to add extra nutritional support to his everyday routine.",
  },
];

// Questions and answers supplied verbatim by the client (October 2026 review
// doc). Blank lines inside an answer render as paragraph breaks.
export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is PrimoScience K9 Multi-Benefit Supplement?",
    answer:
      "PrimoScience™ K9 Multi-Benefit Supplement is an all-in-one daily soft chew designed to provide comprehensive nutritional support for your dog from nose to tail. Its scientifically formulated multi-benefit approach supports hips & joints and articulation, skin & coat, eye and heart health, muscle support, digestion with probiotics, appetite, vitality, antioxidant support, and immune health, with folic acid as part of its nutritional formulation.\n\nInstead of giving your dog several different supplements every day, PrimoScience™ K9 brings multiple areas of support together in one convenient soft chew - making it easier to support your dog’s everyday health and wellness.",
  },
  {
    question: "How many chews should I give my dog?",
    answer:
      "The recommended daily serving is based on your dog’s weight. Please follow the feeding directions on the product label. If you’re unsure which serving is right for your dog, simply send us a WhatsApp message with your dog’s weight before starting. You’ll find our WhatsApp number in the “Contact Us” section at the bottom right of this page.",
  },
  {
    question: "How long will one jar last?",
    answer:
      "Each jar contains approximately 60 soft chews. How long it lasts depends on your dog’s recommended daily serving based on their weight. At 1 chew per day, a jar lasts about 60 days; at 2 chews per day, about 30 days; and at 3 chews per day, about 20 days.",
  },
  {
    question: "Is PrimoScience™ K9 suitable for puppies?",
    answer:
      "Yes. PrimoScience™ K9 Multi-Benefit Supplement is suitable for puppies. It provides multi-benefit nutritional support to complement your puppy’s daily diet as they grow and develop. Simply follow the recommended daily serving based on your puppy’s weight.",
  },
  {
    question: "Is PrimoScience™ K9 suitable for senior dogs?",
    answer:
      "Yes. PrimoScience™ K9 is an excellent choice for senior dogs. Its multi-benefit formula includes glucosamine, chondroitin, and MSM to provide nutritional support for joint health and mobility, while its other nutrients help support your senior dog’s muscles, digestion, skin & coat, immune health, vitality, and overall wellness as they age.",
  },
  {
    question: "Can I give PrimoScience™ K9 with my dog’s regular food?",
    answer:
      "Yes. PrimoScience™ K9 is designed to complement your dog’s complete and balanced diet, not replace it. The soft chew can be given directly by hand as a tasty daily treat or served alongside your dog’s regular meal, whichever works best for your routine.",
  },
  {
    question: "Can I use PrimoScience™ K9 with other supplements?",
    answer:
      "Possibly, but check for overlapping ingredients first. Other supplements may contain some of the same ingredients found in PrimoScience™ K9, such as glucosamine, vitamins, or other nutrients. To avoid unnecessary duplication or excessive intake, review the ingredient labels carefully and consult your veterinarian before combining supplements, especially if your dog is already taking other supplements or medications.",
  },
  {
    question: "What flavour is PrimoScience™ K9?",
    answer:
      "PrimoScience™ K9 soft chews have a delicious peanut butter and banana flavour designed to make daily supplementation something your dog can look forward to. No artificial flavours or colours.",
  },
  {
    question: "Does PrimoScience™ K9 contain common allergens?",
    answer:
      "PrimoScience™ K9 is gluten-free. However, it contains shellfish-derived glucosamine and porcine (pork-derived) chondroitin. The soft chews have a peanut butter & banana flavour, which is listed as non-allergenic in the formulation.\n\nOther inactive ingredients include citric acid (preservative), RSPO palm-derived glycerin, inulin, organic RSPO palm fruit oil, sunflower lecithin, and sweet potato flour.\n\nIf your dog has a known food allergy or sensitivity, we recommend reviewing the ingredients carefully and consulting your veterinarian before use.",
  },
  {
    question: "What ingredients are included?",
    answer:
      "Each 3.5 g PrimoScience™ K9 soft chew contains a carefully selected combination of functional ingredients, including 200 mg glucosamine HCl, 100 mg chondroitin sulfate, 100 mg MSM, 100 mg wild Alaskan salmon oil, and 100 mg taurine.\n\nIt also provides a 1 billion CFU probiotic blend, together with essential vitamins including vitamins C, E, B1, B2, B6, B12, and folic acid—bringing multiple areas of nutritional support together in one convenient daily soft chew.",
  },
  {
    question: "How should PrimoScience™ K9 be stored?",
    answer:
      "Store PrimoScience™ K9 in a cool, dry place below 27°C (80°F). Keep the jar tightly sealed when not in use to help maintain the quality and freshness of the soft chews.",
  },
  {
    question: "Who makes PrimoScience™ K9?",
    answer:
      "PrimoScience™ is a brand of Transcendent Pet Products Inc., Canada. In Nigeria, PrimoScience™ K9 Multi-Benefit Supplement is marketed, sold, and fulfilled by PetShop Plus, making it readily accessible to dog owners across the country.",
  },
  {
    question: "Is PrimoScience™ K9 suitable during pregnancy or lactation?",
    answer:
      "Yes. PrimoScience™ K9 can provide valuable nutritional support during pregnancy and lactation. The formula contains folic acid (vitamin B9), an essential nutrient involved in normal cell division and fetal development. Adequate folate is important during early development, including normal formation of the neural tube.",
  },
  {
    question: "How do I order, and do you deliver?",
    answer:
      "Ordering is quick and easy. Simply select your preferred quantity in the order section and tap “Buy Now” to add PrimoScience™ K9 to your PetShop Plus cart. Prefer to order by chat? Tap “Order on WhatsApp” and send your order directly to our team.\n\nYes, we deliver. PetShop Plus offers home delivery within Lagos and ships to other parts of Nigeria through our transport partners. Applicable delivery charges will be displayed at checkout.",
  },
];

export const faqNote =
  "For veterinary or medical questions about your dog's specific health needs, please consult a qualified veterinarian.";
