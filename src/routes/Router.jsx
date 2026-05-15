import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () =>  fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element:<div>Auth Page</div>
    },
    {
        path: '*',
        element: <div>404 error</div>
    }
])

export default router;