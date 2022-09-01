import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HeaderSocials from "./components/HeaderSocials";

function App() {
  return (
    <Router>
      <Nav />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Services" element={<Services />} />
        </Routes>
      </div>
      <div className="socials">
     
        <HeaderSocials />
      </div>
    </Router>
  );
}

export default App;
