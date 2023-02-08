import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import Signin from "./Signin/Signin"
import Signinform from "./../components/Signinform/Signinform"
import Signup from './Signup/Signup'
import Signupform from "./../components/Signupform/Signupform"
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