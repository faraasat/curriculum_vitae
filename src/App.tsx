import {
  CvAppBodyAlignmentStyles,
  CvAppHeaderAlignmentStyles,
} from "./App.style";
import {
  About,
  Education,
  Head,
  Header,
  Languages,
  Portfolio,
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
        <Portfolio />
      </CvAppBodyAlignmentStyles>
    </div>
  );
}

export default App;
