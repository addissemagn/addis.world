import { html } from "/lib/preact.js";

export const Nbsp = () => html`<${Styled} text="&nbsp" />`;

export const Styled = ({ text }) =>
  html` <span dangerouslySetInnerHTML=${{ __html: text }} /> `;

export const TextWave = ({ text }) =>
  html`${text.split("").map((c) => html`<span class="letter">${c}</span>`)}`;

export const Header = ({ heading, subheading, img }) =>
  html`
    <section class="mt-4 header">
      <h1 class="name">${heading}</h2>
      <center><p>${subheading}</p></center>
      ${img && (html`<center><img src=${img} /></center>`)}
    </section>
  `;
