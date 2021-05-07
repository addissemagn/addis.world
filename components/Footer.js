import { html } from "/lib/preact.js";
import Contact from "/components/Contact.js";
import data from "/data/components.js";

const Footer = () =>
  html`
    <footer>
      <div class="left">
        <!-- ${data.components.nav.map((n) => html`<a href=${n.link}>${n.name}</a>`)} -->
        <${Contact} />
      </div>
      <div class="right small">
        <p>made while listening to <a href="https://open.spotify.com/playlist/0cF1p8yQopiQTNN6HktvOt?si=daecec02b0e54e09">this playlist</a></p>
      </div>
    </footer>
  `;

export default Footer;
