import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import Landingpage from "./pages/LandingPage";
import DefaultLayout from "./layout/DefaultLayout";
import GuestLayout from "./layout/GuestLayout";


const router = createBrowserRouter([
    {
        path: "/", element: <DefaultLayout />,
        children: [
            { path: "/", element: <Landingpage /> },
        ]
    },
    {
        path: "/", element: <GuestLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
        ]
    }
])


export default router;
