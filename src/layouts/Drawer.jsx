import { Link } from 'react-router-dom'
import React from 'react'

function Drawer({ handleOnClick, routes, protectedRoutes }) {
    return (
        <div className="fixed top-0 left-0 flex w-full">
            <nav className="fixed top-0 left-0 z-40 min-h-screen w-full max-w-xs flex-col justify-between bg-white shadow-md">
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
                        <ul className="flex w-full p-2 flex-col">
                            {routes.map((route) => (
                                <li className="flex w-full">
                                    <Link
                                        className="w-full text-primary-500 font-medium p-2 hover:bg-primary-500 duration-300 hover:text-white rounded-md"
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
                className="fixed right-0 top-0 min-h-screen w-full backdrop-blur-sm backdrop-brightness-50 backdrop-filter"
                onClick={handleOnClick}
            ></div>
        </div>
    )
}

export default Drawer