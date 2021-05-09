import { html } from "/src/lib/preact.js";
import Contact from "/src/components/Contact.js";
import { Styled } from "/src/components/Misc.js";
import data from "/src/data/components.js";

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
