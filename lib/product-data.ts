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
  type LucideIcon,
} from "lucide-react";

export const product = {
  name: "PrimoScience K9 Multi-Benefit Supplement",
  brand: "PrimoScience",
  category: "Dog vitamins and supplements",
  tagline: "Complete Daily Wellness Support for Your Dog.",
  description:
    "PrimoScience K9 Multi-Benefit Supplement combines nutritional support for joints, digestion, skin and coat, and everyday wellness in one convenient daily soft chew.",
  price: 25500,
  currency: "NGN",
  availability: "InStock" as const,
  servingSize: "3.5g soft chew",
  packageSize: "Approx. 60 soft chews · 8 oz (227g)",
  flavor: "Peanut butter banana flavor",
  sourceUrl: "https://petshopplus.ng/product/k9-multi-benefit-supplement/",
  image: "/images/product-cutout.jpg",

  ctas: {
    primary: "Shop K9 Multi-Benefit Supplement",
    secondary: "Explore the Benefits",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    nav: "Shop Now",
    final: "Shop PrimoScience K9",
  },
};

export const trustStrip: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Multi-Benefit Formula",
    copy: "Multiple nutritional support ingredients in one product.",
    icon: Sparkles,
  },
  {
    title: "Joint Support",
    copy: "Includes glucosamine, chondroitin and MSM.",
    icon: Bone,
  },
  {
    title: "Digestive Support",
    copy: "Includes a probiotic blend.",
    icon: Salad,
  },
  {
    title: "No Artificial Colours",
    copy: "Formulated without artificial colours.",
    icon: ShieldCheck,
  },
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
  copy: string;
  icon: LucideIcon;
};

export const ingredientSystem: IngredientEntry[] = [
  {
    name: "Glucosamine",
    copy: "Included as part of the joint-support formula.",
    icon: Bone,
  },
  {
    name: "Chondroitin",
    copy: "Included as part of the joint-support formula.",
    icon: FlaskConical,
  },
  {
    name: "MSM",
    copy: "Included in the multi-ingredient joint-support system.",
    icon: Sparkles,
  },
  {
    name: "Wild Alaskan Salmon Oil",
    copy: "Included as part of the nutritional formula.",
    icon: Fish,
  },
  {
    name: "Taurine",
    copy: "An important nutrient included in the product formula.",
    icon: HeartPulse,
  },
  {
    name: "Probiotic Blend",
    copy: "Included to provide digestive-support nutrition.",
    icon: Salad,
  },
  {
    name: "Vitamins",
    copy: "Includes multiple vitamins and nutrients, including Vitamin C, E, B1, B6, B2, B12 and folic acid.",
    icon: Leaf,
  },
];

export const productFacts: { name: string; amount: string }[] = [
  { name: "Glucosamine HCl from shellfish", amount: "200mg" },
  { name: "Chondroitin sulfate", amount: "100mg" },
  { name: "MSM", amount: "100mg" },
  { name: "Wild Alaskan salmon oil", amount: "100mg" },
  { name: "Taurine", amount: "100mg" },
  { name: "Vitamin C", amount: "50mg" },
  { name: "Vitamin E", amount: "20 IU" },
  { name: "Vitamin B1", amount: "2mg" },
  { name: "Vitamin B6", amount: "1.35mg" },
  { name: "Vitamin B2", amount: "1.15mg" },
  { name: "Folic acid", amount: "200mcg" },
  { name: "Vitamin B12", amount: "5mcg" },
  { name: "Probiotic blend", amount: "1B CFU" },
];

export const doesNotContain: { label: string; icon: LucideIcon }[] = [
  { label: "No chemicals or fillers", icon: FlaskConical },
  { label: "No artificial flavors", icon: Leaf },
  { label: "No artificial colours", icon: ShieldCheck },
  { label: "Gluten free", icon: Wheat },
];

