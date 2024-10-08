import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./views/Root.tsx";
import Register from "./views/Register.tsx";
import AdminLogin from "./views/AdminLogin.tsx";
import Admin from "./views/Admin.tsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
    {
        path: "/adm-login",
        element: <AdminLogin />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

