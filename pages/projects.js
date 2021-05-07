import { html, render } from "/lib/preact.js";
import Nav from "/components/Nav.js";
import data from "/data/projects.js";

const Header = () =>
  html`
    <section class="mt-4 header">
      <h2 class="name">${data.header.title}</h2>
      <center><p>${data.header.desc}</p></center>
      <center><img src=${data.header.img} /></center>
    </section>
  `;

const SectionProjects = () => {
  var resp = "";
  var row = "";

  data.projects.forEach((proj, index) => {
    row += `<section class="box">
      <img src=${proj.path} />
      <p class="name"><strong>${proj.name}</strong></p>
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
        <${Header} />
        <${SectionProjects} />
      </main>
    </div>
  `;

export default App;
