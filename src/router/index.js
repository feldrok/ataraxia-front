import Checkout from '../pages/Checkout/Checkout'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
<<<<<<< HEAD
import ProductPage from '../pages/ProductPage/ProductPage'
=======
import Signin from "../pages/Signin/Signin"
import Signinform from "../components/Signinform"
import Signup from '../pages/Signup/Signup'
import Signupform from "../components/Signupform"
>>>>>>> 35e8ca389735f5710aa8c64e3c114923f2ffd9ac
import { createBrowserRouter } from 'react-router-dom'

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
<<<<<<< HEAD
            },
            {
                path: '/product',
                element: <ProductPage />,
=======
            }
        ]
    },
    {
        path: '/checkout',
        element: <Checkout />
    },
    {
        path: "/signup",
        element: <Signup />,
        children: [
            {
                path: "/signup",
                element: <Signupform />,
            },
        ],
    },
    {
        path: "/signin",
        element: <Signin />,
        children: [
            {
                path: "/signin",
                element: <Signinform />,
>>>>>>> 35e8ca389735f5710aa8c64e3c114923f2ffd9ac
            },
        ],
    },
])

export default indexRouter
