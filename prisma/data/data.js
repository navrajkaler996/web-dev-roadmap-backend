export const coursesData = [
  {
    id: 0,
    title: "Basics of web",
    description:
      "Before learning web development i.e. developing websites or web applications, you need to understand what is web and how it works.",
  },
  {
    id: 1,
    title: "HTML",
    description:
      "HTML is the foundation of creating web pages. Imagine it as the skeleton of a website that defines the structure and content.",
  },
  {
    id: 2,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used for styling HTML elements. It defines how HTML elements should be displayed on screen, paper, or in other media.",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "JavaScript is a programming language used to create dynamic and interactive effects within web browsers. It enables features like animations, user interactions, and dynamic content updates.",
  },
  {
    id: 4,
    title: "Frontend framework",
    description:
      "Frontend frameworks like React, Angular, and Vue.js provide structured ways to build interactive user interfaces. They often include tools for state management, routing, and component-based architecture.",
    module: true,
  },
  {
    id: 5,
    title: "CSS frameworks",
    description:
      "CSS frameworks like Bootstrap and Foundation provide pre-written CSS and JavaScript that can be used to create responsive and attractive web designs quickly.",
    module: true,
  },
  {
    id: 6,
    title: "CSS preprocessors",
    description:
      "CSS preprocessors like Sass and Less extend CSS with features like variables, nested rules, and mixins, making CSS more maintainable and easier to write.",
  },
  {
    id: 7,
    title: "Version control systems",
    description:
      "Version control systems like Git help developers track changes to their codebase, collaborate with others, and revert to previous versions when needed. Git is widely used in both small and large-scale software development projects.",
  },
  {
    id: 8,
    title: "Module bundlers",
    description:
      "Module bundlers like Webpack and Parcel.js take JavaScript and CSS modules with dependencies and generate optimized bundles for deployment. They improve performance by reducing file size and optimizing loading times.",
  },
  {
    id: 15,
    title: "Node.js",
    description:
      "Node.js is a server-side JavaScript runtime that allows developers to build scalable and fast network applications. It uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient.",
  },
  {
    id: 16,
    title: "REST API",
    description:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on resources.",
  },
  {
    id: 17,
    title: "Intro to database",
    description:
      "An introduction to databases covers the basics of data storage, retrieval, and management. It introduces concepts like relational and NoSQL databases, SQL vs NoSQL, and database design principles.",
  },
  {
    id: 18,
    title: "Databases",
    description:
      "Databases are essential for storing, managing, and retrieving data in web applications. This course covers relational databases (SQL) and NoSQL databases, along with database design, querying, and optimization.",
    module: true,
  },
];

