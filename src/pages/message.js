import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";
import { Header, Styled } from "../components/Misc.js";

const App = ({ type }) => {
  const message = {
    404: "this page doesn't exist. may I walk you back <a href='/'>home</a>?",
    comingSoon: "under constructionnn. come back soon.",
  };

  return (
    <div class="wrapper">
      <main>
        <Nav />
        <Header heading="ʕ•ᴥ•ʔ" subheading={<Styled text={message[type]} />} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
