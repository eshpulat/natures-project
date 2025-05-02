import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayot() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
            {/* <footer>Footer</footer> */}
        </div>
    );
}

export default AppLayot;
