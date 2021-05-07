import { html } from "/lib/preact.js";
import Nav from "/components/Nav.js";
import Footer from "/components/Footer.js";
import { Header } from "/components/Misc.js"

const App = () =>
  html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header}
          heading="ʕ •ᴥ•ʔ"
          subheading="under constructionnn. come back soon."
        />
        <${Footer} />
      </main>
    </div>
  `;

export default App;
