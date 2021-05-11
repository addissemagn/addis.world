import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Nbsp, Styled, TextWave } from "../components/Misc.js";
import Contact from "../components/Contact.js";
import data from "../data/home.js";

// Name pronounciation
const audio = new Audio("../assets/audio/name.mp3");

// Different styling than Header in "/components/Misc.js"
const Header = ({ section }) => (
  <>
    <h2>{data.sections[section].title}</h2>
    <p>
      <Styled text={data.sections[section].desc} />
    </p>
  </>
);

const List = ({ items }) => (
  <ul>
    {items.map((i) => (
      <li>
        <Styled text={i} />
      </li>
    ))}
  </ul>
);

const SectionIntro = () => (
  <section class="box">
    <h1 class="name">{data.sections.intro.name}</h1>
    <p>
      Composing melodies from ones and zeroes and teaching computers how to{" "}
      <TextWave text="dance" />.
    </p>
    {data.sections.intro.sub && (
      <p>
        <Styled text={data.sections.intro.sub} />
      </p>
    )}
    <Contact />
  </section>
);

const SectionCurrent = () => (
  <>
    <span id="current"></span>
    <section>
      <Header section="current" />
      <span id="experiences"></span>
      <List items={data.current} />
    </section>
  </>
);

const SectionExperiences = () => {
  const Experience = ({ experience }) => (
    <>
      <dt>
        <strong>
          {" "}
          <a href={experience.url}>{experience.company}</a>
        </strong>
        , <strong>{experience.position}</strong>, <em>{experience.date} </em>
        {experience.tag && (
          <>
            <Nbsp />
            <mark>
              <strong>{experience.tag}</strong>
            </mark>
          </>
        )}
      </dt>
      <dd>
        <Styled text={experience.desc} />
      </dd>
    </>
  );

  return (
    <>
      <Header section="experiences" />
      <dl class="experience-list">
        {data.experiences.map((e) => (
          <Experience experience={e} />
        ))}
      </dl>
    </>
  );
};

const SectionCallToAction = () => (
  <>
    <Header section="callToAction" />
    <span id="about"></span>
  </>
);

const SectionAbout = () => {
  const Prounciation = () => {
    const playAudio = () => audio && audio.play();

    return (
      <span onClick={() => playAudio()}>
        uh-dees <i class="fas fa-volume-up pronounce"></i>
      </span>
    );
  };

  const Hi = () => (
    <p>
      Hi, I'm Addis / <Prounciation /> — <strong>addis.world</strong> comes from
      my full name, Addisalem አዲስ ዓለም, which in Amharic means new (addis) world
      (alem).
    </p>
  );

  const DescList = ({ heading, list }) => (
    <dl class="list-bullets">
      <dt>{heading && <strong>{heading}</strong>}</dt>
      {list.map((i) => (
        <dd>
          <Styled text={i} />
        </dd>
      ))}
    </dl>
  );

  return (
    <section class="box">
      <h2>About</h2>
      <div class="center">
        <img alt="Photo of Addis Semagn" class="me" src="/assets/images/me.jpg" />
        <p class="small">5'4"; 5'8" on a good afro day :)</p>
      </div>

      <Hi />
      {data.about.bio.map((p) => (
        (p instanceof Array) ? (
          <DescList list={p} />
        ):(
          <p>
            <Styled text={p} />
          </p>
        )
      ))}
      <DescList heading="Some Things I'm Into" list ={data.about.interests} />
      <p class="small">
        If you want to chat about any of these things, let's grab a virtual
        coffee (or the drink that's ya vibe).
      </p>
    </section>
  );
};

const App = () => (
  <div class="wrapper">
    <main>
      <Nav />
      <SectionIntro />
      <section class="home">
        <SectionCurrent />
        <SectionExperiences />
        <SectionCallToAction />
        <SectionAbout />
      </section>
      <Footer />
    </main>
  </div>
);

export default App;
