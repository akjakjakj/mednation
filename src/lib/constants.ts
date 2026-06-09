export const BRAND = {
  name: "MEDNATIONS",
  legalName: "Mednations Remedies Private Limited",
  tagline:
    "Safe, effective, and globally compliant medicines that enhance patient care and strengthen healthcare outcomes.",
  headline: "High-Quality Therapeutic Solutions",
  phone: "+91 907 267 6763",
  phoneSecondary: "+91 999 556 76 71",
  email: "office@mednationspharma.com",
  website: "www.mednationspharma.com",
  websiteUrl: "https://www.mednationspharma.com",
  address:
    "Door No 9/325/43, First Floor, Puthussery Galeria, Thrissur, Kerala, India – 680009",
  locationLabel: "Thrissur, Kerala",
  locationArea: "Puthussery Galeria",
  mapsUrl:
    "https://www.google.com/maps/dir//MEDNATIONS+REMEDIES+Pvt+Ltd,+Pudussery,+Galleria+Arcade,+Kinar+stop,+Viyyur,+Pandikkavu,+Cheroor,+Thrissur,+Kerala+680008/@10.5113876,76.2232504,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7efa3f6caae21:0xed4b2c4b8efc84ef!2m2!1d76.2267812!2d10.5477074?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  gstin: "32AAQCM4381F1ZD",
  whatsapp: "919072676763",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Partners", href: "#partners" },
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
    label: "Countries Covered",
    icon: "cities",
    description: "Strategic coverage across countries",
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
    strength: "",
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
    strength: "",
    strengthUnit: "Tablets",
    composition: "Astaxanthin, Vitamins & Essential Minerals",
    dosageForm: "Tablets",
    indication:
      "Provides antioxidant support and daily nutritional coverage. Supports immune health and overall vitality.",
    storage: "Store below 25°C in original packaging. Keep out of reach of children.",
  },
] as const;

export type Product = {
  id: number;
  name: string;
  brandName: string;
  description: string;
  category: string;
  gradient: string;
  image?: string;
  dosage: string;
  sku: string;
  icon: string;
  strength: string;
  strengthUnit: string;
  composition: string;
  dosageForm: string;
  indication: string;
  storage: string;
};

