import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import React from 'react'

function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
