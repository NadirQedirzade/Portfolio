export const profile = {
  name: "Nadir Qədirzadə",
  headline: "AzTU — Mechatronics & Robotics Engineer",
  location: "Baku, Azerbaijan",
  email: "nqedirzade08@gmail.com",
  github: "https://github.com/nqedirzade08",
  linkedin:
    "https://www.linkedin.com/in/nadir-q%C9%99dirzad%C9%99-667b13408/",
  resumeUrl:
    "https://drive.google.com/file/d/1BMTG82cRXWEVqYezROA5J48K-MjCG_UR/view?usp=sharing",
};

export const badges = [
  {
    id: "medscan",
    label: "MedScan AI",
    role: "Team Leader",
    note: "Idea to Project Hackathon — 3rd Place",
  },
  {
    id: "abituriyentx",
    label: "AbituriyentX",
    role: "Team Leader & Data Engineer",
    note: "Startup Days 4 — 2nd Place",
  },
  {
    id: "smartcity",
    label: "SmartCityPulse",
    role: "Team Leader",
    note: "Hackathon project",
  },
];

export const aboutParagraphs = [
  "I am a Mechatronics and Robotics Engineering student at Azerbaijan Technical University, currently working as an AI Engineering Intern at DevJoint and building my career toward becoming a Machine Learning Engineer.",
  "My current focus is on developing a strong foundation in data analysis, mathematics, and programming before moving deeper into Machine Learning. I have studied Python fundamentals, Linear Algebra, Statistics, NumPy, Pandas, Matplotlib and Seaborn and I am continuing my learning journey with SQL, Power BI, and Excel.",
  "My next goal is to advance into Machine Learning and Deep Learning by working with Scikit-learn and PyTorch, followed by specialization in areas such as Computer Vision and Natural Language Processing (NLP).",
  "Beyond my technical development, I am the Founder & CEO of AbituriyentX, an AI-powered education platform designed to help Azerbaijani students make more informed decisions about university majors and their future careers. I contribute to product strategy, UI/UX design, backend development, AI integration, data preparation, and research.",
  "I also have experience leading teams in startup and hackathon environments, achieving 2nd place at IV Startup Days and 3rd place at the \"From Idea to Project\" Hackathon.",
  "I am passionate about Artificial Intelligence, Machine Learning, technology, and building solutions to real-world problems. My long-term goal is to grow into a strong Machine Learning Engineer and contribute to impactful AI-driven products.",
];

export const skills = {
  current: [
    "Python",
    "Linear Algebra",
    "Statistics",
    "NumPy",
    "Pandas",
    "Matplotlib", 
    "Seaborn"
  ],
  inProgress: ["SQL", "Power BI", "Excel"],
  next: ["Scikit-learn", "PyTorch", "Computer Vision", "NLP"],
};

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  videoUrl: string;
  youtubeId: string;
  role: string;
};

function getYoutubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{6,})/);
  return match ? match[1] : "";
}

export const projects: Project[] = [
  {
    id: "smartcitypulse",
    index: "01",
    name: "SmartCityPulse",
    tagline: "Real-time urban infrastructure monitoring",
    description:
      "A hackathon project exploring how real-time data can make urban infrastructure more responsive and easier to monitor.",
    videoUrl: "https://www.youtube.com/watch?v=Y_A5R-6i74Q",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=Y_A5R-6i74Q"),
    role: "Team Leader",
  },
  {
    id: "medscan-ai",
    index: "02",
    name: "MedScan AI",
    tagline: "AI-powered medical image analysis",
    description:
      "An AI-powered medical image analysis platform built with FastAPI and PyTorch, designed to support faster, more accessible diagnostics.",
    videoUrl: "https://www.youtube.com/watch?v=lyizue7samw",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=lyizue7samw"),
    role: "Team Leader",
  },
  {
    id: "abituriyentx",
    index: "03",
    name: "AbituriyentX",
    tagline: "AI-guided university major selection",
    description:
      "An AI-powered education platform for Azerbaijani students — analyzing exam scores, exploring university majors, and delivering AI-assisted career guidance through a modern, intelligent interface.",
    videoUrl: "https://www.youtube.com/watch?v=EIJv-5aOIsk",
    youtubeId: getYoutubeId("https://www.youtube.com/watch?v=EIJv-5aOIsk"),
    role: "Founder & Data Engineer",
  },
];

export const achievements = [
  {
    id: "cash-prize",
    title: "1000 AZN Cash Prize",
    subtitle: '"From Idea to Project" Hackathon — 3rd Place',
    image: "/images/award-cash-prize.jpg",
  },
  {
    id: "pitch",
    title: "Pitch Presentation",
    subtitle: "Presenting AbituriyentX on stage",
    image: "/images/award-pitch.jpg",
  },
];

// The 14 certificates Nadir provided, in a fixed display order.
export const certificates = [
  {
    id: "cert-01",
    title: "IBM — Data Analysis with Python",
    src: "/certificates/cert-01.jpg",
  },
  {
    id: "cert-02",
    title: "IBM — Data Analysis Using Python (Badge)",
    src: "/certificates/cert-02.jpg",
  },
  {
    id: "cert-03",
    title: "IBM — Python for Data Science",
    src: "/certificates/cert-03.jpg",
  },
  {
    id: "cert-04",
    title: "IBM — Python for Data Science (Badge)",
    src: "/certificates/cert-04.jpg",
  },
  {
    id: "cert-05",
    title: "Deloitte — Data Analytics Job Simulation",
    src: "/certificates/cert-05.jpg",
  },
  {
    id: "cert-06",
    title: "DevJoint — AI Engineering Internship",
    src: "/certificates/cert-06.jpg",
  },
  {
    id: "cert-07",
    title: '"Gələcəyi Kodla" Seminar',
    src: "/certificates/cert-07.jpg",
  },
  {
    id: "cert-08",
    title: "AzTU — İdeyadan Layihəyə (3rd Place)",
    src: "/certificates/cert-08.jpg",
  },
  {
    id: "cert-09",
    title: "Kaggle — Data Visualization",
    src: "/certificates/cert-09.jpg",
  },
  {
    id: "cert-10",
    title: "Kaggle — Pandas",
    src: "/certificates/cert-10.jpg",
  },
  {
    id: "cert-11",
    title: "Kaggle — Python",
    src: "/certificates/cert-11.jpg",
  },
  {
    id: "cert-12",
    title: "ElTek — Qəbul Məktubuna Aparan Yol",
    src: "/certificates/cert-12.jpg",
  },
  {
    id: "cert-13",
    title: "AzTU Startup Days — 2nd Place Diploma",
    src: "/certificates/cert-13.jpg",
  },
  {
    id: "cert-14",
    title: "AzTU Startup Days — Participation",
    src: "/certificates/cert-14.jpg",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#resume", label: "Resume" },
];
