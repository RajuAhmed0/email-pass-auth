import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import SignIn from "../Sign-In/SignIn";
import SignUp from "../Sign-Up/SignUp";

 const route = createBrowserRouter([

    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>,
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
          
        ]
    }
])

export default route;