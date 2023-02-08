import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import { createBrowserRouter } from 'react-router-dom'
import Checkout from '../pages/Checkout/Checkout'

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
    }
])

export default indexRouter