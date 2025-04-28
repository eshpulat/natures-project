import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayot from "./ui/AppLayot";
import Tours from "./ui/Tours";
import About from "./ui/About";

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
                element: <Tours />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
