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

            <div>
                <span className="header-username">UserName</span>
            </div>
        </header>
    );
}

export default Header;
