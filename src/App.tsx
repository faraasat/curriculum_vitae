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
import { isMobile } from "react-device-detect";

function App() {
  if (isMobile) {
    return (
      <div>
        <h1>Not Available on Mobile</h1>
      </div>
    );
  }
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
