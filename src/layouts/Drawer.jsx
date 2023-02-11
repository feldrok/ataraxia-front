import { Link } from 'react-router-dom'
import React from 'react'

function Drawer({ handleOnClick, isOpen, routes, protectedRoutes }) {
    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-30 min-h-screen max-w-xs flex-col justify-between overflow-hidden bg-white shadow-md duration-300 ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
            >
                <div className="flex w-full flex-col">
                    <div className="flex w-full justify-end p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            className="h-8 w-8 cursor-pointer stroke-primary-500"
                            onClick={handleOnClick}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <div className="flex w-full">
                        <ul className="flex w-full flex-col p-2">
                            {routes.map((route) => (
                                <li className="flex w-full" key={route.path}>
                                    <Link
                                        className="w-full rounded-md p-2 font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                        to={route.path}
                                    >
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className=""></div>
            </nav>
            <div
                className={`backdrop-brightness-70 fixed left-0 top-0 z-20 min-h-screen backdrop-blur-sm backdrop-filter duration-150 ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={handleOnClick}
            ></div>
        </>
    )
}

export default Drawer
