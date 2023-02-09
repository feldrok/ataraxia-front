import { Link, useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import userActions from '../store/users/actions'

const { signIn, signInToken } = userActions

function Signin() {
    const userStore = useSelector((state) => state.user)
    console.log(userStore)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let inputMail = useRef("")
    let inputPassword = useRef("")

    const handleSignIn = async (e) => {
        e.preventDefault()
        let user = {
            mail: inputMail.current.value,
            password: inputPassword.current.value,
        }
        dispatch(signIn(user))
        localStorage.setItem("token", userStore.user?.token)
        navigate("/")
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="text-2xl flex-wrap text-gray-500 text-center max-w-md">
                    Iniciá sesión para comprar tus cervezas favoritas!
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-md">
                <form onSubmit={(e) => handleSignIn(e)} className="p-4 w-full">
                    <div className="w-full">
                        <label className="text-primary-400 " htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="mail"
                            ref={inputMail}
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
                            ref={inputPassword}
                        />
                    </div>
                    <div className="flex items-center">
                        <Link
                            className="flex w-full justify-center no-underline p-3 bg-primary-300 text-white rounded-sm border-none cursor-pointer text-lg font-bold transition-all duration-100 ease-in-out"
                            type='submit'
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
