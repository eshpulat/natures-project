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

            <div className="header-username">
                <Link className="header-login" to="/signup">
                    Sign Up
                </Link>
                <Link className="header-signup" to="/login">
                    Log in
                </Link>
            </div>
        </header>
    );
}

export default Header;
