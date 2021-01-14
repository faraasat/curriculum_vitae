import {
  CvAppBodyAlignmentStyles,
  CvAppHeaderAlignmentStyles,
} from "./App.style";
import {
  About,
  Contact,
  Copyright,
  Education,
  Footer,
  Head,
  Header,
  Languages,
  Portfolio,
  PortfolioShow,
} from "./listing";

function App() {
  return (
    <div>
      <CvAppHeaderAlignmentStyles>
        <Header />
      </CvAppHeaderAlignmentStyles>
      <CvAppBodyAlignmentStyles>
        <Head />
        <About />
        <Education />
        <Languages />
        <PortfolioShow />
        <Portfolio />
        <Contact />
        <Footer />
        <Copyright />
      </CvAppBodyAlignmentStyles>
    </div>
  );
}

export default App;
