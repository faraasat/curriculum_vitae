import "./App.css";
import { About, Header, Portfolio } from "./listing";

function App() {
  return (
    <div>
      <section className="cv-app-header-alignment">
        <Header />
      </section>
      <section className="cv-app-body-alignment">
        <About />
        <Portfolio />
      </section>
    </div>
  );
}

export default App;
