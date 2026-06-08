export const BRAND = {
  name: "MEDNATIONS",
  legalName: "Mednations Remedies Pvt Ltd",
  tagline:
    "Safe, effective, and globally compliant medicines that enhance patient care and strengthen healthcare outcomes.",
  headline: "High-Quality Therapeutic Solutions",
  phone: "+91 98765 43210",
  email: "info@mednations.com",
  address: "123 Healthcare Avenue, Medical District, Mumbai, India 400001",
  whatsapp: "919876543210",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const ABOUT_STATS = [
  {
    value: 135,
    suffix: "+",
    label: "Doctors Engaged",
    icon: "doctors",
    description: "Growing engagement and long-term loyalty across specialties",
  },
  {
    value: 12,
    suffix: "",
    label: "Cities Covered",
    icon: "cities",
    description: "Strategic urban cluster coverage across Tier 1 and Tier 2 cities",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: "experience",
    description: "Proven expertise in ethical pharmaceutical marketing and field dynamics",
  },
  {
    value: 78,
    suffix: "%+",
    label: "Repeat Prescriptions",
    icon: "repeat",
    description: "High retention reflecting product reliability and sustained brand loyalty",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "WHO-GMP Manufacturing",
    description:
      "Strategic alliances with certified WHO-GMP manufacturing partners ensuring international quality.",
    icon: "shield",
  },
  {
    title: "Batch-to-Batch Consistency",
    description:
      "Strong quality assurance systems ensuring consistent, high-quality therapeutic solutions.",
    icon: "chain",
  },
  {
    title: "Doctor-Centric Engagement",
    description:
      "Responsible, prescription-driven engagement with healthcare professionals built on long-term trust.",
    icon: "heart",
  },
  {
    title: "Compliance-Led Growth",
    description:
      "Sustainable growth strategy grounded in trust, integrity, and regulatory excellence.",
    icon: "truck",
  },
] as const;

export const PRODUCTS = [
  {
    id: 1,
    name: "Citaminz Tablets",
    brandName: "Citaminz",
    description:
      "Calcium Citrate, Magnesium, Vitamin D3 & Zinc — complete bone and mineral support in one daily tablet.",
    category: "Vitamins",
    gradient: "from-primary/20 to-secondary/30",
    image: "/products/citaminz.jpg",
    dosage: "10 × 10 Tablets",
    sku: "MN-CIT-100",
    icon: "tablet",
    strength: "100",
    strengthUnit: "Tablets",
    composition: "Calcium Citrate, Magnesium, Vitamin D3 & Zinc",
    dosageForm: "Tablets",
    indication:
      "Supports bone strength, muscle function, and mineral balance. Recommended for calcium and vitamin D deficiency.",
    storage: "Store in a cool, dry place below 25°C. Protect from light and moisture.",
  },
  {
    id: 2,
    name: "Penton 40 — Pantoprazole",
    brandName: "Penton 40",
    description:
      "Pantoprazole 40 mg tablets for effective acid reflux and gastric ulcer management.",
    category: "Gastrointestinal",
    gradient: "from-secondary/20 to-accent/30",
    image: "/products/pantoprazole.jpg",
    dosage: "40 mg",
    sku: "MN-PNT-40",
    icon: "capsule",
    strength: "40",
    strengthUnit: "mg",
    composition: "Pantoprazole Sodium Sesquihydrate equivalent to Pantoprazole 40 mg",
    dosageForm: "Enteric-coated Tablets",
    indication:
      "Treatment of gastroesophageal reflux disease (GERD), peptic ulcers, and hyperacidity. Reduces stomach acid production.",
    storage: "Store below 30°C in a dry place. Keep away from direct sunlight.",
  },
  {
    id: 3,
    name: "Meltonix 5 — Melatonin",
    brandName: "Meltonix 5",
    description:
      "Melatonin 5 mg mouth-dissolving tablets for natural sleep support and circadian rhythm balance.",
    category: "Nutraceutical",
    gradient: "from-accent/20 to-primary/20",
    image: "/products/melatonix.jpg",
    dosage: "5 mg",
    sku: "MN-MLT-5",
    icon: "tablet",
    strength: "5",
    strengthUnit: "mg",
    composition: "Melatonin 5 mg",
    dosageForm: "Mouth Dissolving Tablets",
    indication:
      "Aids natural sleep onset, jet lag recovery, and circadian rhythm regulation. Dissolves quickly without water.",
    storage: "Store in a cool, dry place. Keep blister strips sealed until use.",
  },
  {
    id: 4,
    name: "Corvion Tablets",
    brandName: "Corvion",
    description:
      "Astaxanthin with essential vitamins and minerals — antioxidant-rich daily wellness formula.",
    category: "Supplements",
    gradient: "from-primary/15 to-dark-teal/20",
    image: "/products/corvion.jpg",
    dosage: "10 × 10 Tablets",
    sku: "MN-CRV-100",
    icon: "multivitamin",
    strength: "100",
    strengthUnit: "Tablets",
    composition: "Astaxanthin, Vitamins & Essential Minerals",
    dosageForm: "Tablets",
    indication:
      "Provides antioxidant support and daily nutritional coverage. Supports immune health and overall vitality.",
    storage: "Store below 25°C in original packaging. Keep out of reach of children.",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];

export const FEATURES = [
  {
    title: "Globally Certified Manufacturing",
    description:
      "WHO-GMP and USFDA-aligned partnerships ensuring international quality and consistency.",
    icon: "certified",
  },
  {
    title: "Ethical, Prescription-Driven Model",
    description:
      "Doctor-centric, science-based promotion built on long-term trust and clinical relevance.",
    icon: "ethical",
  },
  {
    title: "Proven Clinical Efficacy",
    description:
      "Reliable formulations delivering consistent patient outcomes and strong doctor confidence.",
    icon: "clinical",
  },
  {
    title: "Lean, High-Productivity Sales Force",
    description:
      "Efficient field model enabling strong coverage and scalable growth across urban clusters.",
    icon: "lean",
  },
  {
    title: "78%+ Repeat Prescription Rate",
    description:
      "High retention reflecting product reliability, clinical acceptance, and sustained brand loyalty.",
    icon: "repeat",
  },
  {
    title: "Differentiated Portfolio",
    description:
      "Value-driven, non me-too branded formulations addressing real clinical needs.",
    icon: "portfolio",
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Scientific Product Detailing",
    description: "Evidence-based scientific detailing with clinical data support for specialists.",
  },
  {
    title: "Sample & Trial Distribution",
    description: "Distribution of samples, trial packs, and visual aids to support informed prescribing.",
  },
  {
    title: "Doctor Feedback Loop",
    description: "Continuous feedback loop for product refinement driven by clinical insights.",
  },
  {
    title: "CMEs & Medical Conferences",
    description: "Active participation in CMEs and medical conferences to advance clinical knowledge.",
  },
  {
    title: "Territory Coverage",
    description:
      "Strategic urban cluster coverage by a lean, high-productivity medical representative team.",
  },
] as const;

export const STATS = [
  { value: 135, suffix: "+", label: "Doctors Engaged" },
  { value: 12, suffix: "", label: "Cities Covered" },
  { value: 78, suffix: "%+", label: "Repeat Prescriptions" },
  { value: 10, suffix: "+", label: "Years Experience" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Consultant Diabetologist",
    content:
      "Mednations formulations deliver consistent clinical outcomes. Their WHO-GMP standards and ethical, prescription-driven approach make them a trusted partner in chronic care.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Gynecologist, Private Clinic",
    content:
      "The scientific detailing and evidence-based literature support give me confidence in prescribing. Strong repeat prescription rates reflect genuine product reliability.",
    rating: 5,
  },
  {
    name: "Dr. Anil Mehta",
    role: "Cardiologist, Multi-Specialty Hospital",
    content:
      "A differentiated portfolio with proven clinical efficacy. Mednations bridges the quality gap with globally benchmarked manufacturing and doctor-centric engagement.",
    rating: 5,
  },
] as const;

export const FOOTER_LINKS = {
  quick: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Diabetology", href: "#products" },
    { label: "Gynecology", href: "#products" },
    { label: "Neurology", href: "#products" },
    { label: "General Medicine", href: "#products" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const;
