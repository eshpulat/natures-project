import { Link } from "react-router-dom";
import Home from "./Home";

function Navbar() {
    return (
        <ul>
            <Link>
                <Home />
            </Link>
            <Link>all tours</Link>
        </ul>
    );
}

export default Navbar;