export const CATALOGUE_PRODUCTS: Product[] = [
  {
    id: 5,
    name: "Pentixol",
    brandName: "Pentixol",
    description: "Flupentixol 0.5 mg + Melitracen 10 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "0.5 mg + 10 mg",
    sku: "MN-PTX-10",
    icon: "tablet",
    strength: "",
    strengthUnit: "",
    composition: "Flupentixol 0.5 mg + Melitracen 10 mg",
    dosageForm: "Tablets",
    indication: "Management of depressive and anxiety disorders.",
    storage: "Store below 30°C in a dry place. Protect from light.",
  },
  {
    id: 6,
    name: "Rizcure 1 MD",
    brandName: "Rizcure 1 MD",
    description: "Risperidone 1 mg Mouth Dissolving Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "1 mg",
    sku: "MN-RIZ-1MD",
    icon: "tablet",
    strength: "1",
    strengthUnit: "mg",
    composition: "Risperidone 1 mg",
    dosageForm: "Mouth Dissolving Tablets",
    indication: "Treatment of schizophrenia and bipolar mania.",
    storage: "Store in a cool, dry place below 25°C.",
  },
  {
    id: 7,
    name: "Rizcure 2 MD",
    brandName: "Rizcure 2 MD",
    description: "Risperidone 2 mg Mouth Dissolving Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "2 mg",
    sku: "MN-RIZ-2MD",
    icon: "tablet",
    strength: "2",
    strengthUnit: "mg",
    composition: "Risperidone 2 mg",
    dosageForm: "Mouth Dissolving Tablets",
    indication: "Treatment of schizophrenia and acute manic episodes.",
    storage: "Store in a cool, dry place below 25°C.",
  },
  {
    id: 8,
    name: "Restopin 25",
    brandName: "Restopin 25",
    description: "Quetiapine 25 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "25 mg",
    sku: "MN-RST-25",
    icon: "tablet",
    strength: "25",
    strengthUnit: "mg",
    composition: "Quetiapine 25 mg",
    dosageForm: "Tablets",
    indication: "Management of schizophrenia, bipolar disorder, and major depression.",
    storage: "Store below 30°C. Protect from moisture.",
  },
  {
    id: 9,
    name: "Cutapin 100",
    brandName: "Cutapin 100",
    description: "Quetiapine 100 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "100 mg",
    sku: "MN-CUT-100",
    icon: "tablet",
    strength: "100",
    strengthUnit: "mg",
    composition: "Quetiapine 100 mg",
    dosageForm: "Tablets",
    indication: "Management of schizophrenia and bipolar disorder.",
    storage: "Store below 30°C. Protect from moisture.",
  },
  {
    id: 10,
    name: "Floviton 20",
    brandName: "Floviton 20",
    description: "Fluoxetine 20 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "20 mg",
    sku: "MN-FLO-20",
    icon: "tablet",
    strength: "20",
    strengthUnit: "mg",
    composition: "Fluoxetine 20 mg",
    dosageForm: "Tablets",
    indication: "Treatment of major depressive disorder, OCD, and panic disorder.",
    storage: "Store below 30°C in a dry place.",
  },
  {
    id: 11,
    name: "Sertom 25",
    brandName: "Sertom 25",
    description: "Sertraline 25 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "25 mg",
    sku: "MN-SRT-25",
    icon: "tablet",
    strength: "25",
    strengthUnit: "mg",
    composition: "Sertraline 25 mg",
    dosageForm: "Tablets",
    indication: "Treatment of depression, anxiety, and obsessive-compulsive disorder.",
    storage: "Store below 30°C. Protect from light.",
  },
  {
    id: 12,
    name: "Sertom 50",
    brandName: "Sertom 50",
    description: "Sertraline 50 mg Tablets",
    category: "Psychiatry",
    gradient: "from-violet-500/20 to-primary/20",
    dosage: "50 mg",
    sku: "MN-SRT-50",
    icon: "tablet",
    strength: "50",
    strengthUnit: "mg",
    composition: "Sertraline 50 mg",
    dosageForm: "Tablets",
    indication: "Treatment of depression, panic disorder, and PTSD.",
    storage: "Store below 30°C. Protect from light.",
  },
  {
    id: 13,
    name: "Palipearl",
    brandName: "Palipearl",
    description: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc 22.5 mg Tablets",
    category: "Hematology",
    gradient: "from-pink-500/20 to-primary/20",
    dosage: "100 mg + 1.5 mg + 22.5 mg",
    sku: "MN-PAL-100",
    icon: "tablet",
    strength: "",
    strengthUnit: "",
    composition: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc 22.5 mg",
    dosageForm: "Tablets",
    indication: "Iron deficiency anemia and nutritional supplementation during pregnancy.",
    storage: "Store below 30°C in a dry place.",
  },
  {
    id: 14,
    name: "Montinox L",
    brandName: "Montinox L",
    description: "Montelukast 10 mg + Levocetirizine DiHCl 5 mg Tablets",
    category: "Respiratory",
    gradient: "from-sky-500/20 to-primary/20",
    dosage: "10 mg + 5 mg",
    sku: "MN-MNT-L",
    icon: "tablet",
    strength: "",
    strengthUnit: "",
    composition: "Montelukast 10 mg + Levocetirizine DiHCl 5 mg",
    dosageForm: "Tablets",
    indication: "Allergic rhinitis, asthma, and chronic urticaria management.",
    storage: "Store below 30°C. Protect from light and moisture.",
  },
  {
    id: 15,
    name: "Copetab 20",
    brandName: "Copetab 20",
    description: "Atorvastatin 20 mg Tablets",
    category: "Cardiology",
    gradient: "from-rose-500/20 to-primary/20",
    dosage: "20 mg",
    sku: "MN-COP-20",
    icon: "tablet",
    strength: "20",
    strengthUnit: "mg",
    composition: "Atorvastatin 20 mg",
    dosageForm: "Tablets",
    indication: "Hyperlipidemia and cardiovascular risk reduction.",
    storage: "Store below 30°C in original packaging.",
  },
  {
    id: 16,
    name: "Hemafine Gold",
    brandName: "Hemafine Gold",
    description:
      "Rosuvastatin Calcium 10 mg + Clopidogrel Bisulphate 75 mg + Aspirin 75 mg Capsules",
    category: "Cardiology",
    gradient: "from-rose-500/20 to-primary/20",
    dosage: "10 mg + 75 mg + 75 mg",
    sku: "MN-HEM-GOLD",
    icon: "capsule",
    strength: "",
    strengthUnit: "",
    composition: "Rosuvastatin Calcium 10 mg + Clopidogrel Bisulphate 75 mg + Aspirin 75 mg",
    dosageForm: "Capsules",
    indication: "Cardiovascular protection in patients at risk of atherothrombotic events.",
    storage: "Store below 30°C in a dry place. Keep out of reach of children.",
  },
];

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

export const BUSINESS_PARTNERS = {
  headline: "Statewide Distribution Network",
  description:
    "Mednations collaborates with authorised distributors, hospitals, and retail pharmacies across Kerala — building a dependable supply chain that ensures product availability, ethical distribution, and consistent patient access to quality medicines.",
  stats: [
    {
      value: 14,
      suffix: "",
      label: "District Distributors",
      icon: "distributor",
      description:
        "Complete coverage across all 14 districts of Kerala through certified, territory-aligned distribution partners.",
    },
    {
      value: 750,
      suffix: "+",
      label: "Hospital Partners",
      icon: "hospital",
      description:
        "Supplying multi-specialty hospitals, nursing homes, and clinical institutions with trusted therapeutic solutions.",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Pharmacy Partners",
      icon: "pharmacy",
      description:
        "A growing retail pharmacy network enabling reliable last-mile availability for patients and prescribers statewide.",
    },
  ],
  highlights: [
    {
      title: "End-to-End Supply Chain",
      description:
        "From authorised distributors to hospital and pharmacy counters — seamless logistics with full regulatory compliance.",
      icon: "supply",
    },
    {
      title: "Statewide Reach",
      description:
        "Pan-Kerala presence ensuring medicines reach urban centres and tier-2 markets without compromise on quality.",
      icon: "reach",
    },
    {
      title: "Partnership-Led Growth",
      description:
        "Long-term alliances built on transparency, timely fulfilment, and shared commitment to patient outcomes.",
      icon: "growth",
    },
  ],
} as const;

export const STATS = [
  { value: 135, suffix: "+", label: "Doctors Engaged" },
  { value: 12, suffix: "", label: "Countries Covered" },
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
    { label: "Business Partners", href: "#partners" },
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
