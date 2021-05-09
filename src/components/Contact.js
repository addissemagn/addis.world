import { html } from "/src/lib/preact.js"
import { Nbsp } from "/src/components/Misc.js";
import data from "/src/data/components.js";

const Contact = ({ emailOff }) =>
  html`
    <section class="small">
      ${!emailOff &&
      html`<a href="mailto:${data.components.contact.email}">${data.components.contact.email}</a
        ><br />`}
      <a href=${data.components.contact.linkedin}>LinkedIn</a> <${Nbsp} />
      <a href=${data.components.contact.github}>GitHub</a> <${Nbsp} />
      <a href=${data.components.contact.twitter}>Twitter</a>
      <br />
      @addissemagn
    </section>
  `;

export default Contact;
