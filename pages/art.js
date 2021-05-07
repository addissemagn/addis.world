import { html, render, Component } from "/lib/preact.js";
import Nav from '/components/Nav.js';
import data from "/data/art.js";

const Header = () =>
  html`
    <section class="mt-4">
      <h2 class="name">${data.header.title}</h2>
      <center><p>${data.header.desc}</p></center>
    </section>
  `;

const SectionArt = () => {
  var resp = '';
  var row = ''

  data.art.forEach((piece, index) => {
    row += `<section class="box">
      <img src=${piece.path} />
      <p>${piece.desc}</p>
    </section>`;

    // Make every 2 pieces into a row
    if (index != 0 && index % 2 == 1) {
      resp += `<div class="row">` + row + `</div>`
      row = ''
    }
  })

    // If there are an odd number of pieces, add a dummy placeholder
    if (data.art.length % 2 != 0) {
      row += `<section class="box hidden"><img src="" /></section>`;
      resp += `<div class="row">` + row + `</div>`
      row = ''
    }

  return html`<div class="art" dangerouslySetInnerHTML=${{ __html: resp }}/>`;
}

const App = () =>
  html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header} />
        <${SectionArt} />
      </main>
    </div>
  `;

export default App;
