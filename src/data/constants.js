import HeroImg from "../images/foodies.jpeg"
import Image2 from "../images/Voice Assistant.jpeg"
import Image3 from "../images/BEsafe.jpeg"
import Image4 from "../images/Rite School2.png"


export const Bio = {
  name: "Prachit Gharat",
  roles: [
    "Business Development Associate",
    "Software Developer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/PrachitGharat/portfolio",
  resume:
    "https://drive.google.com/file/d/1T3tl4OVHqDjFwsp1PPyx56NFll7QL45F/view?usp=sharing",
    
  linkedin: "https://www.linkedin.com/in/prachitgharat/",
  insta: "https://www.instagram.com/prachitgharat/",
  facebook: "https://www.facebook.com/Prachit Gharat/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },

    ],
  },
  {
    title: "Backend",
    skills: [

      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },

    ],
  },
  

  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Sk Learn Kit",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },

      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-1/292026552_476705534458274_6198946898849174632_n.png?stp=dst-png_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=9e7101&_nc_ohc=-SPlRx61xWgAX_1uuRH&_nc_ht=scontent.fbom20-2.fna&oh=00_AfAoT_Yxy3E9iy6GOZ1OuKf6Ebv8gjTLW47l3inR4r4gvQ&oe=65D69DB4",
    role: "Software Developer Intern",
    company: "C-Tech Continentals",
    date: "June 2021 - Nov 2021",
    desc: "Enhanced user experience in designing by using Figma.For Responsive and User-Friendly experience used Programming Languages like Next.JS,HTML,C.S.S,Javascript,Tailwind.css.Worked on Live Project named DailyBla and Deployed on the Server",
    skills: [
      "Tailwind.css",
      "Next.JS",
      "NodeJs",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    role: "Software Developer Intern",
    company: "Aadi Technology.",
    date: "Aug 2023 - Oct 2023",
    desc: "Worked on Live Project named Rite School and the module which i have worked is Teacher Module.The  Different skills has ben used in the peoject like Frontend React.JS,Javascript and For Backend SQL and for Api testing Postman and Jira for Agile.For understanding software Requirement write User Story,Screen Mockup and then coding according to project.Live interaction with customers on the development",
    skills: [
      "React.JS",
      "SQL",
      "Jira",
      "HTML",
      "C.S.S",
      "Postman",
      "JavaScript",
      "TypeScript",
    ],
  },
];




export const education = [
  {
    id: 0,
    img: "https://phcetstudentportal.mes.ac.in/Login/images/MESLogo.png",
    school: "Pillai Hoc College of Engineering and  Technology, Rasayani",
    date: "July 2018 - Sep 2022",
    grade: "7.85 CGPA",
    degree: "Bachelor of Technology  , Information Technology",
  },
  {
    id: 1,
    img: "https://www.jmreschool.com/Assets/Images/logo.png",
    school: "J.M Rathi English School and Junior College, Roha-Raigad",
    date: "February 2016 - March 2018",
    grade: "62.31%",
    degree: "(XII)th-H.S.C, Science ",
  },
  {
    id: 2,
    img: "https://www.jmreschool.com/Assets/Images/logo.png",
    school: "J.M Rathi English School and Junior College, Roha-Raigad",
    date: "Apr 2000 - Apr 2016",
    grade: "75.80%",
    degree: "(X)th-S.S.C, Science ",
  },
];




export const projects = [
  {
    id: 11,
    title: "Crime Record Management App with React Native ",
    date: "Jan 2021 - Jun 2022",
    description:
      "A crime Record Management application named as  “BeSafe” which help in managing,updating and reporting crime .The aim of the application to reduce the crime ,errors and paerwork for  both citizens and police",
    image:
      Image3,
    tags: [
      "React Native",
      "Typescript",
      "Framer Motion",
      "Node.JS",
      "MongoDB",
      "Figma",
    ],
    category: "android app",
    
    member: [
      {
        name: "Prachit Gharat",
        
        linkedin: "https://www.linkedin.com/in/prachitgharat/",
        github: "https://github.com/PrachitGharat",
      },
      {
        name: "Vallabh Ingle",
        
        linkedin: "https://www.linkedin.com/in/vallabh-ingle-a9a0b7206/",
        github: "https://github.com/vallabh2920",
      },
      
      {
        name: "Mehul Gawhale ",
        
        linkedin: "https://www.linkedin.com/in/mehul-gawhale/",
        github: "https://github.com/Mehul2410",
      },
    ],
  },
  {
    id: 9,
    title: "Foodies",
    date: "Jun 2021 - Jul 2021",
    description:
      "Foodies is a website which is designed for computerized and information about food.It provides user friendly interface for customers and providing nutritional informationn about the food ",
    image:
    HeroImg,
    tags: [
      "HTML",
      "CSS",
      "JAVASCRIPT",

    ],
    category: "web app",
    
    
  },
  {
    id: 0,
    title: "Rite School",
    date: "Apr 2023 - May 2023",
    description:
      "Developed and worked on live project named as Rite School.Created user friendly interface and response ui with React.JS that provides seamless experience accross all devices.Practiced agile methodologies to optimize efficiency and communication",
    image:
      Image4,
    tags: ["React Js", "SQL", "Javascript","Jira"],
    category: "web app",
    


  },
  {
    id: 1,
    title: "Voice Based Assistant",
    date: "Oct 2021 - Jan 2022",
    description:
      "Designed and developed the Voice Assistant  using Python Project , a project which is used for effecient time mangemen,Easy to use,Interaction via voice commands.It can used for weather reports,reminders,play song etc",
    image:
      Image2,
    tags: [
      "Python",
      "Selenium",
      "Python Libraries",
    ],
    category: "web app",
  },


  {
    id: 7,
    title: "Quiz App",
    date: "Dec 2020 - Jan 2021",
    description:
      "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
    tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
    category: "android app",
 
  },
  {
    id: 8,
    title: "Face Recognition",
    date: "Jan 2021",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      "https://dontrepeatyourself.org/media/face-recognition-with-python-dlib-and-deep-learning_cezKZBj.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
