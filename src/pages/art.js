import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Header } from "../components/Misc.js";
import data from "../data/art.js";

const SectionArt = () => {
  var resp = "";
  var row = "";

  data.art.forEach((piece, index) => {
    row += `<section class="box">
      <img alt=${piece.alt} src="${data.meta.img_dir}${piece.img}" />
      <p>${piece.desc}</p>
    </section>`;

    // Make every 2 pieces into a row
    if (index != 0 && index % 2 == 1) {
      resp += `<div class="row">` + row + `</div>`;
      row = "";
    }
  });

  // If there are an odd number of pieces, add a dummy placeholder
  if (data.art.length % 2 != 0) {
    row += `<section class="box hidden"><img alt="Placeholder" src="" /></section>`;
    resp += `<div class="row">` + row + `</div>`;
    row = "";
  }

  return <div class="art" dangerouslySetInnerHTML={{ __html: resp }} />;
};

const App = () => (
  <div class="wrapper">
    <main>
      <Nav />
      <Header heading={data.header.title} subheading={data.header.desc} />
      <SectionArt />
      <Footer />
    </main>
  </div>
);

export default App;
