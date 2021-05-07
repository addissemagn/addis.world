import { html, render } from "/lib/preact.js";
import App from '/pages/message.js';

render(html` <${App} type="comingSoon"/> `, document.body);
