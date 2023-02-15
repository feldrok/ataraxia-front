import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-hot-toast'
import userActions from '../store/users/actions'

const { signIn } = userActions

function Signin() {
    const storeUser = useSelector((state) => state.user)
    console.log(storeUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let inputMail = useRef('')
    let inputPassword = useRef('')

    useEffect(() => {
        if (storeUser.message === 'Logueado con éxito') {
            toast.success(storeUser.message)
            navigate('/')
        }
        if (storeUser.message === 'Contraseña incorrecta') {
            toast.error(storeUser.message)
        }
        if (storeUser.message === 'Email incorrecto') {
            toast.error(storeUser.message)
        }
    }, [storeUser])

    const handleSignIn = async (e) => {
        e.preventDefault()
        let user = {
            mail: inputMail.current.value,
            password: inputPassword.current.value,
        }
        let response = await dispatch(signIn(user))
        localStorage.setItem('token', response.payload.user.response.token)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-10">
                <h1 className="max-w-md flex-wrap text-center text-2xl text-gray-500">
                    Iniciá sesión para comprar tus cervezas favoritas!
                </h1>
            </div>
            <div className="flex w-full max-w-md flex-col items-center justify-center">
                <form onSubmit={(e) => handleSignIn(e)} className="w-full p-4">
                    <div className="w-full">
                        <label className="text-primary-400 " htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
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
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
                            id="password"
                            ref={inputPassword}
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            className="flex w-full cursor-pointer justify-center rounded-sm border-none bg-primary-300 p-3 text-lg font-bold text-white no-underline transition-all duration-100 ease-in-out"
                            type="submit"
                            /*                             to={'/'} */
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin
