import Checkout from '../pages/Checkout/Checkout'
import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import Signin from "../pages/Signin/Signin"
import Signinform from "../components/Signinform"
import Signup from '../pages/Signup/Signup'
import Signupform from "../components/Signupform"
import { createBrowserRouter } from 'react-router-dom'

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
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
            },
        ],
    },
])

export default indexRouter