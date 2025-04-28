import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function AppLayot() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <footer>Footer</footer>
        </div>
    );
}

export default AppLayot;
