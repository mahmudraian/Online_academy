import { createBrowserRouter } from "react-router-dom";
import CourseSubject from "../Component/Pages/CourseSubject/CourseSubject";
import Home from "../Component/Pages/Home/Home";
import Main from "../Layout/Main";

 export const routes = createBrowserRouter([

    {
        path:'/',element:<Main></Main>,children:[
            {
                path:'/',element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/course')
            },
            {
                path:'/course/:id',element:<CourseSubject></CourseSubject>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            }


        ]
    }


]);

