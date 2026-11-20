export type BrandKey = "ff" | "vivafit" | "cardio" | "sakti" | "qualetee" | "kinesis";

export type Brand = {
  key: BrandKey;
  title: string;
  shortName: string;
  desc: string;
  details: string;
  badge: string;
  capex: string;
  color: string;
  logo: string;
  hoverBorder: string;
  badgeClass: string;
  checkClass: string;
  buttonClass: string;
  features: string[];
  space: string;
  timeline: string;
  code: string;
};

export const brands: Record<BrandKey, Brand> = {
  ff: {
    key: "ff",
    title: "FF (Fitness Factory)",
    shortName: "Fitness Factory",
    desc: "Flagship Commercial Clubs",
    details:
      "Fitness Factory represents YORA's high-capacity commercial gym chain featuring heavy iron zones, multi-station cables, plate-loaded machinery, and dedicated group fitness arenas.",
    badge: "Commercial Gym",
    capex: "$250,000 - $400,000",
    color: "#FF1E27",
    logo: "/assets/fitness_factory_logo_tight.png",
    hoverBorder: "hover:border-crimson",
    badgeClass: "bg-crimson/10 border-crimson/30 text-crimson",
    checkClass: "text-crimson",
    buttonClass: "bg-crimson hover:bg-crimson-dark text-white",
    features: ["5,000 – 10,000 Sq. Ft. Outlets", "Integrated Functional Arena", "Multi-Platform Heavy Lifting"],
    space: "5,000 – 10,000 Sq.Ft.",
    timeline: "90 – 120 Days",
    code: "FF",
  },
  vivafit: {
    key: "vivafit",
    title: "VivaFit India",
    shortName: "VivaFit India",
    desc: "Boutique Women-Only Gyms",
    details:
      "VIVAFIT brings international standards to women-only fitness with circuit training, Pilates, and personalized wellness counseling.",
    badge: "Women Only",
    capex: "$150,000 - $220,000",
    color: "#84CC16",
    logo: "/assets/vivafit_logo.png",
    hoverBorder: "hover:border-lime-400",
    badgeClass: "bg-lime-500/10 border-lime-500/30 text-lime-400",
    checkClass: "text-rose-400",
    buttonClass: "bg-rose-500 hover:bg-rose-600 text-obsidian-950",
    features: ["2,500 – 4,500 Sq. Ft. Outlets", "Hydraulic Express Circuits", "100% Female Staff & Trainers"],
    space: "2,500 – 4,500 Sq.Ft.",
    timeline: "60 – 90 Days",
    code: "VF",
  },
  cardio: {
    key: "cardio",
    title: "Cardio Pulse Lab",
    shortName: "Cardio Pulse Lab",
    desc: "High-Intensity Biometric Conditioning",
    details:
      "Heart-rate monitored HIIT and endurance cardio zones utilizing curved treadmills, air bikes, battle ropes, and live screen telemetry.",
    badge: "Specialized Studio",
    capex: "$100,000 - $180,000",
    color: "#06B6D4",
    logo: "/assets/cardio_tight.png",
    hoverBorder: "hover:border-purple-400",
    badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    checkClass: "text-amber-400",
    buttonClass: "bg-amber-500 hover:bg-amber-600 text-obsidian-950",
    features: ["2,000 – 3,500 Sq. Ft. Outlets", "Live Heart-Rate Screen Monitors", "High Caloric Afterburn HIIT"],
    space: "2,000 – 3,500 Sq.Ft.",
    timeline: "45 – 75 Days",
    code: "CP",
  },
  sakti: {
    key: "sakti",
    title: "Sakti Female Conditioning",
    shortName: "Sakti Female Strength",
    desc: "Empowerment & Strength Studio",
    details:
      "Tailored strength-building and functional fitness for women across all life stages, focusing on bone density, core strength, and hormone balancing exercise science.",
    badge: "Female Focus",
    capex: "$120,000 - $200,000",
    color: "#F43F5E",
    logo: "/assets/Sakti LOGO.png",
    hoverBorder: "hover:border-rose-400",
    badgeClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    checkClass: "text-emerald-400",
    buttonClass: "bg-emerald-500 hover:bg-emerald-600 text-obsidian-950",
    features: ["2,200 – 4,000 Sq. Ft. Outlets", "Hormone-Balancing Protocols", "Bone Density Load Training"],
    space: "2,200 – 4,000 Sq.Ft.",
    timeline: "60 – 90 Days",
    code: "SK",
  },
  qualetee: {
    key: "qualetee",
    title: "Qualetee Rehab & Physio",
    shortName: "Qualetee Rehab & Physio",
    desc: "Recovery & Biomechanical Clinic",
    details:
      "Integrated sports medicine, physiotherapy, recovery, massage therapy, and posture correction programs.",
    badge: "Wellness Clinic",
    capex: "$90,000 - $150,000",
    color: "#F97316",
    logo: "/assets/qualetee_tight.png",
    hoverBorder: "hover:border-orange-400",
    badgeClass: "bg-violet-500/10 border-violet-500/30 text-violet-400",
    checkClass: "text-violet-400",
    buttonClass: "bg-violet-500 hover:bg-violet-600 text-white",
    features: ["1,500 – 3,000 Sq. Ft. Clinics", "Licensed Physiotherapy Doctors", "Cryotherapy & Soft Tissue Pods"],
    space: "1,500 – 3,000 Sq.Ft.",
    timeline: "45 – 60 Days",
    code: "QL",
  },
  kinesis: {
    key: "kinesis",
    title: "Kinesis Athletic Movement",
    shortName: "Kinesis Movement Studio",
    desc: "Pilates Reformer & Functional Mobility",
    details:
      "Modern Pilates reformer studios combined with multi-planar kinesis cable systems for maximum joint health and core stability.",
    badge: "Reformer Studio",
    capex: "$130,000 - $210,000",
    color: "#A855F7",
    logo: "/assets/kinesis_tight.png",
    hoverBorder: "hover:border-purple-400",
    badgeClass: "bg-cyan-500/10 border-cyan-400/30 text-cyan-400",
    checkClass: "text-cyan-400",
    buttonClass: "bg-cyan-400 hover:bg-cyan-500 text-obsidian-950",
    features: ["2,000 – 3,800 Sq. Ft. Studios", "Allegro 2 Reformer Beds", "Multi-Planar Kinesis Towers"],
    space: "2,000 – 3,800 Sq.Ft.",
    timeline: "60 – 75 Days",
    code: "KN",
  },
};

export const brandList = Object.values(brands);

export const orbitNodes: { key: BrandKey; className: string }[] = [
  {
    key: "ff",
    className: "absolute top-[12.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
  {
    key: "vivafit",
    className: "absolute top-[31.25%] left-[82.5%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
  {
    key: "cardio",
    className: "absolute top-[68.75%] left-[82.5%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
  {
    key: "sakti",
    className: "absolute top-[87.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
  {
    key: "qualetee",
    className: "absolute top-[68.75%] left-[17.5%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
  {
    key: "kinesis",
    className: "absolute top-[31.25%] left-[17.5%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px]",
  },
];
