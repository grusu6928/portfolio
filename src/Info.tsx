import emoji from "react-easy-emoji";

// const illustration = {
//   animated: true // Set to false to use static SVG
// };

const greeting = {
  name: "George Constantin Rusu",
  title: "Hi all, I'm Saad",
  subTitle: emoji(
    "Passionate, product - driven engineer with interests in distributed computing and developing intuitive, user friendly consumer tech computer 💻"),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/grusu6928",
  linkedin: "https://www.linkedin.com/in/georgerusu/",
  gmail: "grusu6928@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Full Stack Developer with Mobile Cross Platform Dev Experience",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  SWEFrameworks: [
    {
      skillName: "reactJS/native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS/EC2",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "fab fa-clouds"
    },
    {
      skillName: "Maven",
      fontAwesomeClassname: "fab fa-feather-alt"
    },
    {
      skillName: "nodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  MLFrameworks: [
    {
      skillName: "TensorFlow",
    },
    {
      skillName: "PyTorch",
    },
    {
      skillName: "Keras",
    },
    {
      skillName: "Scikit",
    },
    {
      skillName: "NumPy",
    },
    {
      skillName: "Pandas",
    },
    {
      skillName: "OpenCV",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const education = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brown University",
      logo: require("./assets/images/brownLogo.jpeg"),
      subHeader: "Honors B.Sc Computer Science",
      duration: "September 2018 - May 2022",
      desc: "Pathways: Software Engineering and Machine Learning",
      descBullets: [
        "Software Engineering, Computer Systems, Hypertext/Hypermedia Systems (MERN Stack)",
        "Deep Learning, Machine Learning, Computer Vision", 
        "Language Processing (Graduate), Reinforcement Learning (Graduate)",
        "Distributed Systems, Systems Security",
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "High School Summer College",
      duration: "Summer 2016, Summer 2017",
      desc: "Took undergraduate and graduate level courses as part of high school summer program",
      descBullets: ["Object Oriented Programming", 
      "Scientific Computing and Analysis with Matlab (Graduate)", 
      "Astrophysics (Mars)"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const languages = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JSX/TSX", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tagg",
      companylogo: require("./assets/images/taggLogo.png"),
      date: "May – Sept. 2021",
      desc: "Ideated novel app designs and features and coordinated decisions between SWE, design, and marketing teams. Led weekly sprint planning and backlog grooming meetings to discuss, plan, and propose new app features with SWE team, then conveyed technical decisions and progress to executive and design teams.",
      descBullets: [
        "User sign-up/login flow (generate and refresh FB/IG access tokens, link Snapchat, TikTok, Twitter accounts)",
        "Forgot password feature that uses Twilio API to verify and reset user’s password",
        "Pipeline and frontend for image/video upload and streaming using AWS lambda and boto3 – Determined optimal video compression rate to improve upload time by 51%.",
        "Incorporated feature to tag public users and friends in posts and captions, as well as edit posts and dynamically rearrange tags via tap and drag",
        "Implemented user phone authentication using Twilio Python API and option to invite users to app via SMS"
      ]
    },
    {
      role: "Data Scientist",
      company: "Tagg",
      companylogo: require("./assets/images/taggLogo.png"),
      date: "Feb – Dec 2020",
      desc: "Led 3 data scientists and collaborated with 5 SWEs to develop cross platform mobile social media app",
      descBullets: [
        "Developed deep learning model that recommends content to users using live data from multiple social media streams via collaborative filtering and sentiment analysis",
        "Prompted 36% increase in relevance of posts based on in-app user feedback",
        "Created boilerplate code and testing/development environments with Yarn, CocoaPods, NodeJS, Django"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out with questions or work opportunities.",
  number: "3103457389",
  email_address: "grusu6928@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  education,
  languages,
  workExperiences,
  openSource,
  contactInfo,
};