// Enter all your detials in this file
// Logo images

// Profile Image
import eu from "./assets/me.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import cSh from "./assets/techstack/C#.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import c from "./assets/techstack/C_Logo.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import java from "./assets/techstack/Java-Logo.png"
import NET from "./assets/techstack/NET.png"
import linux from "./assets/techstack/linux.png"
import sql from "./assets/techstack/SQL.png"
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import docker from "./assets/techstack/Docker.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import rider from "./assets/techstack/JetBrains_Rider_Icon.png"
import datagrip from"./assets/techstack/datagrip.png"
import platformio from"./assets/techstack/PlatformIO_logo.png"
import astah from"./assets/techstack/Astah.png"
import scenebuilder from "./assets/techstack/SceneBuilder.png"
import intelij from "./assets/techstack/IntelliJ_IDEA.png"
// Porject Images
import projectImage1 from "./assets/projects/SmartHomeSystem-SEP4.png";
import projectImage2 from "./assets/projects/Progresso.png";
import projectImage3 from "./assets/projects/CycleShare.png";
import projectImage4 from "./assets/projects/Overlook Hotel.png";




// Enter your Personal Details here
export const personalDetails = {
  name: "Claudiu Carabus",
  tagline: "I am an Undergraduate Software Engineer",
  img:eu,
  about: `An enterprising Software Engineering student
  with a passion for developing cutting-edge
  solutions. I am on the lookout for an internship
  that challenges me and accelerates my growth
  in the tech industry.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/c%C4%83r%C4%83bu%C8%99-claudiu-petric%C4%83/",
  github: "https://github.com/suscapusca",
  instagram: "https://www.instagram.com/susca__pusca/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Fullstack Web Developer",
    Company: `Freelancing`,
    Location: "Everywhere",
    Type: "Part Time",
    Duration: "March 2024 - Present",
  },
  {
    Position: "Kitchen Assistant",
    Company: `Oasia`,
    Location: "Vejle",
    Type: "Part Time",
    Duration: "Jan 2024 - Present",
  },
  {
    Position: "Picker",
    Company: `Rema 1000`,
    Location: "Horsens",
    Type: "Part Time",
    Duration: "Apr 2022 - Jan 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Software Engineering",
    Company: `VIA University College`,
    Location: "Horsens",
    Type: "Full Time",
    Duration: "Feb 2022 - Jan 2026",
  },
  {
    Position: "Baccalaureate",
    Company: `Colegiul Economic "Dimitrie Cantemir" Suceava`,
    Location: "Suceava",
    Type: "Full Time",
    Duration: "Sep 2017 - Jun 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  c:c,
  cSh:cSh,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  docker:docker,
  git: git,
  github: github,
  figma: figma,
  rider:rider,
  datagrip:datagrip,
  platformio:platformio,
  astah:astah,
  java:java,
  NET:NET,
  linux:linux,
  sql:sql,
  scenebuilder:scenebuilder,
  intelij:intelij
};

// Enter your Project Details here
export const projectDetails = [
  
  {
    title: "Overlook Hotel",
    image: projectImage4,
    description: `Executed a booking system for 'Overlook Hotel' using Java and Scene Builder, adhering to the Waterfall methodology to ensure a structured
    and sequential development process, complemented by a responsive website crafted with HTML, CSS, Bootstrap, and JavaScript.`,
    techstack: "HTML/CSS, JavaScript, Java",
    githubLink: "https://github.com/suscapusca/OverlookHotelSEP1",
  },
  {
    title: "CycleShare",
    image: projectImage3,
    description: `Developed 'CycleShare', a bike-sharing reservation system with a user-friendly Java interface via Scene Builder, powered by a robust
    PostgreSQL database, using Unified Process and Scrum for project management`,
    techstack: "Java",
    githubLink: "https://github.com/suscapusca/CycleShareSEP2",
  },
  
  {
    title: "Progresso",
    image: projectImage2,
    description: `Engineered 'Progresso', a project management application using C#, Blazor .NET, and NoSQL, orchestrating development with a hybrid
    Kanban and Scrum approach to optimize workflow and enhance team
    agility.`,
    techstack: "HTML/CSS, C#",
    githubLink: "https://github.com/suscapusca/ProgressoSEP3",
  },
  {
    title: "Smart Home System",
    image: projectImage1,
    description: `Participated in an IoT team to develop a Smart Home System, coding with C for sensor and actuator operation, utilizing Wi-Fi for TCP data
    transmission, and employing Scrum to streamline project milestones`,
    techstack: "C ",
    githubLink: "https://github.com/Smart-Home-System-SEP4",
  },
 
 
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "clau.carabus@yahoo.com",
  phone: "+45 91426436",
};
