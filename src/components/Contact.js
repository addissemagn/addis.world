import { Nbsp } from "./Misc";
import data from "../data/components";

const Contact = ({ emailOff }) => (
  <section class="small">
    {!emailOff && (
      <>
        <a href={`mailto:${data.components.contact.email}`}>
          {data.components.contact.email}
        </a>
        <br />
      </>
    )}
    <a href={data.components.contact.linkedin}>LinkedIn</a> <Nbsp />
    <a href={data.components.contact.github}>GitHub</a> <Nbsp />
    <a href={data.components.contact.twitter}>Twitter</a>
    <br />
    @addissemagn
  </section>
);

export default Contact;
