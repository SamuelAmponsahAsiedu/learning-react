import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contacts';
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';





            
            
        



const AppLayout = () => {
   
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }

        ],
    },

    
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);



