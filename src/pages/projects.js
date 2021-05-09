import { html } from "../lib/preact.js";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Header, TextWave } from "../components/Misc.js";
import data from "../data/projects.js";

const SectionProjects = () => {
  var resp = "";
  var row = "";

  data.projects.forEach((proj, index) => {
    row += `<section class="box">
      <img src="/src/assets/${proj.img}" />
      <p class="name">
        <strong>${proj.name}</strong>
        ${proj.github ? ("<a href=${proj.github}><i class='fab fa-github'></i></a>") : ""}
      </p>
      <p>${proj.desc}</p>
      <div class="stack">
        <p>Tech Stack:</p>
        ${proj.stack.map((s) => `<p class="ml-p5">${s}</p>`).join("")}
      </div>
    </section>`;

    // Make every 2 pieces into a row
    if (index != 0 && index % 2 == 1) {
      resp += `<div class="row">` + row + `</div>`;
      row = "";
    }
  });

  // If there are an odd number of pieces, add a dummy placeholder
  if (data.projects.length % 2 != 0) {
    row += `<section class="box hidden"><img src="" /></section>`;
    resp += `<div class="row">` + row + `</div>`;
    row = "";
  }

  return html`<div
    class="projects"
    dangerouslySetInnerHTML=${{ __html: resp }}
  />`;
};

const App = () =>
  html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header}
          heading=${data.header.title}
          subheading=${html`I like to <${TextWave} text='wave' /> my wand and cast away newly discovered <strike>technologies</strike> spells to build projects. Here are a few.`}
          img=${data.header.img_path}
        />
        <${SectionProjects} />
        <${Footer} />
      </main>
    </div>
  `;

export default App;
