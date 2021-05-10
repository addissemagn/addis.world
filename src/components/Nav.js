import { html } from "/src/lib/preact.js";
import data from "/src/data/components.js";

const toggleTheme = () => {
  const currTheme = localStorage.getItem("theme") || "light";
  const newTheme = currTheme == "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);

  document.documentElement.setAttribute("data-theme", newTheme);
};

const Nav = () =>
  html`
    <nav onLoad=${() => onLoad()}>
      <div class="logo small">
        <a href="/">${data.components.logo.text}</a>
      </div>
      <div class="links small">
        ${data.components.nav.map((n) => html`<a href=${n.link}>${n.name}</a>`)}
        <a class="toggle">
          <input type="checkbox" id="toggle" onClick=${() => toggleTheme()} checked=${localStorage.getItem("theme") == "dark"}/><label for="toggle"></label>
        </a>
      </div>
    </nav>
  `;

export default Nav;
