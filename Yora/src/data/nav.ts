export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About YORA" },
  { to: "/franchise", label: "Franchise" },
  {
    to: "/brands",
    label: "Brands",
    pulse: true,
    children: [
      { to: "/brands/Qualeatee", label: "Qualeatee" },
      { to: "/brands/Cardio", label: "Cardio" },
      { to: "/brands/Kinesis", label: "Kinesis" },
      {
        to: "https://vivafit.life/",
        label: "Vivafit",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        to: "https://saktiwellness.in/",
        label: "Sakthi",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        to: "https://fitnessfactory.fit/",
        label: "Fitness Factory",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  { to: "/contact", label: "Contact Us" },
] as const;

export const programs = [
  "Strength Training",
  "Yoga & Mobility",
  "Cardio Workouts",
  "Group Classes",
] as const;
