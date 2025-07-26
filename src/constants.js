// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/developer.png';
import agcLogo from './assets/company_logo/ece.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/NITH.png';
import bsaLogo from './assets/education_logo/jnv.png';
import vpsLogo from './assets/education_logo/jnv.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/game.png';
import csprepLogo from './assets/work_logo/image.png';
import movierecLogo from './assets/work_logo/portfolio.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      // company: "Webverse Digital",
      // date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance .",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        // "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "E&C Enginner",
      // company: "Agumentik Group of Companies",
      // date: "July 2023 - March 2024",
      desc: "As an ECE student, I gained hands-on experience in circuit design, microcontrollers, and embedded systems. I worked on Arduino and RF-based projects involving real-time sensor data. My exposure to PCB design and IoT strengthened my foundation in hardware-driven solutions.",
      skills: [
        "MatLab",
        "OrCad",
        "Keil uVision5",
        "CST Studio",
        "Cadance",
       
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "NIT,Hamirpur",
      date: "NOV 2022 - Present",
      grade: "7.27 CGPA",
      desc: "I am currently pursuing my B.Tech in Electronics and Communication Engineering (ECE) from NIT. Throughout my academic journey, I've developed a strong foundation in electronics, signal processing, and communication systems, along with programming and embedded systems. I’ve also explored areas like web development and participated in tech events and workshops, which have helped me grow both technically and personally. My time at NIT is shaping me into a well-rounded engineer with a passion for technology and innovation.",
      degree: "Bachelor of Technology-ECE",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    {
      id: 2,
      img: vpsLogo,
      school: "Jawahar Navodya Vidyalaya, Chamba",
      date: "Apr 2019 - March 2020",
      grade: "84%",
      desc: "I completed my class 12 education from Jawahar Navodya Vidyalaya, Chamba, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Informatics Practices (IP).",
      degree: "CBSE(XII) - PCM with Informatics Practices (IP)",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Jawahar Navodya Vidyalaya, Chamba",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my Class 10 education from Jawahar Navodaya Vidyalaya, Chamba, under the CBSE board. My academic curriculum included core subjects such as Hindi, English, Mathematics, Science, and Social Studies, along with Computer Applications.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [

     {
      id: 2,
      title: "MY_Portfolio",
      description:
        "A modern and responsive personal portfolio built using React and Tailwind CSS. It showcases my skills, projects, education, and experience with smooth scrolling, interactive UI elements, and mobile-friendly design. The site includes sections like About, Skills, Projects, and Contact, helping visitors easily explore my work and connect with me.",
      image: movierecLogo,
      tags: ["React JS", "Tailwind", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kumarnikhil98162/MY_portfolio",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 0,
      title: "Snake_Game",
      description:
        "A classic Snake Game built using React, featuring smooth movement, real-time score tracking, and responsive design. The game logic is modularized into reusable React components, offering an engaging and interactive user experience directly in the browser.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Kumarnikhil98162/snake_Game",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "AI_Img_Generator",
      description:
        "A full-stack web application built using the MERN stack that allows users to generate and share AI-generated images. The app integrates with a free AI image generation API and uses Cloudinary for image hosting. Users can input prompts to create unique images, explore community-generated content, and post their own creations.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Kumarnikhil98162/image_Generator",
      // webapp: "https://csprep.netlify.app/",
    },
   
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  
