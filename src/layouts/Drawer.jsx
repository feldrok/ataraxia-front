import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Drawer({
    handleOnClick,
    isOpen,
    routes,
    protectedRoutes,
    session,
    handleLogout,
}) {
    const [drawerOpen, setDrawerOpen] = useState(isOpen)
    const storeUser = useSelector((store) => store.user)
    const [isLogged, setIsLogged] = useState(session)

    useEffect(() => {
        setDrawerOpen(isOpen)
    }, [isOpen])

    useEffect(() => {
        setIsLogged(session)
    }, [storeUser, session])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 z-30 min-h-screen max-w-xs overflow-hidden bg-white shadow-md duration-300 ${
                    drawerOpen ? 'w-full' : 'w-0'
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
                </div>
                <div className="flex h-screen flex-col justify-between">
                    <div className="flex w-full flex-col">
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
                        <ul className="flex w-full flex-col gap-4 p-2">
                            {isLogged
                                ? protectedRoutes.map((route) => (
                                      <li
                                          className="flex w-full"
                                          key={route.path}
                                      >
                                          <Link
                                              className="w-full rounded-md p-2 font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                              to={route.path}
                                          >
                                              {route.name}
                                          </Link>
                                      </li>
                                  ))
                                : null}
                            {isLogged &&
                            storeUser.user?.response?.user?.is_admin ? (
                                <li className="flex w-full">
                                    <Link
                                        className="w-full rounded-md p-2 font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                        to="/admin"
                                    >
                                        Panel de administración
                                    </Link>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                    <div className="flex w-full flex-col pb-24">
                        {isLogged ? (
                            <div className="flex flex-col gap-4 p-2">
                                <button
                                    className="w-full rounded-md border-2 border-primary-500 p-2 font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                    onClick={handleLogout}
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 p-2">
                                <div
                                    className="flex w-full"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    <Link
                                        className="w-full rounded-md border-2 border-primary-500 p-2 text-center font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                        to="/signin"
                                    >
                                        Iniciar Sesión
                                    </Link>
                                </div>
                                <div
                                    className="flex w-full"
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    <Link
                                        className="w-full rounded-md border-2 border-primary-500 p-2 text-center font-medium text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                                        to="/signup"
                                    >
                                        Registrarse
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div
                className={`backdrop-brightness-70 fixed left-0 top-0 z-20 min-h-screen backdrop-blur-sm backdrop-filter duration-150 ${
                    drawerOpen ? 'w-full' : 'w-0'
                }`}
                onClick={handleOnClick}
            ></div>
        </>
    )
}

export default Drawer
