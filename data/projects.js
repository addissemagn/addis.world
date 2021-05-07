const data = {
  header: {
    title: "Projects",
    desc:
      "In my free time, I like to <TextWave text='wave' /> my wand and cast away newly discovered spells to build projects. Here are a few.",
    img: "/assets/projects-harry-potter.gif",
  },
  projects: [
    {
      name: "ChainReact",
      path: "/assets/projects-chainreact.gif",
      stack: [
        "Python",
        "TypeScript",
        "Blockchain using <a href='https://docs.ont.io'>Ontology</a> for smart contract development",
      ],
      desc:
        "<b>Winner @ CryptoChicks Hack 2019</b> — Emergency response system connecting bystanders of cardiac arrest to a network of CPR certified volunteers.",
    },
    {
      name: "Yeshi Social Cookbook",
      path: "/assets/projects-yeshi.gif",
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
        "A social cookbook manager I made for my families to share our home recipes. <strong>Features</strong>: upload recipes from handwriting, add images, create and share cookbooks, track pantry items, add recipe to grocery list to auto update missing ingredients.",
    },
    {
      name: "SnapSaver",
      path: "/assets/projects-snapsaver.jpg",
      stack: ["Python", "Flask", "AWS EC2", "SMTP for emails"],
      desc:
        "Simple web and CLI tool to bulk download your Snapchat Memories. <strong>Motivation</strong>: Snapchat makes you download your media one by one. As there's no tool to mass download them, I built one. <strong>Features</strong>: resuming download, file and ZIP handling, optionally receiving email with ZIP once complete.",
    },
    {
      name: "Spotify-themed Personal Website",
      path: "/assets/projects-spotify.gif",
      stack: [
        "JavaScript",
        "CSS",
        "<a href='https://github.com/dragonman225/notablog'>Notablog</a>",
      ],
      desc:
        "This was version 23497 of my website (I've lost count), integrated with Notion as the CMS. Archived for now but my personal favorite :)",
    },
    {
      name: "Cannonball Website",
      path: "/assets/projects-cannonball.gif",
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
        "Event/ticketing app for University of Toronto engineering event. <strong>Features not shown</strong>: Choose Your Adventure game, admin dashboard.",
    },
    {
      name: "Educate Me",
      path: "/assets/projects-educate.jpg",
      stack: ["JavaScript", "Node.js"],
      desc:
        "Explore the depth of internet knowledge, one randomly generated TED Talk or article at a time.",
    },
    {
      name: "GIS Mapping Desktop App",
      path: "/assets/projects-mapper.gif",
      stack: ["C++", "EZGL UI", "OpenStreetMap data"],
      desc:
        "GIS city mapping application, implementing pathfinding algorithm based on A* Search and Dijkstra’s algorithms.",
    },
    {
      name: "Othello AI",
      path: "/assets/projects-othello.gif",
      stack: ["Python"],
      desc:
        "Othello game-playing AI. Made using minimax with iterative deepening depth-first search and alpha-beta pruning algorithms.",
    },
    {
      name: "Weather Genie",
      path: "/assets/projects-weather.jpg",
      stack: ["React", "JavaScript", "Meteostat API", "Unsplash API"],
      desc: "Compare weather across cities.",
    },
    {
      name: "Rubik",
      path: "/assets/projects-rubik.jpg",
      stack: ["JavaScript", "Three.js", "jQuery"],
      desc: "Interactive 3D rubik's cube with built-in solver.",
    },
    {
      name: "Hangry UofT",
      path: "/assets/projects-hangry.gif",
      stack: ["JavaScript", "MySQL", "Google Maps API", "CSS"],
      desc:
        "A Yelp-style website of all dining options at University of Toronto St. George.",
    },
    {
      name: "Personal Website",
      path: "/assets/projects-personal-vue.png",
      stack: [
        "JavaScript",
        "Vue",
        "<a href='https://github.com/eggplanetio/gustavo'>Gustavo</a>",
        "AWS EC2",
        "CSS",
      ],
      desc:
        "Yet another one. This one I wanted to use Github's gists for my writing and self-host using AWS EC2.",
    },
  ],
};

export default data;
