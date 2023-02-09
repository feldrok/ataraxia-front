import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
import ProductPage from '../pages/ProductPage/ProductPage'
import { createBrowserRouter } from 'react-router-dom'

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product',
                element: <ProductPage />,
            },
        ],
    },
])

export default indexRouter
