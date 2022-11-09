import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home"
import Service from "../../pages/Service/Service"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: '/',
            element: <Home/>,
          },
          {
            path: '/services',
            element: <Service/>,
            loader: () => fetch('http://localhost:5000/services')
          }
        ]
    }
  ])