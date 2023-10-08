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
    ejs,
    expressJS,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    givenergy,
    tesla,
    shopify,
    yelpcamp,
    citybuilder,
    tripguide,
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
      title: "Content Creator",
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
      title: "Software Developer",
      company_name: "GivEnergy",
      icon: givenergy,
      iconBg: "#FFFFFF",
      date: "Jan 2021 - Dec 2022",
      points: [
        "Develop Android and iOS applications using Flutter, Swift,  Java and Xcode, delivering stable, testable, and maintainable software applications.",
        "Support with the entire application lifecycle including concept, design, testing, release.",
        "Run a variety of software testing procedures including writing unit and UI tests to identify malfunctions and bugs, before designing and implementing innovate solutions to solve them.",
        "Research, recommend and implement new technologies to increase app development productivity.",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Yelp Camp",
      description:
        "Web-based platform that allows users find available campgrounds anywhere in the world.",
      tags: [
        {
          name: "ejs",
          color: "pink",
          image: ejs
        },
        {
          name: "NodeJS",
          color: "blue",
          image: nodejs
        },
        {
          name: "ExpressJS",
          color: "blue",
          image: expressJS
         
        },
        {
          name: "mongodb",
          color: "green",
          image: mongodb
        },
        
      ],
      image: yelpcamp,
      source_code_link: "https://github.com/martinkong0806/yelpcamp",
      webpage_link : "https://yelp-camp-2023-10-04-1a6afc62242a.herokuapp.com/"
    },
    {
      name: "City Builder",
      description:
        "A web based city builder game.",
      tags: [
        {
          name: "ThreeJS",
          color: "pink",
          image: threejs
        },
        {
          name: "NodeJS",
          color: "blue",
          image: nodejs
        },        
      ],
      image: citybuilder,
      source_code_link: "https://github.com/martinkong0806/city-builder-game",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-chip-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };