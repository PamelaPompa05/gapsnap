import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <NavBar /> 
        <header className="App-header">
        {/*<Link to="/" style={{ display: 'block' }}>
          <div className="Logo-wrapper">
            <img src={logo} alt="Club Logo" className="App-logo" />
          </div>*
        </Link>*/}
        </header>
        
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;