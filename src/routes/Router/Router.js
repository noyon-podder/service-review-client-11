import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home";
import MyReview from "../../pages/MyReview/MyReview";
import LoginForm from "../../pages/Register/LoginForm/LoginForm";
import RegisterForm from "../../pages/Register/RegisterForm/RegisterForm";
import Service from "../../pages/Service/Service";
import ServiceDetails from "../../pages/shared/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
              fetch(`http://localhost:5000/services/${params.id}`)
            }
          },
          {
            path: '/add',
            element: <PrivateRouter><AddService/></PrivateRouter>
          },
          {
            path: '/review',
            element: <PrivateRouter><MyReview/></PrivateRouter>
          }
        ]
    },
    {
      path: '/register',
      element: <RegisterForm/>
    },
    {
    path: '/login',
    element: <LoginForm/>
    }
  ])