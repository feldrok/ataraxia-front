import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import indexRouter from './router/index'
import store from './store/store'

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={indexRouter} />
        </Provider>
    )
}

export default App
