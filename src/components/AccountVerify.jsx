import { Link as Anchor, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import userActions from '../store/users/actions'

const { verifyUser } = userActions

const VerifyAccount = () => {
    const { user_id, verify_code } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(verifyUser({ user_id, verify_code }))
    }, [])
    return (
        <div className="background-container h-screen w-screen bg-[url('/public/banner1.jpg')] bg-cover bg-top bg-no-repeat">
            <div className="flex h-full w-full items-center justify-center gap-4 bg-transparent">
                <div className="flex flex-col items-center gap-6 rounded-md bg-[rgba(0,0,0,.7)] p-8 text-center">
                    <h1 className="verify-message m-0 bg-transparent text-[4rem] text-white">
                        Tu cuenta fue verificada!
                    </h1>
                    <Anchor
                        className="cursor-pointer rounded-md border-0 bg-primary-500 p-4 text-xl font-bold text-white"
                        to="/signin"
                    >
                        Iniciá sesión
                    </Anchor>
                </div>
            </div>
        </div>
    )
}

export default VerifyAccount
