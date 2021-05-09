const data = {
  header: {
    title: "Projects",
    desc:
      "In my free time, I like to <TextWave text='wave' /> my wand and cast away newly discovered spells to build projects. Here are a few.",
    img_path: "/src/assets/projects-harry-potter.gif",
  },
  projects: [
    {
      name: "Yeshi Social Cookbook",
      img: "projects-yeshi.gif",
      stack: [
        "React",
        "Node.js/Express.js REST API",
        "MongoDB",
        "AWS S3 for image hosting",
        "GCloud Vision for text recongition",
        "JWT user authentication",
        "Netlify serverless functions",
      ],
      desc:
        "A social cookbook manager. <strong>Motivation</strong>: I made this for my families to share our home recipes. <strong>Features</strong>: upload and convert handwritten recipes to text, create and share cookbooks with user permissions, add images, track items you have in stock, add recipe to grocery list to auto update ingredients you're missing.",
    },
    {
      name: "ChainReact",
      img: "projects-chainreact.gif",
      stack: [
        "Python",
        "TypeScript",
        "Blockchain using <a href='https://docs.ont.io'>Ontology</a> for smart contract development",
      ],
      desc:
        "<b>Winner @ CryptoChicks Hack 2019</b> — Emergency response system connecting bystanders of cardiac arrest to a network of CPR certified volunteers.",
    },
    {
      name: "SnapSaver",
      img: "projects-snapsaver.jpg",
      stack: ["Python", "Flask", "AWS EC2", "SMTP for emails"],
      desc:
        "Simple web and CLI tool to bulk download your Snapchat Memories. <strong>Motivation</strong>: Snapchat makes you download your media one by one. As there's no tool to mass download them, I built one. <strong>Features</strong>: resuming download, file and ZIP handling, optionally receiving email with ZIP once complete.",
    },
    {
      name: "UofT Cannonball Website",
      img: "projects-cannonball.gif",
      stack: [
        "React",
        "Node.js/Express.js REST API",
        "MongoDB",
        "Stripe API",
        "Gmail API",
        "JWT user authentication",
        "Netlify serverless functions",
      ],
      desc:
        "Event + ticketing app for a University of Toronto engineering event. <strong>Features</strong>: Choose Your Adventure game, admin dashboard, Stripe payments and Gmail confirmation emails.",
    },
    {
      name: "UofT Locker Rental",
      img: "projects-lockers.png",
      stack: ["MySQL", "PHP (limited Apache servers, what can ya do)", "Material UI", "JavaScript"],
      desc: "Locker rental booking website for the University of Toronto Engineering Society, overhauling previous system. <strong>Features</strong>: user registration + login, booking system, user dashboard for managing profile and locker status, and admin dashboard for managing students, lockers, booking approval, and admin permissions.",
    },
    {
      name: "Othello AI",
      img: "projects-othello.gif",
      stack: ["Python"],
      desc:
        "Othello game-playing AI. Made using minimax with iterative deepening depth-first search and alpha-beta pruning algorithms.",
    },
    {
      name: "Rubik",
      img: "projects-rubik.jpg",
      stack: ["JavaScript", "<a href='https://threejs.org'>Three.js</a> for 3D graphics", "jQuery"],
      desc: "Interactive 3D rubik's cube with built-in solver.",
    },
    {
      name: "Educate Me",
      img: "projects-educate.jpg",
      stack: ["JavaScript", "Node.js for web crawling"],
      desc:
        "Explore the depth of internet knowledge, one randomly generated TED Talk or article at a time.",
    },
    {
      name: "GIS Mapping Desktop App",
      img: "projects-mapper.gif",
      stack: ["C++", "EZGL UI", "OpenStreetMap data"],
      desc:
        "GIS city mapping application, implementing pathfinding algorithm based on A* Search and Dijkstra’s algorithms.",
    },
    {
      name: "Weather Genie",
      img: "projects-weather.jpg",
      stack: ["React", "JavaScript", "Meteostat API", "Unsplash API"],
      desc: "Compare weather across cities.",
    },
    // {
    //   name: "Hangry UofT",
    //   img: "projects-hangry.gif",
    //   stack: ["JavaScript", "MySQL", "Google Maps API", "CSS"],
    //   desc:
    //     "A Yelp-style website of all dining options at University of Toronto St. George.",
    // },
    {
      name: "Spotify-themed Personal Website",
      img: "projects-spotify.gif",
      stack: [
        "JavaScript",
        "CSS",
        "<a href='https://github.com/dragonman225/notablog'>Notablog</a>",
      ],
      desc:
        "Version 23497 of my website (I've lost count) and my personal favorite! I wanted to integrate Notion as the CMS since it's my go-to for everything. Spotify is my love and adding the playable song is a lil homage to my Tumblr blog customization days :)",
    },
    {
      name: "Yet Another Personal Website",
      img: "projects-personal-vue.png",
      stack: [
        "Vue",
        "JavaScript",
        "<a href='https://github.com/eggplanetio/gustavo'>Gustavo</a>",
        "AWS EC2",
        "CSS",
      ],
      desc:
        "I had just discovered the joys of Github's gists so I wanted to use it for my writing and also experiment with a self-hosting setup with AWS EC2.",
    },
  ],
};

export default data;
