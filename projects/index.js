import { html, render } from "/lib/preact.js";
import App from "/pages/projects.js";

render(html` <${App} /> `, document.body);
