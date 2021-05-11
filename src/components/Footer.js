import Contact from "./Contact";
import { Styled } from "./Misc";
import data from "../data/components";

const Footer = () => (
  <footer>
    <div class="left">
      <Contact />
    </div>
    <div class="right small">
      <p>
        <Styled text={data.components.footer} />
      </p>
    </div>
  </footer>
);

export default Footer;
