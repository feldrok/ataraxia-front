import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { computeHeadingLevel } from '@testing-library/react'
import userActions from '../store/users/actions'

const { addUser } = userActions

function SignupUser() {
    const userStore = useSelector((state) => state.user)
    console.log(userStore)
    const dispatch = useDispatch()
    const name = useRef('')
    const lastName = useRef('')
    const dni = useRef('')
    const mail = useRef('')
    const password = useRef('')
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
        alert('Usuario creado con éxito!')
    }

    useEffect(() => {
        if (userStore.user?.success === true) {
            navigate('/', { replace: true })
        }
        if (userStore.user === null) {
            alert('Error al crear usuario')
        }
    }, [userStore])

    return (
        <>
            <div className="flex flex-col items-center justify-center p-10">
                <h1 className="max-w-md flex-wrap text-center text-2xl text-gray-500">
                    Crea tu cuenta y alcanza la Ataraxia!
                </h1>
            </div>
            <div className="flex w-full max-w-md flex-col items-center justify-center">
                <form className="w-full p-4">
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
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
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
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
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
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
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
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
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
                            id="password"
                            ref={password}
                            key="password"
                        />
                    </div>
                    <div className="flex items-center">
                        <Link
                            className="flex w-full cursor-pointer justify-center rounded-sm border-none bg-primary-300 p-3 text-lg font-bold text-white no-underline transition-all duration-100 ease-in-out"
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
