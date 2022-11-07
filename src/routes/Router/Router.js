import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/Home/About/About";

import Hero from "../../pages/Home/Hero/Hero";
import Home from "../../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            // {
            //     path: '/',
            //     element: <Hero/>
            // },
            // {
            //     path: '/',
            //    element: <About/>
            // }
        ]
    }
  ])