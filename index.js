import { html, render } from "/lib/preact.js";
import App from "/pages/home.js";

render(html` <${App} /> `, document.body);
