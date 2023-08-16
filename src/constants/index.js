import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    
    carrent,
    
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      
      icon: reactjs,
      iconBg: "#383E56",
      date: "April 2023 - present",
      points: [
        "Started learning React outoff curiosity but now its love",
        "created various small projects on React which are available on my github profile",
        "Also good at vanilla javascript"
        
      ],
    },
    {
      title: "Android Developer",
      
      
      iconBg: "#E6DEDD",
      date: "Dec-2022 - present",
      points: [
        "Developed various Android application ",
        "successfully developed and food delivery App with backend using firebase",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Dsa problem solver",
      company_name: "leetcode",
       
      iconBg: "black",
      date: "april 2023",
      points: [
        "Solve questions on leetcode using c++",
        "Going to solve 600 questions in less than 6 months ",
        "you chechkout my leetcode profile - harshen03"
      ],
    },
    {
      title: "your software Developer",
      company_name: "ours loving company",
      
      iconBg: "#383E56",
      date: "from Now - infinity",
      points: [
        "we can create some good projects which can generate huge profit to company",
        "Eager to join you there",
      
      ],
    },
    
  ];
  
  const testimonials = [

  ];
  
  const projects = [
    {
      name: "Blog-Site",
      description:
        "A blog site where you create your blog edit it delete it and have fun ",
      tags: [
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "EJS",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/Harshshen/Blog-site-using-node-and-ejs",
    },
    {
      name: "cool projects",
      description:
        "Have a look on my Github profile you will find how many technologies I know I had work with",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
     
      source_code_link: "https://github.com/Harshshen",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };