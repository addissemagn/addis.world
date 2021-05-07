import { html } from "/lib/preact.js";
import Nav from "/components/Nav.js";

const Header = () =>
  html`
    <section class="mt-4">
      <h2 class="name">ʕ •ᴥ•ʔ</h2>
      <center><p>under constructionnn.</p></center>
    </section>
  `;

const App = () =>
  html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header} />
      </main>
    </div>
  `;

export default App;
