import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Header, Styled } from "../components/Misc.js";
import data from "../data/resume.js";

const SectionResume = () => (
  <div class='embed-container'><iframe src={data.resume.preview_link} width='100%' height='100%'></iframe></div>
)

const App = () => {
  return (
    <div class="wrapper">
      <main>
        <Nav />
        <Header
	        heading="ʕ•ᴥ•ʔ"
	        subheading={<Styled text={`<a href='${data.resume.direct_download_link}'>${data.resume.direct_download_text}</a>`} />}
	      />
	      <SectionResume />
        <Footer />
      </main>
    </div>
  );
};

export default App;
