import { User, Briefcase, Code2, Mail } from "lucide-react";

export const NAV_ITEMS = [
  { href: "#about", labelKey: "navigation.about", icon: User },
  {
    href: "#work-experience",
    labelKey: "navigation.experience",
    icon: Briefcase,
  },
  { href: "#projects", labelKey: "navigation.projects", icon: Code2 },
  { href: "#contact", labelKey: "navigation.contact", icon: Mail },
];
