import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayot from "./ui/AppLayot";
import Tours, { loader as tourLoader } from "./ui/Tours";
import About from "./ui/About";
import Signup from "./ui/Signup";
import Login from "./ui/Login";
import GetTour from "./ui/TourDetales";
import TourDetails from "./ui/TourDetales";

const router = createBrowserRouter([
    {
        element: <AppLayot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tours",
                element: <Tours />,
                loader: tourLoader
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/tours/:id",
                element: <TourDetails />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
