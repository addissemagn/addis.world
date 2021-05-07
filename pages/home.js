import { html } from "/lib/preact.js";
import Nav from "/components/Nav.js";
import Footer from "/components/Footer.js";
import { Nbsp, Styled, TextWave } from "/components/Misc.js";
import Contact from "/components/Contact.js";
import data from "/data/home.js";

// Different styling than Header in "/components/Misc.js"
const Header = ({ section }) =>
  html`
    <h2>${data.sections[section].title}</h2>
    <p><${Styled} text=${data.sections[section].desc} /></p>
  `;

const List = ({ items }) =>
  html`
    <ul>
      ${items.map((i) => html`<li><${Styled} text=${i} /></li>`)}
    </ul>
  `;

const SectionIntro = () =>
  html`
    <section class="box">
      <h2 class="name">${data.sections.intro.name}</h2>
      <p>
        Composing melodies from ones and zeroes and teaching computers
        how to <${TextWave} text="dance" />.
      </p>
      <${Contact} />
    </section>
  `;

const SectionCurrent = () =>
  html`
    <span id="current"></span>
    <section>
      <${Header} section="current" />
      <${List} items=${data.current} />
    </section>
  `;

const SectionExperiences = () =>
  html`
    <span id="experiences"></span>
    <${Header} section="experiences" />
    <dl class="experience-list">
      ${data.experiences.map((e) => html`<${Experience} experience=${e} />`)}
    </dl>
  `;

const Experience = ({ experience }) =>
  html`
    <dt>
      <strong> <a href="${experience.url}">${experience.company}</a> </strong>
      , <strong>${experience.position}</strong>, <em>${experience.date} </em>
      <${Nbsp} /><mark>${experience.tag}</mark>
    </dt>
    <dd><${Styled} text=${experience.desc} /></dd>
  `;

const SectionCallToAction = () => html` <${Header} section="callToAction" /> `;

const SectionAbout = () =>
  html`
    <span id="about"></span>
    <section class="box">
      <h2>About</h2>
      <center>
        <img class="me" src="assets/me.jpg" />
        <p class="small">5'4"; 5'8" on a good afro day :)</p>
      </center>

      ${data.about.bio.map((p) => html`<p><${Styled} text=${p} /></p>`)}
      <dl class="list-bullets">
        <dt><strong>Some Things I'm Into</strong></dt>
        ${data.about.interests.map(
          (i) => html`<dd><${Styled} text=${i} /></dd>`
        )}
      </dl>

      <p class="small">
        If you want to chat about any of these things, let's grab a virtual
        coffee (or tea if that's ya vibe).
      </p>
    </section>
  `;

const App = () =>
  html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${SectionIntro} />
        <${SectionCurrent} />
        <${SectionExperiences} />
        <${SectionCallToAction} />
        <${SectionAbout} />
        <${Footer} />
      </main>
    </div>
  `;

export default App;
