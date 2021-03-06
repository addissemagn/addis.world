import { render } from "preact";
import { Router, Route } from "preact-router";
import Home from "./pages/home.js";
import Art from "./pages/art.js";
import Projects from "./pages/projects.js";
import Resume from "./pages/resume.js";
import Message from "./pages/message.js";

(function onPageLoad() {
  // Set light/dark theme
  const currTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currTheme);
})();

const App = () => {
  const scrollIntoView = async () => {
    // get hash, minus the hash mark
    const hash = window.location.hash.substring(1);

    if (hash && hash.length) {
      // scroll to hash id i.e. /#about
      const el = document.getElementById(hash);
      el && el.scrollIntoView();
    } else {
      // scroll to top
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <Router onChange={() => scrollIntoView()}>
        <Home path="/" />
        <Art path="/art" />
        <Projects path="/projects" />
        <Resume path="/resume" />
        <Message path="/coming-soon" type="comingSoon" />
        <Message default type="404" />
        <Route
          path="/name"
          component={() => {
            window.location.href = "/assets/audio/name.mp3";
            return null;
          }}
        />
      </Router>
    </div>
  );
};

render(<App />, document.body);
