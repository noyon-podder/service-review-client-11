import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login/Login";
import RegisterForm from "../../pages/Register/RegisterForm/RegisterForm";
import Service from "../../pages/Service/Service";
import LoginForm from "../../pages/shared/LoginForm/LoginForm";
import ServiceDetails from "../../pages/shared/ServiceDetails/ServiceDetails";

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
          },
          {
            path: '/services/:id',
            element: <ServiceDetails/>,
            loader: ({params}) => {
              fetch(`http://localhost:5000/services/${params}`)
            }
          }
        ]
    },
    {
      path: '/login',
      element: <Login/>,
      children: [
        {
          path: '/login',
          element: <LoginForm/>
        },
      ]
    },
    {
      path: '/register',
      element: <RegisterForm/>
    }
  ])