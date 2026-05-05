import { LINKS } from "../lib/constants";

export const homeNavigation = [
  { label: "Work", href: "/design" },
  { label: "Blog", href: "/blog" },
  { label: "Lab", href: "/lab" },
  { label: "About", href: "#about" },
];

export const homeSocialLinks = [
  { label: "Email", href: `mailto:${LINKS.email}`, icon: "ri:mail-line" },
  { label: "Wechat", href: "#wechat", icon: "ri:wechat-line" },
  { label: "Quotes", href: "#quotes", icon: "ri:emotion-laugh-line" },
];

export const homeHero = {
  eyebrow: "Digital Designer",
  name: "Zero Yue",
  titleImage: "",
  signatureImage: "/images/home/zero-yue-signature.png",
  portraitImage: "/images/home/home-portrait-main.png",
  statement: "在秩序与情感之间，创造持久的体验",
  lines: ["I design with purpose.", "I shape experiences that last."],
  locationLabel: "Based in Chongqing, China",
};

export const homeAbout = {
  title: "About Me",
  lines: [
    "一名互联网产品设计师",
    "一个讲故事的人",
    "商业与设计的平衡者",
    "持续创新，长期主义",
  ],
  href: "/blog",
};

export const homeAboutDetail = {
  title: "About Me",
  intro: "Hi, I'm Zero Yue，来自重庆的互联网产品设计师",
  skillIntro: "职业技能包括但不限于:",
  skills: [
    "交互设计",
    "视觉设计",
    "AI设计",
    "三维设计",
    "用户体验",
    "项目管理",
  ],
  paragraphs: [
    "多元化的设计工具构建出了我的技能体系，广泛的调研和分析推动着我不断进步。",
    "设计之外，我喜欢投入一些创作，比如CG绘画、3d打印和数字人。阅读、电影和徒步也会填充我的闲暇时光。",
    "By the way, coffee is one of my life's simple pleasures.",
  ],
  socials: [
    { label: "LinkedIn", href: LINKS.linkedin, icon: "ri:linkedin-fill" },
    { label: "Dribbble", href: LINKS.dribbble, icon: "ri:dribbble-fill" },
    { label: "Behance", href: LINKS.behance, icon: "ri:behance-fill" },
    { label: "ArtStation", href: LINKS.artstation, icon: "ri:external-link-line" },
    { label: "500px", href: LINKS["500px"], icon: "ri:camera-line" },
  ],
};

export const homeSkills = [
  "交互设计",
  "视觉设计",
  "AI设计",
  "三维设计",
  "用户体验",
  "项目管理",
];

export const fallbackSelectedWorks = [
  {
    title: "Claude Design",
    subtitle: "Prompt Analysis",
    year: "2026",
    href: "/blog/claude-design-prompts",
    image: "/lab/claude-design-guide-preview.png",
  },
  {
    title: "IconCook",
    subtitle: "SVG Icon Search",
    year: "2026",
    href: "https://www.iconcook.cc/",
    image: "/lab/iconcook-preview.png",
  },
  {
    title: "Early design works",
    subtitle: "Series",
    year: "2024",
    href: "/design",
    image: "/images/design/异星探索-三维.jpg",
  },
  {
    title: "Project Lab",
    subtitle: "Experiments",
    year: "2024",
    href: "/lab",
    image: "/images/Lab-Mask.png",
  },
];
