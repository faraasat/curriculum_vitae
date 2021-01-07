import "./App.css";
import { About, Header } from "./listing";

function App() {
  return (
    <div>
      <div className='cv-app-header-alignment'>
        <Header />
      </div>
      <div className='cv-app-body-alignment'>
        <About />
      </div>
    </div>
  );
}

export default App;
