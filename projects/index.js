import { html, render } from "/src/lib/preact.js";
import App from "/src/pages/projects.js";

render(html` <${App} /> `, document.body);