export const topicsData = [
  {
    courseId: 0,
    name: "How internet works?",
    level: "red",
  },
  { courseId: 0, name: "What is HTTP/HTTPS?", level: "red" },
  { courseId: 0, name: "How browsers work?", level: "red" },
  { courseId: 0, name: "What is web hosting?", level: "red" },
  { courseId: 0, name: "What is DNS and how it works", level: "yellow" },

  {
    name: "Document Object Model",
    level: "red",
    courseId: 1,
  },
  {
    name: "Understanding HTML tags/elements",
    level: "red",
    courseId: 1,
  },
  {
    name: "Block and inline elements",
    level: "red",
    courseId: 1,
  },
  {
    name: "Semantic vs non-semantic elements",
    level: "red",
    courseId: 1,
  },
  {
    name: "HTML forms",
    level: "red",
    courseId: 1,
  },
  {
    name: "HTML input fields",
    level: "red",
    courseId: 1,
  },
  {
    name: "Semantic vs non-semantic elements",
    level: "red",
    courseId: 1,
  },
  {
    name: "HTML canvas",
    level: "yellow",
    courseId: 1,
  },
  {
    name: "HTML media",
    level: "yellow",
    courseId: 1,
  },
  {
    name: "HTML web storage",
    level: "yellow",
    courseId: 1,
  },
  {
    name: "HTML geolocation API",
    level: "green",
    courseId: 1,
  },
  {
    name: "HTML Drag/Drop",
    level: "green",
    courseId: 1,
  },
  {
    name: "HTML web workers",
    level: "green",
    courseId: 1,
  },
  {
    name: "CSS basics and syntax",
    level: "red",
    courseId: 2,
  },
  // { name: "CSS layouts", level: "red", courseId: 2 },
  { name: "CSS box model", level: "red", courseId: 2 },
  { name: "CSS positions", level: "red", courseId: 2 },
  { name: "CSS typography", level: "red", courseId: 2 },
  { name: "CSS flexbox", level: "red", courseId: 2 },
  { name: "CSS media queries", level: "red", courseId: 2 },
  { name: "CSS background and images", level: "red", courseId: 2 },
  { name: "CSS pseudo elements and classes", level: "yellow", courseId: 2 },
  { name: "Mobile first design", level: "yellow", courseId: 2 },
  { name: "CSS grid", level: "yellow", courseId: 2 },
  { name: "CSS animations", level: "yellow", courseId: 2 },
  { name: "What is JavaScript?", level: "red", courseId: 3 },
  { name: "Variables and data types", level: "red", courseId: 3 },
  { name: "JavaScript control flow", level: "red", courseId: 3 },
  { name: "Functions", level: "red", courseId: 3 },
  { name: "Objects", level: "red", courseId: 3 },
  { name: "Arrays", level: "red", courseId: 3 },
  { name: "Debugging", level: "red", courseId: 3 },
  { name: "Scope and hoisting", level: "red", courseId: 3 },
  { name: "Error handling", level: "red", courseId: 3 },
  { name: "ES6 and beyond", level: "red", courseId: 3 },

  { name: "Error handling", level: "red", courseId: 3 },
  { name: "Prototype", level: "yellow", courseId: 3 },
  { name: "JavaScript Classes", level: "yellow", courseId: 3 },
  { name: "Closure", level: "yellow", courseId: 3 },
  { name: "Higher-order functions", level: "yellow", courseId: 3 },
  { name: "JavaScript date and time", level: "yellow", courseId: 3 },
  { name: "Regular expressions", level: "yellow", courseId: 3 },
  { name: "Function overloading and overriding", level: "green", courseId: 3 },
  { name: "Currying", level: "green", courseId: 3 },
  { name: "IIFE", level: "green", courseId: 3 },
  { name: "JavaScript generators", level: "green", courseId: 3 },
  { name: "React", level: "red", courseId: 4 },
  { name: "Vue.js", level: "green", courseId: 4 },
  { name: "Angular", level: "yellow", courseId: 4 },
  { name: "TailwindCSS", level: "red", courseId: 5 },
  { name: "Bootstrap", level: "green", courseId: 5 },
  { name: "Material UI", level: "green", courseId: 5 },
  { name: "Styled components", level: "yellow", courseId: 5 },
  { name: "Chakra UI", level: "yellow", courseId: 5 },
  { name: "Bulma", level: "yellow", courseId: 5 },
  { name: "SCSS/SASS", level: "red", courseId: 6 },
  { name: "PostCSS", level: "yellow", courseId: 6 },
  { name: "LESS", level: "green", courseId: 6 },
  { name: "LESS", level: "green", courseId: 6 },
  { name: "Github", level: "red", courseId: 7 },
  { name: "GitLab", level: "green", courseId: 7 },
  { name: "Vite", level: "red", courseId: 8 },
  { name: "esbuild", level: "yellow", courseId: 8 },
  { name: "Webpack", level: "green", courseId: 8 },
  { name: "What is Node.js?", level: "red", courseId: 15 },
  { name: "Node Package Manager", level: "red", courseId: 15 },
  { name: "Understand Node.js architecture", level: "red", courseId: 15 },
  { name: "Modules", level: "red", courseId: 15 },
  { name: "Understand Node.js architecture", level: "red", courseId: 15 },
  { name: "Asynchronous programming", level: "red", courseId: 15 },
  { name: "Functional programming", level: "red", courseId: 15 },
  { name: "What is API?", level: "red", courseId: 16 },
  { name: "What is HTTP?", level: "red", courseId: 16 },
  { name: "HTTP headers and methods", level: "red", courseId: 16 },
  { name: "CRUD operations", level: "red", courseId: 16 },
  { name: "Create operation", level: "red", courseId: 16 },
  { name: "Read operation", level: "red", courseId: 16 },
  { name: "Update operation", level: "red", courseId: 16 },
  { name: "Delete operation", level: "red", courseId: 16 },
  { name: "Error handling and status codes", level: "red", courseId: 16 },
  { name: "Authentication methods", level: "red", courseId: 16 },
  {
    name: "Authorization and role-based access control",
    level: "red",
    courseId: 16,
  },
  { name: "Naming conventions", level: "yellow", courseId: 16 },
  { name: "Version APIs", level: "yellow", courseId: 16 },
  { name: "Databases in web development", level: "red", courseId: 17 },
  { name: "Relational databases", level: "red", courseId: 17 },
  { name: "SQL (Structured Query Language)", level: "red", courseId: 17 },
  { name: "NoSQL databases", level: "red", courseId: 17 },
  { name: "ER diagrams", level: "yellow", courseId: 17 },
  { name: "MySQL", level: "red", courseId: 18 },
  { name: "PostgreSQL", level: "red", courseId: 18 },
  { name: "MongoDB", level: "yellow", courseId: 18 },
];

