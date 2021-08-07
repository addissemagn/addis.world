import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Header, TextWave } from "../components/Misc.js";
import data from "../data/projects.js";

const SectionProjects = () => {
    var resp = "";
    var row = "";

    //  Alternative import method that webpack suggests for performance but is for some reason slower
    // <img alt=${proj.name} src=${require(`../${data.meta.img_dir}${proj.img}`).default} />
    data.projects.forEach((proj, index) => {
          row += `<section class="box">
      <img alt=${proj.name} src="${data.meta.img_dir}${proj.img}" />
      <p class="name">
        <strong>${proj.name}</strong>
        ${
          proj.github
            ? `<a href=${proj.github}><span class='sr-only'>GitHub repository</span><i class='fab fa-github'></i></a>`
            : ""
        }
        ${
          proj.link
            ? `<a href=${proj.link}><span class='sr-only'>Link to project</span><i class='fas fa-link'></i></a>`
            : ""
        }
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
    row += `<section class="box hidden"><img alt="Placeholder" src="" /></section>`;
    resp += `<div class="row">` + row + `</div>`;
    row = "";
  }

  return <div class="projects" dangerouslySetInnerHTML={{ __html: resp }} />;
};

const App = () => (
  <div class="wrapper">
    <main>
      <Nav />
      <Header
        heading={data.header.title}
        subheading={
          <>
            I like to <TextWave text="wave" /> my wand and cast away newly
            discovered <del>technologies</del> spells to build projects. Here
            are a few.
          </>
        }
        img={data.header.img_path}
        img_alt="Harry Potter holding his wand"
      />
      <SectionProjects />
      <Footer />
    </main>
  </div>
);

export default App;