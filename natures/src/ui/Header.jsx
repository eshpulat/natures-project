import { Link, useNavigate } from "react-router-dom";
import Tours from "./Tours";
import Home from "./Home";
import "../css/header.css";
import About from "./About";

function Header() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/"); // Go back to home
    };
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
                {user ? (
                    <>
                        <p>Welcome, {user.name}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="auth-button signup" to="/signup">
                            Sign Up
                        </Link>
                        <Link className="auth-button login" to="/login">
                            Log in
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
