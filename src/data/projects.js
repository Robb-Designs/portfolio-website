import canSercUImage from "../assets/images/canserveu.webp";
import arcaneScriptImage from "../assets/images/arcane-script.webp";

const projects = [
  {
    id: 1,
    number: "01.",
    title: "CanServU Inc.",
    category: "Client Project • Nonprofit Website",
    layout: "left",
    overview: "Designed and developed the first official website for CanServU Inc., a nonprofit organization that previously relied on Facebook as its primary online presence. The website provides volunteers, donors, and community members with an accessible hub to learn about the organization's mission, programs, events, and ways to get involved.",
    highlights: [
      "Partnered directly with the nonprofit to gather requirements, present designs, and iterate based on client feedback.",
      "Designed the user experience from the ground up with a strong emphasis on accessibility, responsive layouts, and intuitive navigation.",
      "Built reusable React components to create a consistent, scalable interface across multiple pages.",
      "Implemented interactive features including a contact form, donation page, mobile navigation, and subtle scroll animations."
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Radix UI"
    ],
    repository: null,
    repositoryNote: "Source code is private due to client ownership.",
    website: "https://can-servu-inc.vercel.app/",
    images: [canSercUImage],
    imageAlt: "Homepage hero section of the CanServU nonprofit website."
  },
  {
    id: 2,
    number: "02.",
    title: "Arcane Script",
    category: "Full Stack Web Application",
    layout: "right",
    overview: "Designed a cohesive retro fantasy interface inspired by classic RPGs, combining pixel art aesthetics with responsive React components.",
    highlights: [
      "Designed and developed both the frontend and backend using a modern TypeScript-based technology stack.",
      "Implemented secure JWT authentication, protected routes, and persistent user profiles with MongoDB.",
      "Built a REST API to manage battles, enemy encounters, match results, and player progression.",
      "Created a retro-inspired user interface featuring pixel art aesthetics, responsive layouts, and reusable UI components."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt"
    ],
    repository: "https://github.com/Robb-Designs/the-arcane-script",
    website: "https://the-arcane-script.vercel.app/",
    images: [arcaneScriptImage],
    imageAlt: "Title screen of The Arcane Script retro fantasy typing game."
  },
];


export default projects;