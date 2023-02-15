import { Link, Outlet } from 'react-router-dom'

import React from 'react'

function Signin() {
    return (
        <>
            <div className="relative flex h-screen">
                <div className="flex h-full w-full flex-col items-center justify-center bg-white lg:w-1/2">
                    <div className="flex w-full flex-col items-center justify-center">
                        <Outlet />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <div className="flex gap-1 lg:gap-2">
                            <p>Aún no creaste tu cuenta?</p>
                            <Link
                                className="font-bold text-primary-500 no-underline"
                                to="/signup"
                            >
                                Registrate!
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            <p>Volver al</p>
                            <Link
                                className="font-bold text-primary-500 no-underline"
                                to="/"
                            >
                                inicio
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 lg:flex">
                    <img
                        src={'/ataraxia-signupbanner2.png'}
                        alt=""
                        className="absolute h-full w-1/2 object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default Signin
