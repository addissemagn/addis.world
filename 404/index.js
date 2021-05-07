import {
  html,
  render,
  Component,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Nav from '/components/Nav.js';
import data from "/data/art.js";

const Header = () =>
  html`
    <section class="mt-4">
      <h2 class="name">ʕ •ᴥ•ʔ</h2>
      <center><p>under constructionnn.</p></center>
    </section>
  `;

class App extends Component {
  render = () => html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header} />
      </main>
    </div>
  `;
}

render(html` <${App} /> `, document.body);
