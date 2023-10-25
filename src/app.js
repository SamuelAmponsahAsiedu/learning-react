import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contacts';
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {useState, useEffect} from 'react';
import UserContext from './utils/UserContext';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';
import Cart from './components/Cart';






            
            
        



const AppLayout = () => {

    const [userName, setUserName] = useState()

    useEffect(()=> {
        const data =  {
            name: "Samuel"
        };
        setUserName(data.name)
    }, [])
   
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }

        ],
    },

    
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);



