export const Styled = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);

export const Nbsp = () => <Styled text="&nbsp" />;

export const TextWave = ({ text }) =>
  text.split("").map((c) => <span class="letter">{c}</span>);

export const Header = ({ heading, subheading, img }) => (
  <section class="mt-4 header">
    <h1 class="name">{heading}</h1>
    <center>
      <p>{subheading}</p>
    </center>
    {img && (
      <center>
        <img src={img} />
      </center>
    )}
  </section>
);
