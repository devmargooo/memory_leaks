import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Analitic from './Analitic';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ManyNetwork from "./ManyNetwork";
import Blank from "./Blank";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Blank />,
    },
    {
        path: "/analytics",
        element: <Analitic />,
    },
    {
        path: "listener",
        element: <ManyNetwork />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider
        router={router}
    />
);
