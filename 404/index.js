import { html, render } from "/src/lib/preact.js";
import App from '/src/pages/message.js';

render(html` <${App} type="404"/> `, document.body);
