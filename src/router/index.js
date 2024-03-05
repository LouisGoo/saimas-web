import Layout from "@/pages/Layout"
import  App  from "@/App.js"
import { createBrowserRouter } from "react-router-dom"
import SaimasLayout from "@/pages/Layout";
import Home from "@/pages/Home";
import School from "@/pages/School";
import Talk from "@/pages/Talk";
import Visa from "@/pages/Visa";
import Information from "@/pages/Information";


const router =createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'school',
                element:<School/>
            },
            {
                path:'information',
                element:<Information/>
            },
            {
                path:'talk',
                element:<Talk/>
            },
            {
                path:"visa",
                element:<Visa/>
            } 
        ]
    }
])

export default router;