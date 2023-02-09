import { Link, useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'

import { useDispatch } from 'react-redux'

/* import userActions from "../../store/user/actions" */

/* const { addUser } = userActions */

function SignupUser() {
    /*     const dispatch = useDispatch()
    const mail = useRef("")
    const password = useRef("")
    const navigate = useNavigate()

    const captureData = async (e) => {
        e.preventDefault()
        let data = {
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value,
        }
        let res = await dispatch(addUser(data))
        if (res.payload.success) {
            navigate("/", { replace: true })
        }
    } */

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="text-2xl flex-wrap text-gray-500 text-center max-w-md">
                    Crea tu cuenta y alcanza la Ataraxia!
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-md">
                <form className="p-4 w-full">
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="name"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="lastName">
                            Apellido
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="lastName"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="dni">
                            Número de DNI
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="dni"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-sm mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="mail"
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="password">
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
                            Crear cuenta
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignupUser
