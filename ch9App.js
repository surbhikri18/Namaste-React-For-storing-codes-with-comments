import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// const AppLayout = () =>{
//     return(
//         <> 
//             <Header/>
//             <Body/> 
//             <Footer/>
//         </>
//     );
// };

const AppLayout = () =>{
    return(
        <> 
            <Header/>
            {/* Outlet */}
            <Outlet/>
            <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            // for body children
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>,
            }
        ],
    },
])

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout/>,
//         errorElement: <Error/>,
//     },
//     {
//         path: "/about",
//         element: <About/>,
//     },
//     {
//         path: "/contact",
//         element: <Contact/>,
//     },
//     {
//         path: "/cart",
//         element: <Cart/>,
//     }
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
