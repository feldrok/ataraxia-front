import Home from '../pages/Home/Home'
import Layout from '../layouts/Layout'
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
    }
])

export default indexRouter