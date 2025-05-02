import { Link } from "react-router-dom";
import Tours from "./Tours";
import Home from "./Home";
import "../css/header.css";
import About from "./About";

function Header() {
    return (
        <header>
            <div>
                <Link className="header-logo" to="/">
                    Natures Tour
                </Link>
            </div>

            <nav className="header-nav-box">
                <Link className="header-nav" to="/">
                    Home
                </Link>
                <Link className="header-nav" to="/tours">
                    Tours
                </Link>

                <Link className="header-nav" to="/about">
                    About-us
                </Link>
            </nav>

            <div className="auth-buttons">
                <Link className="auth-button signup" to="/signup">
                    Sign Up
                </Link>
                <Link className="auth-button login" to="/login">
                    Log in
                </Link>
            </div>
        </header>
    );
}

export default Header;
