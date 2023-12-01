// YourRouterFile.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Signup from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Landingpage from "./pages/LandingPage/index";
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landingpage />,
        children: [
            { path: '/', element: <Navigate to='/signup' /> },
            { path: '/signup', element: <Signup /> },
            { path: '/login', element: <Login /> },
        ] as RouteObject[],
    },
]);

export default router;
