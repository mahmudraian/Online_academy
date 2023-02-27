import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Pages/BLOG/Blog";
import CheckOut from "../Component/Pages/Checkout/CheckOut";
import Finalchek from "../Component/Pages/Checkout/Finalchek";
import CourseSubject from "../Component/Pages/CourseSubject/CourseSubject";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/Pages/Login/Login";
import Register from "../Component/Pages/Registration/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

 export const routes = createBrowserRouter([

    {
        path:'/',element:<Main></Main>,children:[
            {
                path:'/',element:<Home></Home>,
                loader:()=>fetch('https://fire-study-server.vercel.app/course')
            },
            {
                path:'/course/:id',element:<PrivateRoute><CourseSubject></CourseSubject></PrivateRoute>,
                loader:({params})=>fetch(`https://fire-study-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/register',element:<Register></Register>
               
            },
            {
                path:'/login',element:<Login></Login>
                
            },
           
            {
                path:'/coursedetails',element:<CheckOut></CheckOut>,
                loader:()=>fetch('https://fire-study-server.vercel.app/course')

                
            },
            {
                path:'/checked',element:<PrivateRoute><Finalchek></Finalchek></PrivateRoute>
            },
            {
                path:'/blog',element:<Blog></Blog>
            }


        ]
    }


]);

