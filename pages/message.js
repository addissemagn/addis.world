import { html } from "/lib/preact.js";
import Nav from "/components/Nav.js";
import Footer from "/components/Footer.js";
import { Header } from "/components/Misc.js"

const App = ({ type }) => {
  const message = {
    404: "this page does not exist. may I walk you back <a href='/'>home</a>?",
    comingSoon: "under constructionnn. come back soon."
  }

  return html`
    <div class="wrapper">
      <main>
        <${Nav} />
        <${Header}
          heading="ʕ •ᴥ•ʔ"
          subheading=${message[type]}
        />
        <${Footer} />
      </main>
    </div>
  `;
}

export default App;
