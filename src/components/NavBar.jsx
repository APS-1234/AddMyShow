import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../images/AddMyshow.png"; // Adjust if your path is different

function NavBar() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="AddMyShow Logo" className="logo" />
                    <span className="logo-name">AddMyShow</span>
                </Link>
            </div>

            {!isLoginPage && (
                <div className="navbar-links">
                    <Link to="/" className="nav-link-Home">Home</Link>
                    <Link to="/Favorites" className="nav-link-Favorites">Favorites</Link>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
