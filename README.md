# addis.world

built w/ [preact.js](https://preactjs.com) ♪٩(✿′ᗜ‵✿)۶♪
```
.
├── art                   # /art page entry point dir
├── assets                # static assets
├── components            # modular components i.e. Nav
├── data                  # objects w/ the text of the site for easy editing
├── lib                   # preact lib
├── pages                 # preact code for each page
├── styles                # css stylesheets
├── index.html            # each page has an index.html (the page template)
├── index.js              # and an index.js (the JS entry point)
└── README.md
```

adding a new page looks like:
* make a dir for the sub-page i.e. art/
* add `index.html` and `index.js` templates to it. `index.html` references `index.js` as the JS entry point.
**index.js template**
```js
import { html, render } from "/lib/preact.js";
import App from "/pages/art.js";

render(html` <${App} /> `, document.body);
```
* for structure, all the actual page logic is stored in the pages/ dir, i.e. create `pages/art.js`
* for easy-editng, all the text/data/etc to display is stored in the data/ dir, i.e. create `data/art.js`
