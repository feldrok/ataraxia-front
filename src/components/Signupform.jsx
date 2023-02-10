import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { computeHeadingLevel } from '@testing-library/react'
import userActions from "../store/users/actions"

const { addUser } = userActions

function SignupUser() {
    const userStore = useSelector((state) => state.user)
    console.log(userStore)
    const dispatch = useDispatch()
    const name = useRef("")
    const lastName = useRef("")
    const dni = useRef("")
    const mail = useRef("")
    const password = useRef("")
    const navigate = useNavigate()


    const captureData = async (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            lastName: lastName.current.value,
            dni: dni.current.value,
            mail: mail.current.value,
            password: password.current.value,
        }
        dispatch(addUser(data))
    }

    useEffect(() => {
        if (userStore.user?.success === true) {
            alert("Usuario creado con éxito!")
            navigate("/", {replace: true})
        }
        if (userStore.user === null) {
            alert("Error al crear usuario")
            navigate("/", {replace: true})
        }
    }, [userStore])

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
                            ref={name}
                            key="name"
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
                            ref={lastName}
                            key="lastName"
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
                            ref={dni}
                            key="dni"
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
                            ref={mail}
                            key="mail"
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
                            ref={password}
                            key="password"
                        />
                    </div>
                    <div className="flex items-center">
                        <Link
                            className="flex w-full justify-center no-underline p-3 bg-primary-300 text-white rounded-sm border-none cursor-pointer text-lg font-bold transition-all duration-100 ease-in-out"
                            type="submit"
                            onClick={(e) => captureData(e)}
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
