
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/AboutPage/Home";
import Contact from "./components/ContactPage/Contact";
import portfolio from "./components/PortfolioPage/portfolio";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/portfolio" component={portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
