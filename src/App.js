import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Platform from "./pages/Platform.jsx";
import Playground from "./pages/Playground.jsx";
import VideoPitch from "./pages/VideoPitch.jsx";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <NavBar /> 

        <header className="App-header"> </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/assessment" element={<VideoPitch />} />
          </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
