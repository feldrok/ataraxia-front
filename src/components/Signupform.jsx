import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { computeHeadingLevel } from '@testing-library/react'
import { toast } from 'react-hot-toast'
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
    const verify_password = useRef('')
    const navigate = useNavigate()

    const captureData = async (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            lastName: lastName.current.value,
            dni: dni.current.value,
            mail: mail.current.value,
            password: password.current.value,
            verify_password: verify_password.current.value,
        }
        dispatch(addUser(data))
    }

    useEffect(() => {
        if (userStore.message === 'Usuario creado con éxito') {
            toast.success(
                `${userStore.message}, por favor revisa tu correo electrónico y verifica tu cuenta.`
            )

            navigate('/', { replace: true })
        }
        if (
            userStore.message?.data?.response === 'Las contraseñas no coinciden'
        ) {
            toast.error(userStore.message?.data?.response)
        }
        if (userStore.message?.data?.response?.length > 0) {
            userStore.message?.data?.response?.map((error) => {
                toast.error(error.message)
            })
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
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-primary-500" htmlFor="password">
                            Contraseña <span className='text-xs text-black'>(8 caracteres mínimo)</span>
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
                            id="password"
                            ref={password}
                            key="password"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label
                            className="text-primary-500"
                            htmlFor="verify_password"
                        >
                            Repetir contraseña
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="mb-4 flex w-full flex-col items-center justify-center rounded-sm border p-2 no-underline shadow-sm transition-all duration-100 ease-in-out"
                            id="verify_password"
                            ref={verify_password}
                            key="verify_password"
                            required
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