export const usageSteps: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Follow the serving instructions",
    copy: "Follow the dosage instructions provided on the product packaging.",
    icon: PawPrint,
  },
  {
    title: "Make it a daily routine",
    copy: "Make it part of your dog's regular routine for consistent daily support.",
    icon: Sparkles,
  },
  {
    title: "Store it properly",
    copy: "Store according to the instructions provided on the product packaging.",
    icon: PackageCheck,
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  isPlaceholder?: boolean;
};

// Placeholder review content, added at the owner's request to preview the
// review-card layout before real customer feedback is collected. Every
// entry is flagged isPlaceholder: true -- replace with verified reviews
// (real names, quotes, ratings) as they come in, and never invent reviews
// outside of this clearly-marked placeholder set.
export const testimonials: Testimonial[] = [
  {
    name: "Amaka O.",
    location: "Lagos",
    quote:
      "Our Labrador used to slow down on longer walks. A few weeks into her daily chew and she's back to keeping up with the kids in the park.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Tunde A.",
    location: "Abuja",
    quote:
      "Easiest supplement we've tried — our German Shepherd actually looks forward to it. Coat has looked noticeably glossier too.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Ifeoma N.",
    location: "Port Harcourt",
    quote:
      "Appreciated that everything on the label was explained clearly. No guessing what we were actually giving our dog.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Chidi E.",
    location: "Ibadan",
    quote:
      "Our senior Rottweiler has always been picky with chews — this one disappears in seconds. Simple to add to his morning routine.",
    rating: 4,
    isPlaceholder: true,
  },
  {
    name: "Bisola K.",
    location: "Enugu",
    quote:
      "Digestion has been a lot more settled since we started, and it's nice having joints, coat, and everyday nutrition covered in one jar.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Emeka U.",
    location: "Kano",
    quote:
      "Ordered for our two dogs after a friend recommended it. Delivery was quick and both dogs take to the flavor immediately.",
    rating: 5,
    isPlaceholder: true,
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What is PrimoScience K9 Multi-Benefit Supplement?",
    answer:
      "It's a scientifically formulated soft chew for dogs that brings together nutritional support for joints, digestion, skin and coat, and everyday wellness in one daily supplement.",
  },
  {
    question: "What does the K9 Multi-Benefit Supplement support?",
    answer:
      "It's formulated to support joint health and mobility, digestive health, skin and coat wellness, and general daily nutritional wellness.",
  },
  {
    question: "What ingredients are included?",
    answer:
      "Glucosamine HCl, chondroitin sulfate, MSM, wild Alaskan salmon oil, taurine, a probiotic blend, and vitamins including C, E, B1, B6, B2, B12 and folic acid.",
  },
  {
    question: "Does it contain glucosamine?",
    answer: "Yes. Glucosamine HCl from shellfish is included as part of the joint-support formula.",
  },
  {
    question: "Does it contain chondroitin and MSM?",
    answer: "Yes, both chondroitin sulfate and MSM are included in the joint-support system.",
  },
  {
    question: "Does it contain probiotics?",
    answer: "Yes, a probiotic blend is included to provide digestive-support nutrition.",
  },
  {
    question: "Does it contain salmon oil?",
    answer: "Yes, wild Alaskan salmon oil is included as part of the nutritional formula.",
  },
  {
    question: "How should I use the product?",
    answer: "Follow the dosage instructions provided on the product packaging.",
  },
  {
    question: "How should I store the product?",
    answer:
      "Store according to the instructions provided on the product packaging, in a cool, dry place out of reach of pets.",
  },
  {
    question: "Does it contain artificial colours?",
    answer: "No, the product is formulated without artificial colours.",
  },
  {
    question: "Does it contain artificial flavours?",
    answer: "No, the product is formulated without artificial flavors.",
  },
  {
    question: "Is it gluten free?",
    answer: "Yes, the product is gluten free.",
  },
  {
    question: "How do I order?",
    answer: "Tap any \"Shop Now,\" \"Add to Cart,\" or \"Buy Now\" button to order online.",
  },
  {
    question: "Do you deliver?",
    answer: "Yes, delivery is available. Delivery details are confirmed at checkout.",
  },
];

export const faqNote =
  "For veterinary or medical questions about your dog's specific health needs, please consult a qualified veterinarian.";
