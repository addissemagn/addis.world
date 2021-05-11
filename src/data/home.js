const data = {
  sections: {
    intro: {
      name: "Addis Semagn",
      desc:
        "Composing melodies from ones and zeroes and teaching computers how to <span className='text-wave'>dance</span>.",
      // sub: "<span class='small'>Is your company hiring? You should consider <a>these amazing developers</a>.</span>"
    },
    current: {
      title: "What I'm doing",
      // desc: "(Kindly) tell computers what to do as a:",
    },
    experiences: {
      title: "What I've done",
      desc:
        "I love the process of imagining better futures and coding them into existence. I've shipped end-to-end products in backend, full-stack, and infrastructure roles at companies of all sizes.",
    },
    callToAction: {
      title: "What can we do together?",
      desc:
        "I'm always looking to meet people, whether to learn about each other, interesting topics, or exciting opportunities. Have something in mind? Drop me a note asemagn@gmail.com.",
    },
  },
  current: [
    "Software Engineering at <a href='https://microsoft.com'><strong>Microsoft</strong></a>",
    "Computer Engineering '22 at the <a href='https://www.engineering.utoronto.ca'><strong>University of Toronto</strong></a>",
  ],
  experiences: [
    {
      company: "Microsoft",
      url: "https://microsoft.com",
      position: "Software Engineer Intern",
      date: "Summer 2021",
      tag: "Current",
      desc:
        "Developing and shipping a new Microsoft product offering in 13 weeks.",
    },
    {
      company: "Cash App, Square",
      url: "https://cash.app",
      position: "Software Engineer Intern",
      date: "Winter 2021",
      desc:
        "Product server engineer on the Commerce team, building new retail payment experiences for Cash App users.",
    },
    {
      company: "Uplift",
      url: "https://uplift.com",
      position: "Software Engineer Intern",
      date: "Fall 2020",
      desc:
        "Scaled the operations web app for travel financing services, implementing system to manage sensitive customer data and a kill switch for point-of-sale.",
    },
    {
      company: "RelayPay",
      url: "https://relaypay.io",
      position: "Software Engineer Intern",
      date: "Summer 2020",
      desc:
        "Pioneered the development of the e-commerce dashboard & expanded merchant-facing API for businesses to accept crypto payments. Wore many hats, including deploying an internal mail server and the first log monitoring."
    },
    {
      company: "Shopify",
      url: "https://shopify.com",
      position: "Software Engineer Intern",
      date: "Fall 2021",
      tag: "Future",
      desc: "Infrastructure & site reliability engineer, making commerce better for everyone.",
    },
  ],
  // Each string represents a line break
  about: {
    bio: [
      // "First sentence embedded in /src/pages/home.js",
      "I'm from Addis Ababa, Ethiopia and have been calling Toronto home since 2013. Though I've lived in 5 countries, my proficiencies in computer languages far outnumber my spoken ones.",
      "I first learned programming in my first-year intro to C course. My endless curiosity met with this new power to make led to many late nights of tinkering and a passion was born (this is starting to sound like a romance).",
      "Ultimately, I'm driven by relationships, experiences, and growth. I believe in the power of empowering others, just as wonderful people and opportunities have empowered me.",
      "I want to build software that enables people to take control of their lives. To make tech more accessible to underrepresented communities. To learn exciting things and share that excitement with others. To live a life generous in giving.",
    ],
    interests: [
      "Collecting hobbies. Lately, I've gotten back into writing songs and playing electric guitar, and been <del>taking L's</del> learning how to skateboard. I also like <a href='/art'>making art</a>, though I do a lot less of that these days.",
      "Discovering music ♪٩(✿′ᗜ‵✿)۶♪ and making <a href='https://open.spotify.com/user/heyaddis'>Spotify playlists</a>.",
      "Evangelizing vim and key bindings. Trust me, I didn't think I'd be that person either.",
      "Tasteful stationery. This A6 <a href='https://itoya.com/products/notebooks-journals/profolio-oasis-notebook/'>Itoya Oasis</a> notebook is my current sidekick; lovely lined/graph/dot paper pattern.",
      "Financial technology and literacy."
    ],
  },
};

export default data;
