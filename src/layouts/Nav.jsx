import React, { useState } from 'react'

import Drawer from './Drawer'

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

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="flex justify-center shadow-md bg-white p-4">
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
                <div className="flex w-full justify-center">
                    <h1 className="text-xl font-bold text-primary-500">
                        Ataraxia
                    </h1>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-8 h-8 stroke-primary-500 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </div>
                {isOpen ? (
                    <Drawer
                        routes={routes}
                        protectedRoutes={protectedRoutes}
                        handleOnClick={toggleDrawer}
                    />
                ) : null}
            </nav>
        </>
    )
}

export default Nav
