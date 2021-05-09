import { html } from "/src/lib/preact.js";
import data from "/src/data/components.js";

// Set theme on page load
(function() {
  const currTheme = localStorage.getItem("theme") || "light";
  // Set theme on document
  document.documentElement.setAttribute("data-theme", currTheme);

  // TODO/FIXME: Update the toggle input on initial load
})();

const toggleTheme = () => {
  const currTheme = localStorage.getItem("theme") || "light";
  const newTheme = currTheme == "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);

  // Set theme on document
  document.documentElement.setAttribute("data-theme", newTheme);
  // Set toggle
  document.getElementById("toggle").checked = newTheme == "dark";
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
          <input type="checkbox" id="toggle" onClick=${() => toggleTheme()}/><label for="toggle"></label>
        </a>
      </div>
    </nav>
  `;

export default Nav;
