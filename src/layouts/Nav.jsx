import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cart from './Cart'
import Drawer from './Drawer'
import { Link } from 'react-router-dom'
import userActions from '../store/users/actions'

const { signout } = userActions
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

function Nav({ session }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isLogged, setIsLogged] = useState(session)
    const storeUser = useSelector((store) => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLogged(session)
    }, [storeUser, session])

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    const handleLogout = () => {
        dispatch(signout())
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    return (
        <>
            <nav className="fixed z-50 flex w-full justify-between bg-white p-4 shadow-md">
                <div className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="h-8 w-8 cursor-pointer stroke-primary-500 duration-300 hover:stroke-tertiary-500"
                        onClick={toggleDrawer}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
                <div className="absolute left-0 right-0 m-auto flex w-36 select-none">
                    <Link to="/">
                        <img src="/ATARAXIA2.png" alt="logo" className="w-36" />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <div className="hidden gap-4 pr-4 md:flex">
                        {isLogged ? (
                            <button
                                className="text-primary-500 duration-300 hover:text-tertiary-500"
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </button>
                        ) : (
                            <>
                                <Link
                                    className="text-primary-500 duration-300 hover:text-tertiary-500"
                                    to="/signin"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    className="text-primary-500 duration-300 hover:text-tertiary-500 "
                                    to="/signup"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            className="h-8 w-8 cursor-pointer stroke-primary-500 duration-300 hover:stroke-tertiary-500"
                            onClick={toggleCartOpen}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </div>
                </div>
                <Drawer
                    routes={routes}
                    protectedRoutes={protectedRoutes}
                    handleOnClick={toggleDrawer}
                    isOpen={isOpen}
                    session={isLogged}
                    handleLogout={handleLogout}
                />
                <Cart handleOnClick={toggleCartOpen} isOpen={isCartOpen} />
            </nav>
        </>
    )
}

export default Nav
