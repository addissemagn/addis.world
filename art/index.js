import { html, render } from "/lib/preact.js";
import App from "/pages/art.js";

render(html` <${App} /> `, document.body);