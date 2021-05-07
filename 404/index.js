import { html, render } from "/lib/preact.js";
import App from '/pages/404.js';

render(html` <${App} /> `, document.body);
