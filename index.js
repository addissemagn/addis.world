import { html, render } from "/src/lib/preact.js";
import App from "/src/pages/home.js";

render(html` <${App} /> `, document.body);
