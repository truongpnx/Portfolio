// Import all images
import animeWebImg from '../assets/images/anime_web.png';
import currencyExchangeImg from '../assets/images/currency_exchange.png';
import chineseChessImg from '../assets/images/chinese_chess.png';
import stringArtImg from '../assets/images/string_art.png';
import vicallographyImg from '../assets/images/vicalligraphy.png';
import fewshotImg from '../assets/images/fewshot.png';
import snakeGameImg from '../assets/images/snake_game.gif';

import type { Project, License, Experience, PersonalInfo } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Truong Xuan Pham Nguyen",
  nameStructure: {
    firstName: "Truong",
    middleName: "Xuan", 
    familyName: "Pham Nguyen"
  },
  title: "Fullstack Engineer",
  phone: "+84 356035733",
  email: "xuantruongpnxt@gmail.com",
  birthDate: "09/03/2002",
  github: "https://github.com/truongpnx",
  linkedin: "https://www.linkedin.com/in/pnxuantruong/",
  summary: "Fullstack Engineer with experience in scalable mobile and web application development. Specialized in backend architecture, API design, and cross-platform mobile apps. Proficient in Flutter, Django, NestJS, and GraphQL for building robust solutions. Skilled in real-time communication using LiveKit, STUN/TURN, and WebSocket. Experienced with DevOps tools like CI/CD pipelines, Docker, and GitLab Runner. Integrated AI services such as ChatGPT API for intelligent automation. Strong collaboration skills across frontend, backend, and product teams. Focused on code quality, performance optimization, and business alignment.",
  technicalSkills: {
    programmingLanguages: ["TypeScript", "Python", "PostgreSQL", "Dart"],
    frameworks: ["Flutter", "Django", "NestJS", "React/TypeScript", "HTML & CSS"],
    apis: ["GraphQL", "RESTful API", "WebSocket"],
    other: ["Docker", "CI/CD (GitLab Runner)", "Git & GitLab", "SIP/SDP (IMS Protocols)", "STUN/TURN (Real-time communication)"]
  }
};

// Work Experience
export const experiences: Experience[] = [
  {
    company: "EyeQ Tech",
    position: "Fullstack Engineer",
    duration: "12/2024 - Present",
    responsibilities: [
      "Developed and maintained an Android app for farm workers, enabling task logging and business operations tracking using Flutter with BLoC and Clean Architecture",
      "Led backend maintenance of the recruitment platform RecruitGenius.ai",
      "Integrated ChatGPT API to parse CVs and enhance candidate processing",
      "Rebuilt internal meeting system and restored critical interview video features using WebRTC (LiveKit), STUN/TURN, and WebSockets",
      "Contributed to the backend development of a farm management system",
      "Delivered new features based on dynamic business requirements",
      "Ensured database integrity and improved GraphQL query performance for frontend responsiveness",
      "Automated deployments using GitLab CI/CD pipelines and Dockerized environments"
    ],
    technologies: ["Flutter", "BLoC", "Clean Architecture", "GraphQL", "NestJS", "REST API", "LiveKit", "WebSocket", "STUN/TURN", "Python", "Django", "PostgreSQL", "Docker", "CI/CD (GitLab Runner)"]
  },
  {
    company: "DEK Technologies",
    position: "Software Engineer Intern",
    duration: "03/2024 - 05/2024",
    responsibilities: [
      "Study on IMS protocols such as SIP, SDP in order to deploy IMS Core server using Kamailio SIP Server",
      "Config IMS Core server allows transmission and routing of packets for sending messages, voice and video calls",
      "Develop Android application for making and receiving messages, voice and video calls"
    ],
    technologies: ["Kamailio Open Source", "Linux", "GitLab", "Jenkins", "Android Studio", "Java", "MySQL"]
  }
];

export const projects: Project[] = [
  {
    name: "Anime Watching Web",
    image: animeWebImg,
    description: "Anime Web is a platform for anime fans to browse and manage anime series and episodes. It features a responsive React front-end and a robust back-end powered by Express.js and MongoDB for efficient data management.",
    technologies: "React, sassCSS, NodeJS with ExpressJS, MongoDB",
    link: "https://github.com/truongpnx/Anime-Web"
  },
  {
    name: "Currency Exchanger",
    image: currencyExchangeImg,
    description: "Currency Exchanger is an Android application designed to convert currencies by fetching the latest exchange rates from Exchange Rates API",
    technologies: "Android Studio, Retrofit, Kotlin",
    link: "https://github.com/truongpnx/CurrencyExchange"
  },
  {
    name: "Chinese Chess",
    image: chineseChessImg,
    description: "Chinese Chess power by Godot, apply Machine Learning for automatically playing",
    technologies: "Godot Engine, ML",
    link: "https://github.com/truongpnx/chinesechess"
  },
  {
    name: "String Art",
    image: stringArtImg,
    description: "Machine Learning in String Art",
    technologies: "ML, Pytorch, OpenCV",
    link: "https://colab.research.google.com/drive/1jTJ_oUTo-7z7T36HJhaKH-Wt-WkQXlCi?usp=sharing"
  },
  {
    name: "Artistic Text Recognition",
    image: vicallographyImg,
    description: "Skeleton Guided Transformer base on Corner Guided Transfomer for artistic text recognition",
    technologies: "OCR, SceneTextRecogniton, Pytorch, Transfomer, Docker, PaddleOCR",
    link: "https://github.com/truongpnx/GraduateThesis"
  },
  {
    name: "Few-shot Learning with Neural Network",
    image: fewshotImg,
    description: "Few-shot image classifi cation using Prototypical Networks and Model-Agnostic Meta-Learning",
    technologies: "AI, Few-shot Learning, Neural Network, Python, Pytorch",
    link: "https://github.com/truongpnx/Fewshot_Omniglot"
  },
  {
    name: "Snake Game",
    image: snakeGameImg,
    description: "The Snake Game was built with SDL and apply Deep-First-Search and A* Search for automatically playing",
    technologies: "C++, DFS, A*, Game, SDL",
    link: "https://github.com/truongpnx/Games/tree/main/SnakeGame"
  }
];

export const licenses: License[] = [
  {
    name: "TOEIC Listening and Reading",
    description: "Test of English for International Communication.",
    link: "https://drive.google.com/file/d/1mLAES8m_NzoRP-oMKLYzUTvzomuivvij/view?usp=drive_link"
  },
  {
    name: "TOEIC Speaking and Writing",
    description: "Test of English for International Communication.",
    link: "https://drive.google.com/file/d/1IpN3TgCGPO2r0AYnimAcGhi4WvEw7hVa/view?usp=drive_link"
  },
  {
    name: "CS50's Introduction to Artificial Intelligence with Python",
    description: "Certificate for completing course.",
    link: "https://certificates.cs50.io/6f53df6d-adef-42b5-ba43-70c92bcfb3b4"
  },
  {
    name: "Cloud Computing Fundamentals",
    description: "edX Verified Certificate for Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    link: "https://courses.edx.org/certificates/8d0cec0633994eafa461bb1a0a3ffb7e"
  }
];
