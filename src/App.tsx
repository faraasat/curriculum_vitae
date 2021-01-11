import {
  CvAppBodyAlignmentStyles,
  CvAppHeaderAlignmentStyles,
} from "./App.style";
import { About, Education, Head, Header, Portfolio } from "./listing";

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
        <Portfolio />
      </CvAppBodyAlignmentStyles>
    </div>
  );
}

export default App;
