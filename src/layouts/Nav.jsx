import React, { useState } from 'react'

import Cart from './Cart'
import Drawer from './Drawer'
import { Link } from 'react-router-dom'

const routes = [
    {
        path: '/',
        name: 'Home',
    },
]

const protectedRoutes = [
    {
        path: '/profile',
        name: 'Profile',
    },
]

function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }
    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <>
            <nav className="fixed z-50 w-full flex justify-center shadow-md bg-white p-4">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="h-8 w-8 cursor-pointer stroke-primary-500"
                        onClick={toggleDrawer}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
                <div className="flex w-full justify-center select-none">
                    <Link to="/">
                        <img src="/ATARAXIA2.png" alt="logo" className="w-36" />
                    </Link>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8 stroke-primary-500 cursor-pointer"
                        onClick={toggleCartOpen}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>
                <Drawer
                    routes={routes}
                    protectedRoutes={protectedRoutes}
                    handleOnClick={toggleDrawer}
                    isOpen={isOpen}
                />
                <Cart handleOnClick={toggleCartOpen} isOpen={isCartOpen} />
            </nav>
        </>
    )
}

export default Nav
