import Footer from './Footer'
import Nav from './Nav'
import { Outlet, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import cryptoRandomString from 'crypto-random-string'

const { signInToken } = userActions

function Layout() {
    const [isLogged, setIsLogged] = useState(false)
    const storeUser = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        let token = localStorage.getItem('token')
        dispatch(signInToken({ token: token }))
        if (storeUser.user?.success === true) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [location, storeUser.user?.success])

    return (
        <>
            <Nav session={isLogged} />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout
