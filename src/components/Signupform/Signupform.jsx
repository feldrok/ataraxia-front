import { Link, useNavigate } from "react-router-dom"
import React, { useRef } from "react"

import { useDispatch } from "react-redux"

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
            <div className="flex flex-col justify-center items-center m-8">
                <h1 className="text-[1.2rem] flex-wrap text-gray-500">
                    Creá tu cuenta de Ataraxia y unite a nuestra comunidad!
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-md">
                <form className=" w-full">
                    <div className="w-full">
                        <label className=" relative left-4 text-primary-400 " htmlFor="name">
                            Nombre
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-md mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="name"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" relative left-4 text-primary-400 " htmlFor="lastName">
                            Apellido
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-md mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="lastName"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" relative left-4 text-primary-400 " htmlFor="dni">
                            Número de DNI
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-md mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="dni"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" relative left-4 text-primary-400 " htmlFor="mail">
                            E-Mail
                        </label>
                        <input
                            autoComplete="false"
                            type="text"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-md mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="mail"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" relative left-4 text-primary-400 " htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            autoComplete="false"
                            type="password"
                            className="flex flex-col justify-center items-center p-2 w-full border rounded-sm shadow-md mb-4 no-underline transition-all duration-100 ease-in-out"
                            id="password"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-4 p-2">
                        <Link className="flex w-full justify-center no-underline p-3 bg-primary-300 text-white rounded-sm border-none cursor-pointer text-lg font-bold transition-all duration-100 ease-in-out" to={"/"}>
                            Crear cuenta
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignupUser
