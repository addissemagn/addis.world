import { Link } from "preact-router/match";
import data from "../data/components";

const toggleTheme = () => {
  const currTheme = localStorage.getItem("theme") || "light";
  const newTheme = currTheme == "light" ? "dark" : "light";
  localStorage.setItem("theme", newTheme);

  document.documentElement.setAttribute("data-theme", newTheme);
};

const Nav = () => (
  <nav>
    <div class="logo small">
      <Link href="/">{data.components.logo.text}</Link>
    </div>
    <div class="links small">
      {data.components.nav.map((n) => (
        <Link href={n.link}>{n.name}</Link>
      ))}
      <a class="toggle">
        <input
          type="checkbox"
          id="toggle"
          onClick={() => toggleTheme()}
          checked={localStorage.getItem("theme") == "dark"}
        />
        <label for="toggle"></label>
      </a>
    </div>
  </nav>
);

export default Nav;
