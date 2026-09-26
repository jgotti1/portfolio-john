import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import SinglePage from "./components/SinglePage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Routes>
          {/* Home, Portfolio, and Contact are sections of one page; the
              shared parent keeps it mounted while the path picks a section. */}
          <Route element={<SinglePage />}>
            <Route path="/" />
            <Route path="/Portfolio" />
            <Route path="/Contact" />
          </Route>
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
