import {
  html,
  render,
  Component,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import data from "/data/art.js";

const Header = () =>
  html`
    <section class="mt-4">
      <h2 class="name">${data.header.title}</h2>
      <center><p>${data.header.desc}</p></center>
      <center><a href="/">← Back to home</a></center>
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

class App extends Component {
  render = () => html`
    <div class="wrapper">
      <main>
        <${Header} />
        <${SectionArt} />
      </main>
    </div>
  `;
}

render(html` <${App} /> `, document.body);
