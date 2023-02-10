import { Link, useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import cartActions from '../store/carts/actions'
const {createCart} = cartActions


/* import userActions from "../../store/user/actions" */

/* const { addUser } = userActions */

function Signin() {
    createCart()
    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="text-2xl flex-wrap text-gray-500 text-center max-w-md">
                    Iniciá sesión para comprar tus cervezas favoritas!
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-md">
                <form className="p-4 w-full">
                    <div className="w-full">
                        <label className="text-primary-400 " htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="mail"
                        />
                    </div>
                    <div className="w-full pb-10">
                        <label className="text-primary-400 " htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="password"
                        />
                    </div>
                    <div className="flex items-center">
                        <Link
                            className="flex w-full justify-center no-underline p-3 bg-primary-300 text-white rounded-sm border-none cursor-pointer text-lg font-bold transition-all duration-100 ease-in-out"
                            to={'/'}
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin
