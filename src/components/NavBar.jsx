import { Link } from "react-router-dom";
import "../styles/componentsStyles/NavBar.css"; // Link your CSS file

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/platform">Platform</Link></li>
                <li><Link to="/assessment">Assessment</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;