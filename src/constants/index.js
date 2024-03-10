import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
 
  file02,
 
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
 
  plusSquare,

  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
 
  sliders04,
  telegram,
  twitter,
  yourlogo,
  rumble,
  anajah,
  oneshop,
  ecommerce,
  hostel,
  webspace,
  
} from "../assets";
import { html , css , cs , tailwind, strapi ,bootstrap,sqlserver,github,vscode,javascript,react,nextjs } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Works",
    url: "#works",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "Download Cv",
    url: "#cv",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "As a developer, I excel in a wide range of technical domains, including programming languages like JavaScript and Html&Css, frameworks such as React.js and Next.js, database management like Mysql and SqlServer , and seamless API integration.";

export const collabContent = [
  {
    id: "0",
    title: "Web Developement",
    text: collabText,
  },
  {
    id: "1",
    title: "Desktop Apps (.Net C#)",
  },
  {
    id: "2",
    title: "Mobile Developement (Little)",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Html",
    icon: html,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "css",
    icon: css,
    width: 26,
    height: 36,
  },
  {
    id: "3",
    title: "cs",
    icon: cs,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "vscode",
    icon: vscode,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "react",
    icon: react,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "nextjs",
    icon: nextjs,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "github",
    icon: github,
    width: 38,
    height: 32,
  },
  
];

export const pricing = [
  {
    id: "0",
    title: "Anajah Academy",
    description: "Anajah Academy: My debut freelance project, a dynamic landing page crafted with HTML, CSS, JS, and PHP, showcasing my skills in web development.",
    date: "Juin 2023",
    icon1: html,
    icon2: css,
    icon3: javascript,
    demo: "https://anajah-academy-2024.vercel.app/",
    source:"https://github.com/MNASFA/AnajahAcademy_2024",
    banner: anajah,
  },
  {
    id: "1",
    title: "Rumble Cars",
    description: "Rumble: My multifaceted project from the first internship, featuring multiple React.js and Bootstrap-powered pages, highlighting adeptness in dynamic web development.",
    date: "Mai 2023",
    icon1: react,
    icon2: bootstrap,
    icon3: css,
    demo: "https://github.com/MNASFA/rumble-convertproject",
    source:"https://mnasfa.github.io/rumble-convertproject/",
    banner: rumble,
  },
  {
    id: "2",
    title: "Hostel Management System",
    description: "Hostel Management System: My PFE endeavor exemplifies database-driven efficiency, leveraging C# (.NET) for CRUD operations and SQL Server for seamless data management, ensuring streamlined hostel administration.",
    date: "Avril 2022",
    icon1: cs,
    icon2: sqlserver,
    icon3: github,
    demo: "#",
    source:"https://github.com/MNASFA/hostel-project",
    banner: hostel,
  },
  {
    id: "3",
    title: "One Shop",
    description: "One Shop: A sleek ecommerce venture crafted with Next.js, seamlessly integrating with APIs to fetch dynamic data, demonstrating proficiency in modern web development and data handling.",
    date: "Junuary 2024",
    icon1: nextjs,
    icon2: tailwind,
    icon3: javascript,
    demo: "https://one-shop-1.vercel.app/",
    source:"https://github.com/MNASFA/One",
    banner: oneshop,
  },
  {
    id: "4",
    title: "Ecommerce Full-Stack",
    description: "Latest project: A cutting-edge full-stack ecommerce solution blending Next.js for frontend interactivity, Strapi for robust backend management, and Tailwind CSS for sleek design, showcasing versatility in modern web development.",
    date: "February 2024",
    icon1: nextjs,
    icon2: tailwind,
    icon3: strapi,
    demo: "#",
    source:"https://github.com/MNASFA/Ecommerce",
    banner: ecommerce,
  },
  {
    id: "5",
    title: "Web Space Agency",
    description: "My digital agency, a collaborative venture with my friend, specializes in crafting bespoke websites for diverse clients, merging creativity with technical expertise to meet their unique needs.",
    date: "March 2024",
    icon1: html,
    icon2: css,
    icon3: javascript,
    demo: "https://web-space-agency.vercel.app",
    source:"https://github.com/MNASFA/web-space",
    banner: webspace,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Communication",
    text: "As a front-end developer, I excel in communicating complex technical concepts in a clear and understandable manner to my team members and clients. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    bgcolor: "text-color-1",
  },
  {
    id: "1",
    title: "Problem Solving",
    text: "I possess problem-solving skills, which allow me to tackle technical challenges with confidence and ingenuity.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    bgcolor: "text-color-1",
    light: true,
  },
  {
    id: "2",
    title: "Creativity",
    text: "My creativity shines through in my front-end development work, as I strive to design visually appealing and engaging user interfaces. I enjoy exploring innovative design patterns.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    bgcolor: "text-color-1",
  },
  {
    id: "3",
    title: "Adaptability",
    text: "I embrace change and am always eager to learn and adapt to new technologies and methodologies in web development.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
    bgcolor: "text-color-2",
    light: true,
  },
  {
    id: "4",
    title: "Time Management:",
    text: "I excel in managing my time effectively, juggling multiple tasks and projects while still meeting deadlines and deliverables.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    bgcolor: "text-color-3",
  },
  {
    id: "5",
    title: "Continuous Learning",
    text: "I am committed to lifelong learning and professional growth, constantly seeking out opportunities to expand my skill set and stay abreast of industry advancements.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    bgcolor: "text-color-2",
  },
];

export const socials = [
  {
    id: "0",
    title: "github",
    iconUrl: github,
    url: "https://github.com/MNASFA",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/home",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/houssa_mn/?igshid=NGVhN2U2NjQ0Yg%3D%3D",
  },
  {
    id: "3",
    title: "Linkedin",
    iconUrl: telegram,
    url: "https://www.linkedin.com/in/houssam-mnasfa-80056b247/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/houssammnasfa",
  },
];