export const userData = [
  {
    firstName: "Navraj",
    email: "navrajkaler996@gmail.com",
    password: "admin",
  },
];

export const courseStartedData = [
  {
    userId: 0,
    courseId: 0,
  },
];

export const courseCompletedData = [
  {
    userId: 0,
    courseId: 1,
  },
];

export const topicLinkData = [
  {
    title: "What Is the Internet? Meaning, Working, and Types",
    link: "https://www.spiceworks.com/tech/networking/articles/what-is-the-internet/",
  },
  {
    title: "How Does the Internet Work?",
    link: "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm",
  },
  {
    title: "How the Internet Works in 4 Minutes | Animation Video",
    link: "https://www.youtube.com/watch?v=Sfzo4xm5eX8",
  },
  {
    title: "What is HTTP?",
    link: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/",
    id: 632,
  },
  {
    title: "What’s the Difference Between HTTP and HTTPS?",
    link: "https://aws.amazon.com/compare/the-difference-between-https-and-http/#:~:text=HTTP%20messages%20are%20plaintext%2C%20which,the%20data%20over%20the%20network.",
    id: 632,
  },
  {
    title: "How Web Browsers Work",
    link: "https://www.youtube.com/watch?v=EoYkl8rwbiM",
    id: 633,
  },
  {
    title: "How does a browser work ? | Engineering side",
    link: "https://www.youtube.com/watch?v=5rLFYtXHo9s",
    id: 633,
  },
  {
    title: "What is Web Hosting and How Does It Work? (For Complete Beginners",
    link: "https://www.youtube.com/watch?v=H8oAvyqQwew",
    id: 634,
  },
  {
    title: "What is Web Hosting?",
    link: "https://www.namecheap.com/hosting/what-is-web-hosting-definition/",
    id: 634,
  },
  {
    title: "What is DNS?",
    link: "https://aws.amazon.com/route53/what-is-dns/",
    id: 635,
  },
  {
    title: "Understanding the DOM — Document Object Model",
    link: "https://www.digitalocean.com/community/tutorial-series/understanding-the-dom-document-object-model",
    id: 636,
  },
  {
    title: "The DOM in 4 minutes",
    link: "https://www.youtube.com/watch?v=KShnPYN-voI",
    id: 636,
  },
  {
    title:
      "HTML Elements Explained: What are HTML Tags and How Do You Use Them?",
    link: "https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/",
    id: 637,
  },
  {
    title: "The Best Guide to HTML Tags",
    link: "https://www.simplilearn.com/tutorials/html-tutorial/html-tags",
    id: 637,
  },
  {
    title: "HTML Element Reference - By Category",
    link: "https://www.w3schools.com/tags/ref_byfunc.asp",
    id: 637,
  },
  {
    title: "Block and Inline Elements",
    link: "http://web.simmons.edu/~grovesd/comm244/notes/week4/block-inline",
    id: 638,
  },
  {
    title: "What Is Semantic HTML?",
    link: "https://www.semrush.com/blog/semantic-html5-guide/?kw=&cmp=CA_SRCH_DSA_Blog_EN&label=dsa_pagefeed&Network=g&Device=c&utm_content=676606881737&kwid=dsa-2185834090056&cmpid=18361978716&agpid=155254833278&BU=Core&extid=105177813309&adpos=&gad_source=1&gclid=CjwKCAjwyo60BhBiEiwAHmVLJZLLCtyV8-w25DcDZsLHGRTXfM50ekrf5cZGfg0iO9Matv8dqaeZyBoCDKYQAvD_BwE",
    id: 639,
  },
  {
    title: "What is semantic tags and non semantic tags in html?",
    link: "https://medium.com/@codagehabitation/what-is-semantic-tags-and-non-semantic-tags-in-html-a60be8caf661",
    id: 639,
  },
  {
    title: "Mastering the HTML Div Element",
    link: "https://blog.hubspot.com/website/what-div-in-html",
    id: 639,
  },
  {
    title:
      "How to use HTML Elements – Headings, Paragraphs, and Text Formatting Elements Example",
    link: "https://www.freecodecamp.org/news/how-to-use-html-elements/",
    id: 639,
  },
  {
    title: "Your first form",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form",
    id: 640,
  },
  {
    title: "Forms Cheatsheet - Learn HTML",
    link: "https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet",
    id: 640,
  },
  {
    title: "Learn HTML Forms In 25 Minutes",
    link: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
    id: 640,
  },
  {
    title: "Your Guide to HTML Input Types",
    link: "https://blog.hubspot.com/website/html-input-types",
    id: 641,
  },
  {
    title: "HTML Select Tag – How to Make a Dropdown Menu or Combo List",
    link: "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/",
    id: 641,
  },
  {
    title:
      "HTML textarea – How to Add a Text Box Input Type Tag to Your Website",
    link: "https://www.freecodecamp.org/news/html-textarea-how-to-add-text-box-to-your-website/",
    id: 641,
  },
  {
    title: "HTML Tutorial #27 - HTML Input Types Attributes Explained",
    link: "https://www.youtube.com/watch?v=Og8HfI53M2Y",
    id: 641,
  },
  {
    title: "HTML Canvas: How to Get Started",
    link: "https://blog.hubspot.com/website/html-canvas",
    id: 643,
  },
  {
    title: "A full overview of HTML Canvas",
    link: "https://www.freecodecamp.org/news/full-overview-of-the-html-canvas-6354216fba8d/",
    id: 643,
  },
  {
    title: "HTML5 Canvas CRASH COURSE for Beginners",
    link: "https://www.youtube.com/watch?v=Yvz_axxWG4Y",
    id: 643,
  },
  {
    title: "HTML Video",
    link: "https://www.programiz.com/html/video",
    id: 644,
  },
  {
    title: "HTML Audio",
    link: "https://www.programiz.com/html/audio",
    id: 644,
  },
  {
    title: "HTML SVG",
    link: "https://www.programiz.com/html/svg",
    id: 644,
  },
  {
    title:
      "Web Storage Explained – How to Use localStorage and sessionStorage in JavaScript Projects",
    link: "https://www.freecodecamp.org/news/web-storage-localstorage-vs-sessionstorage-in-javascript/",
    id: 645,
  },

  {
    title: "HTML5 Geolocation API",
    link: "https://geotargetly.com/html5-geolocation-api",
    id: 646,
  },

  {
    title:
      "HTML Geolocation | HTML Geolocation API | HTML Geolocation Tutorial 2022 | SimpliCode",
    link: "https://www.youtube.com/watch?v=c_pR2Pzj7fo",
    id: 647,
  },

  // {
  //   title:
  //     "",
  //   link: "",
  //   id: ,
  // },

  // {
  //   title:
  //     "",
  //   link: "",
  //   id: ,
  // },
];

// {
//   title:
//     "",
//   link: "",
//   id: ,
// },
