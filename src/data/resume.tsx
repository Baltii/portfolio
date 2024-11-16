import { Icons } from "@/components/icons";
import { DribbbleIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmed Balti",
  initials: "AB",
  url: "https://baltii.me",
  location: "Tunis",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Full Stack Developer and Creative UI Designer passionate about building scalable web & mobile applications using modern technologies.",
  summary:
    "I'm a passionate full stack developer with over 3 years of experience building web and mobile applications. I specialize in creating scalable solutions using modern technologies like React, NextJS, and Node.js. I have a strong foundation in both frontend and backend development, with expertise in TypeScript, PostgreSQL, and cloud services. I enjoy tackling complex technical challenges and continuously learning new technologies to stay at the forefront of web development. When I'm not coding, I contribute to open source projects and mentor junior developers in my community.",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "Angular",
    "React",
    "Java",
    "Chakra UI",
    "Framer Motion",
    "Express JS",
    "Shadcn UI",
    "SCSS",
    "Tailwind CSS",
    "React Native",
    "Flutter",
    "Android Studio",
    "Kotlin",
    "TypeScript",
    "NodeJS",
    "NestJS",
    "Supabase",
    "Firebase",
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
    "ClickUp",
    "PostgreSQL",
    "MongoDB",
    "Figma",
    "Design System",
    "Branding",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "baltii.ahmed@gmail.com",
    tel: "+216 55 850 264",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Baltii",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ahmedbalti",
        icon: Icons.linkedin,
        navbar: true,
      },
      Dribbble: {
        name: "Dribbble",
        url: "https://dribbble.com/BaltiiTN",
        icon: DribbbleIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "LoCoNET GmbH",
      href: "https://www.loconet.info/",
      badges: [],
      location: "Berlin, Germany",
      title: "Web Developer",
      logoUrl: "/loconet.png",
      start: "March 2024",
      end: "Present",
      description:
        "Developing responsive and interactive web applications using Next.js 14 and Supabase. Building RESTful APIs and server-side logic with Node.js. Implementing secure, efficient data storage and management solutions with Supabase. Collaborating with cross-functional teams to meet project requirements and deliver exceptional user experiences.",
    },
    {
      company: "Neocortex Technologies",
      href: "https://neocortex-technologies.com/",
      badges: [],
      location: "Tunis, Tunisia",
      title: "Angular Developer & UI Designer",
      logoUrl: "/neocortex.png",
      start: "February 2023",
      end: "July 2024",
      description:
        "Designed and implemented over 40 creative interfaces for an event management platform. Developed various components, services, modules, guards, routes, pipes, etc., ensuring a robust and scalable architecture. Applied my skills in Figma and frontend UI/UX development to create visually appealing and user-friendly website designs, elevating the overall quality of the site. Collaborated seamlessly with the team to synchronize work and deliver a bug-free user experience.",
    },
    {
      company: "RedSpear Studios",
      href: "https://redspear.netlify.app/",
      badges: [],
      location: "Berlin, Germany",
      title: "Co-Founder and Creative Director",
      logoUrl: "/redspear.png",
      start: "March 2022",
      end: "September 2023",
      description:
        "Graphic Designer with a dynamic background in the vibrant realm of game development, contributing creative prowess to immersive gaming experiences. Executed a diverse range of graphic design projects, including character design, UI elements, promotional materials, and in-game assets. Adapted design skills to the unique challenges of game development, integrating both artistic vision and technical requirements for optimal player engagement",
    },
    {
      company: "AJico Group",
      href: "https://www.ajico.pro/",
      badges: [],
      location: "Ariana, Ariana, Tunisia",
      title: "Web Developer",
      logoUrl: "/ajico.png",
      start: "January 2022",
      end: "June 2022",
      description:
        "Worked closely with the AJICO team to design and develop the 'Japan New Year' event's promotional website using React, SCSS and Chakra UI. Developed the needed client communication backend services using Node JS, Express JS and MongoDB and MySQL. Created stunning graphic assets for a Japan celebration event, blending creativity and precision.",
    },
    {
      company: "CIN Group",
      href: "https://www.linkedin.com/company/cin-investment-group/",
      badges: [],
      location: "El Menzah, Tunis, Tunisia",
      title: "Web Developer",
      logoUrl: "/cin.png",
      start: "August 2021",
      end: "December 2021",
      description:
        "During my tenure at CIN Group, working alongside my esteemed colleagues, I embarked on a dynamic learning journey in the realm of web development to make a secure Investment platform. I was responsible for designing and developing the frontend and backend of the platform, ensuring a seamless user experience and robust security measures. My role involved collaborating closely with the team to implement new features and continuously improving the platform's performance and security.",
    },
    {
      company: "Smart Kokusai",
      href: "https://www.netinfo.tn/",
      badges: [],
      location: "Rades, Tunis, Tunisia",
      title: "Web Designer & React Developer",
      logoUrl: "/smart_kokusai.png",
      start: "June 2020",
      end: "August 2020",
      description:
        "Developed the front end of websites using React and added animations using Framer Motion, CSS animations and Chakra UI",
    },
  ],
  education: [
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Master's degree in Computer Science",
      logoUrl: "/iset.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Higher Institute of Technological Studies of Rades",
      href: "https://www.isetr.rnu.tn",
      degree: "Bachelor's degree in Information Technology",
      logoUrl: "/iset.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "YKifech",
      href: "",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "YKifech is a smart social discovery app that helps users find the perfect place to go out with friends or family based on their current mood or needs, with a focus on user-friendly interfaces. Built using Expo for mobile and Next.js for web components.",
      technologies: [
        "Next.js",
        "Expo",
        "React Native",
        "TypeScript",
        "Supabase",
      ],
      image: "/ykifech.png",
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Baltii/ykifech",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Eventy",
      href: "",
      dates: "February 2024 - May 2024",
      active: true,
      description:
        "Eventy is a B2B event management platform designed to streamline the planning, organization, and execution of business events. It provides tools for managing registrations, scheduling, attendee engagement, and post-event analytics.",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      image: "/eventy.jpg",
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Baltii/eventy",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Binomi",
      href: "",
      dates: "September 2023 - December 2023",
      active: false,
      description:
        "Binomi is an innovative application for student accommodation and roommate search. It acts as a specialized tool to facilitate the search, selection and cohabitation of shared accommodation.",
      technologies: ["Flutter", "NestJS", "PostgreSQL"],
      image: "/binomi.png",
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Baltii/binomi",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Dashify",
      href: "",
      dates: "January 2023 - June 2023",
      active: false,
      description:
        "Dashify is a no code dashboard builder that helps customers build their own dashboard with no development skills needed to visualize their business status with charts.",
      technologies: ["Angular", "Spring Boot", "Flask"],
      image: "/dashify.png",
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Baltii/dashify",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Nursini",
      href: "",
      dates: "January 2022 - June 2022",
      active: false,
      description:
        "Nursini is a web application that allows users to manage their health and fitness goals.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/nursini.jpg",
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Baltii/nursini",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
  certifications: [
    {
      title: "MongoDB Node.js Developer Path",
      issuer: "MongoDB",
      date: "January 2024",
      image: "/mongodb.png",
    },
    {
      title: "Swift Workshop",
      issuer: "Orange Tunisie",
      date: "March 2024",
      image: "/orange.png",
    },
    {
      title: "Graphic Design MasterClass",
      issuer: "Udemy",
      date: "November 2021",
      image: "/udemy.png",
    },
  ],
  awards: [
    {
      title: "3rd Place in AR/VR Africa",
      issuer: "NETINFO",
      date: "March 2023",
      image: "/netinfo.png",
    },
  ],
} as const;

