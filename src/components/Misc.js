export const Styled = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);

export const Nbsp = () => <Styled text="&nbsp" />;

export const TextWave = ({ text }) =>
  text.split("").map((c) => <span class="letter">{c}</span>);

export const Header = ({ heading, subheading, img, img_alt }) => (
  <section class="mt-4 header">
    <h1 class="name">{heading}</h1>
    <div class="center">
      <p>{subheading}</p>
    </div>
    {img && (
      <div class="center">
        <img alt={img_alt} src={img} />
      </div>
    )}
  </section>
);
