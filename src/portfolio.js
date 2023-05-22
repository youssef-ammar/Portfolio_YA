/* Change this file to get your personal Porfolio */

// Website related settings

//SEO Related settings
const seo = {
  title: "Youssef's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Youssef Ammar Portfolio",
    type: "website",
    url: "http://localhost:3000/#/home/",
  },
};

//Home Page
const greeting = {
  title: "Youssef Ammar",
  logo_name: "YoussefAmmar",
  nickname: "Josef",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://www.canva.com/design/DAFBpE2ezSI/obK7H-1xOaPa2kYApL7hlg/edit?utm_content=DAFBpE2ezSI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  portfolio_repository: "https://github.com/youssef-ammar",
  githubProfile: "https://github.com/youssef-ammar",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/youssef-ammar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com /in/youssef-ammar-9475a0177",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:ammar.youssef@esprit.tn",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Youssef88883284",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/youssef.ammar.7906",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_youssef__ammar_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Back End Development",
      fileName: "BackEndEndImg",
      skills: [
        "⚡ Strong proficiency in PHP, Java, and Dart programming languages, including knowledge of their syntax, features, and libraries.",
        "⚡ Database management: Knowledge of database concepts, SQL, and experience in working with popular databases like MySQL, Oracle, or MongoDB. ",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Spring_boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Front End Development",
      fileName: "FrontEndImg",
      skills: [
        "⚡ Strong proficiency in HTML5, CSS3, and JavaScript, including knowledge of their syntax, features, and best practices.",
        "⚡ Front-end JavaScript libraries and frameworks: Mastery in React JS for building user interfaces, including components, state management, and routing.  ",
      ],
      softwareSkills: [
        {
          skillName: "Angular.js",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#E34F26",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "Mobile Development ",
      fileName: "MobileImg",
      skills: [
        "⚡Strong proficiency in Dart programming language and Flutter framework for building cross-platform mobile applications, including expertise in Flutter widgets, state management, and navigation.",
        "⚡ Android app development: Proficiency in Java programming language and Android SDK for developing native Android applications",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Lycée Secondaire de Dar Chaabaine El Fehri",
      subtitle: "Baccalauréat Mathématique",
      logo_path: "ldcf.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2018",
      descriptions: [],
    },
    {
      title: "Institut Supérieur d’informatique de Tunis - ISI",
      subtitle: "Licence Appliquée ,Systèmes Informatiques et Logiciels",
      logo_path: "isi.png",
      alt_name: "ISI",
      duration: "2018 - 2021",
      descriptions: [],

      website_link: "http://www.isi.rnu.tn/",
    },
    {
      title: "ESPRIT: Ecole Sup Privée d'Ingénierie et de Technologies",
      subtitle: "Ingénierie ,Systèmes Informatiques et logicieles",
      logo_path: "esprit.png",
      alt_name: "ESPRIT",
      duration: "2021 - 2024",
      descriptions: [],

      website_link: "https://esprit.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Flutter & Dart ",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "flutterp.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-e49f6992-29cc-4cbd-a7fd-63ea9197ae5f",
      alt_name: "Udemy",
      color_code: "#462f87",
    },
    {
      title: "ReactJS",
      subtitle: "- Paul Ashraf",
      logo_path: "react.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/423YNKRWE5H3",
      alt_name: "Coursera",
      color_code: "#0f052a",
    },

    {
      title: "Java Programming Masterclass",
      subtitle: "- Tim Buchalka",
      logo_path: "java.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f084127c-a4e8-429a-b7a0-93b0e2ead247",
      alt_name: "Udemy",
      color_code: "#26303b",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Freelancing",
          company: "Fiverr",
          company_url: "https://fr.fiverr.com/youssef_ammar",
          logo_path: "fiverr.png",
          duration: "June 2021 - Mars 2023",
          location: "Work From Home",
          description:
            "I am working on Development the Api's of an invoicing mobile application, Development the Api's of an Apartments rental website, and Website Translation (English, French, German)...",
          color: "#0879bf",
        },
        {
          title: "Project Graduation",
          company: "MaisonDuWeb.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "maison.png",
          duration: "Feb - Juin 2021",
          location: "San Francisco, USA",
          description:
            "Design and development of an expense management web application:  Management and control of the company's budget in the medium and long term. Management of invoicing, bank reconciliation, inventory, purchases, sales, expenses and accounting.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Summer Internship",
          company: "Esprit.",
          company_url: "https://www.delhivery.com/",
          logo_path: "est.png",
          duration: "Aug - Sept 2022",
          location: "Ariana, Tunisia",
          description:
            "Design and development of a student mobility management website. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Scouts Tunisia",
          company: "SCOUTS",
          company_url: "https://scouts.tn/",
          logo_path: "scout.png",
          duration: "June 2013 - April 2022",
          location: "Dar Chaabaine El Fehri, Tunisia",
          description: "Senior Member in The Tunisian Scouts",
          color: "#4285F4",
        },
        {
          title: "Institute of Electrical and Electronics Engineers",
          company: "IEEE",
          company_url: "https://ieee.tn/",
          logo_path: "ieee.png",
          duration: "Sept 2018 - May 2019",
          location: "Ariana, Tunisia",
          description:
            " Membre actif in Institute of Electrical and Electronics Engineers ISI Department ",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create innovative projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vme.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+216 23590421",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