// export const DATA = {
//   name: "Dillion Verma",
//   initials: "DV",
//   url: "https://dillion.io",
//   location: "San Francisco, CA",
//   locationLink: "https://www.google.com/maps/place/sanfrancisco",
//   description:
//     "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
//   summary:
//     "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
//   avatarUrl: "/me.png",
//   skills: [
//     "React",
//     "Next.js",
//     "Typescript",
//     "Node.js",
//     "Python",
//     "Go",
//     "Postgres",
//     "Docker",
//     "Kubernetes",
//     "Java",
//     "C++",
//   ],
//   navbar: [
//     { href: "/", icon: HomeIcon, label: "Home" },
//     { href: "/blog", icon: NotebookIcon, label: "Blog" },
//   ],
//   contact: {
//     email: "hello@example.com",
//     tel: "+123456789",
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "https://dub.sh/dillion-github",
//         icon: Icons.github,

//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "https://dub.sh/dillion-linkedin",
//         icon: Icons.linkedin,

//         navbar: true,
//       },
//       X: {
//         name: "X",
//         url: "https://dub.sh/dillion-twitter",
//         icon: Icons.x,

//         navbar: true,
//       },
//       Youtube: {
//         name: "Youtube",
//         url: "https://dub.sh/dillion-youtube",
//         icon: Icons.youtube,
//         navbar: true,
//       },
//       email: {
//         name: "Send Email",
//         url: "#",
//         icon: Icons.email,

//         navbar: false,
//       },
//     },
//   },

//   work: [
//     {
//       company: "Atomic Finance",
//       href: "https://atomic.finance",
//       badges: [],
//       location: "Remote",
//       title: "Bitcoin Protocol Engineer",
//       logoUrl: "/atomic.png",
//       start: "May 2021",
//       end: "Oct 2022",
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     },
//     {
//       company: "Shopify",
//       badges: [],
//       href: "https://shopify.com",
//       location: "Remote",
//       title: "Software Engineer",
//       logoUrl: "/shopify.svg",
//       start: "January 2021",
//       end: "April 2021",
//       description:
//         "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
//     },
//     {
//       company: "Nvidia",
//       href: "https://nvidia.com/",
//       badges: [],
//       location: "Santa Clara, CA",
//       title: "Software Engineer",
//       logoUrl: "/nvidia.png",
//       start: "January 2020",
//       end: "April 2020",
//       description:
//         "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
//     },
//     {
//       company: "Splunk",
//       href: "https://splunk.com",
//       badges: [],
//       location: "San Jose, CA",
//       title: "Software Engineer",
//       logoUrl: "/splunk.svg",
//       start: "January 2019",
//       end: "April 2019",
//       description:
//         "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
//     },
//     {
//       company: "Lime",
//       href: "https://li.me/",
//       badges: [],
//       location: "San Francisco, CA",
//       title: "Software Engineer",
//       logoUrl: "/lime.svg",
//       start: "January 2018",
//       end: "April 2018",
//       description:
//         "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
//     },
//     {
//       company: "Mitre Media",
//       href: "https://mitremedia.com/",
//       badges: [],
//       location: "Toronto, ON",
//       title: "Software Engineer",
//       logoUrl: "/mitremedia.png",
//       start: "May 2017",
//       end: "August 2017",
//       description:
//         "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
//     },
//   ],
//   education: [
//     {
//       school: "Buildspace",
//       href: "https://buildspace.so",
//       degree: "s3, s4, sf1, s5",
//       logoUrl: "/buildspace.jpg",
//       start: "2023",
//       end: "2024",
//     },
//     {
//       school: "University of Waterloo",
//       href: "https://uwaterloo.ca",
//       degree: "Bachelor's Degree of Computer Science (BCS)",
//       logoUrl: "/waterloo.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "Wilfrid Laurier University",
//       href: "https://wlu.ca",
//       degree: "Bachelor's Degree of Business Administration (BBA)",
//       logoUrl: "/laurier.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "International Baccalaureate",
//       href: "https://ibo.org",
//       degree: "IB Diploma",
//       logoUrl: "/ib.png",
//       start: "2012",
//       end: "2016",
//     },
//   ],
//   projects: [
//     {
//       title: "Chat Collect",
//       href: "https://chatcollect.com",
//       dates: "Jan 2024 - Feb 2024",
//       active: true,
//       description:
//         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://chatcollect.com",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
//     },
//     {
//       title: "Magic UI",
//       href: "https://magicui.design",
//       dates: "June 2023 - Present",
//       active: true,
//       description:
//         "Designed, developed and sold animated UI components for developers.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://magicui.design",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/magicuidesign/magicui",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.magicui.design/bento-grid.mp4",
//     },
//     {
//       title: "llm.report",
//       href: "https://llm.report",
//       dates: "April 2023 - September 2023",
//       active: true,
//       description:
//         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://llm.report",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/dillionverma/llm.report",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.llm.report/openai-demo.mp4",
//     },
//     {
//       title: "Automatic Chat",
//       href: "https://automatic.chat",
//       dates: "April 2023 - March 2024",
//       active: true,
//       description:
//         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://automatic.chat",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
//     },
//   ],
//   hackathons: [
//     {
//       title: "Hack Western 5",
//       dates: "November 23rd - 25th, 2018",
//       location: "London, Ontario",
//       description:
//         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 14th - 16th, 2018",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mobile application which delivers university campus wide events in real time to all students.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "FirstNet Public Safety Hackathon",
//       dates: "March 23rd - 24th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
//       icon: "public",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
//       links: [],
//     },
//     {
//       title: "DeveloperWeek Hackathon",
//       dates: "February 3rd - 4th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
//       links: [
//         {
//           title: "Github",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/cryptotrends/cryptotrends",
//         },
//       ],
//     },
//     {
//       title: "HackDavis",
//       dates: "January 20th - 21st, 2018",
//       location: "Davis, California",
//       description:
//         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
//       win: "Best Data Hack",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/my6footprint",
//         },
//         {
//           title: "ML",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/my6footprint-machine-learning",
//         },
//         {
//           title: "iOS",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/CarbonWallet",
//         },
//         {
//           title: "Server",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/wallet6-server",
//         },
//       ],
//     },
//     {
//       title: "ETH Waterloo",
//       dates: "October 13th - 15th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
//       links: [
//         {
//           title: "Organization",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ethdocnet",
//         },
//       ],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 15th - 17th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a virtual reality application allowing users to see themselves in third person.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Streamer Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/htn2017",
//         },
//         {
//           title: "Client Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/RTSPClient",
//         },
//       ],
//     },
//     {
//       title: "Hack The 6ix",
//       dates: "August 26th - 27th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ShareShip/ShareShip",
//         },
//         {
//           title: "Site",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://share-ship.herokuapp.com/",
//         },
//       ],
//     },
//     {
//       title: "Stupid Hack Toronto",
//       dates: "July 23rd, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/nsagirlfriend/nsagirlfriend",
//         },
//       ],
//     },
//     {
//       title: "Global AI Hackathon - Toronto",
//       dates: "June 23rd - 25th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/TinySamosas/",
//         },
//       ],
//     },
//     {
//       title: "McGill AI for Social Innovation Hackathon",
//       dates: "June 17th - 18th, 2017",
//       location: "Montreal, Quebec",
//       description:
//         "Developed realtime facial microexpression analyzer using AI",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//       links: [],
//     },
//     {
//       title: "Open Source Circular Economy Days Hackathon",
//       dates: "June 10th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/genecis",
//         },
//       ],
//     },
//     {
//       title: "Make School's Student App Competition 2017",
//       dates: "May 19th - 21st, 2017",
//       location: "International",
//       description: "Improved PocketDoc and submitted to online competition",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//       win: "Top 10 Finalist | Honourable Mention",
//       links: [
//         {
//           title: "Medium Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//         },
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "HackMining",
//       dates: "May 12th - 14th, 2017",
//       location: "Toronto, Ontario",
//       description: "Developed neural network to optimize a mining process",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//       links: [],
//     },
//     {
//       title: "Waterloo Equithon",
//       dates: "May 5th - 7th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "SpaceApps Waterloo",
//       dates: "April 28th - 30th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/earthwatch",
//         },
//       ],
//     },
//     {
//       title: "MHacks 9",
//       dates: "March 24th - 26th, 2017",
//       location: "Ann Arbor, Michigan",
//       description:
//         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/threejs-planes",
//         },
//       ],
//     },
//     {
//       title: "StartHacks I",
//       dates: "March 4th - 5th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
//       win: "1st Place Winner",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-ionic",
//         },
//         {
//           title: "Source (Server)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-rails",
//         },
//       ],
//     },
//     {
//       title: "QHacks II",
//       dates: "February 3rd - 5th, 2017",
//       location: "Kingston, Ontario",
//       description:
//         "Developed a mobile game which enables city-wide manhunt with random lobbies",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/human-huntr-react-native",
//         },
//         {
//           title: "Source (API)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/human-huntr-rails",
//         },
//       ],
//     },
//     {
//       title: "Terrible Hacks V",
//       dates: "November 26th, 2016",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mock of Windows 11 with interesting notifications and functionality",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//         },
//       ],
//     },
//     {
//       title: "Portal Hackathon",
//       dates: "October 29, 2016",
//       location: "Kingston, Ontario",
//       description:
//         "Developed an internal widget for uploading assignments using Waterloo's portal app",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/UWPortalSDK/crowmark",
//         },
//       ],
//     },
//   ],
// } as const;
