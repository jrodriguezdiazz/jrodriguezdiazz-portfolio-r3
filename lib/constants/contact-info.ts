import { Mail, Linkedin, Github, MapPin, Twitter } from "lucide-react";

import { ContactInfo } from "../types";

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "jrodriguezdiazz@outlook.com",
    href: "mailto:jrodriguezdiazz@outlook.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jrodriguezdiazz",
    href: "https://linkedin.com/in/jrodriguezdiazz",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jrodriguezdiazz",
    href: "https://github.com/jrodriguezdiazz",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "x.com/jrodriguezdiazz",
    href: "https://x.com/jrodriguezdiazz",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Espaillat, Dominican Republic",
  },
];
