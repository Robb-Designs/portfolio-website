import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/robert-lee-dev/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Robb-Designs",
    icon: FaGithub,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default socialLinks;