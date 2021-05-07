import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import data from '/data/components.js';

const Nav = () =>
  html`
    <nav>
      <div class="logo small">
        <a href="/">${data.components.logo.text}</a>
      </div>
      <div class="links small">
        ${data.components.nav.map((n) => html`<a href=${n.link}>${n.name}</a>`)}
      </div>
    </nav>
  `;

export default Nav;
