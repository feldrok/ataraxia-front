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
        name: 'Perfil',
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
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
