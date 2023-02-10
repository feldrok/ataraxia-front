import { Link, Outlet } from 'react-router-dom'

import Nav from '../../layouts/Nav'
import React from 'react'

function Signup() {
    return (
        <>
            <Nav />
            <div className="flex relative h-screen">
                <div className="flex flex-col justify-center items-center bg-white w-full h-full lg:w-1/2">
                    <div className="flex flex-col justify-center items-center w-full">
                        <Outlet />
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 gap-2">
                        <div className="flex gap-2">
                            <p>Ya tienes una cuenta? </p>
                            <Link
                                className="no-underline text-primary-500 font-bold"
                                to="/signin"
                            >
                                Inicia sesión
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <p>Volver al</p>
                            <Link
                                className="no-underline text-primary-500 font-bold"
                                to="/"
                            >
                                inicio
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex w-1/2">
                    <img
                        src={'/ataraxia-signupbanner.png'}
                        alt=""
                        className="w-1/2 h-full object-cover absolute"
                    />
                </div>
            </div>
        </>
    )
}

export default Signup
