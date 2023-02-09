import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import React from 'react'

function Layout() {
    return (
        <>
            <Nav />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout
