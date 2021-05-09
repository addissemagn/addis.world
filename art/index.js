import { html, render } from "/src/lib/preact.js";
import App from "/src/pages/art.js";

render(html` <${App} /> `, document.body);