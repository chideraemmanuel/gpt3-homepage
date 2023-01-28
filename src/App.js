import "./App.css";
import "./index.css";
import { Companies } from "./components/componentsExport";
import {
  About,
  Blogs,
  Cta,
  Features,
  Footer,
  Hero,
  Navbar,
} from "./containers/containersExport";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Navbar />
      </header>
      <main className="container">
        <Hero />
        <Companies />
        <About />
        <Features />
        <Cta />
        <Blogs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
