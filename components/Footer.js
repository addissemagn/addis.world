import { html } from "/lib/preact.js";
import Contact from "/components/Contact.js";
import { Styled } from "/components/Misc.js";
import data from "/data/components.js";

const Footer = () =>
  html`
    <footer>
      <div class="left">
        <${Contact} />
      </div>
      <div class="right small">
        <p><${Styled} text=${data.components.footer} /></p>
      </div>
    </footer>
  `;

export default Footer;
