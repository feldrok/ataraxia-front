import { Link as Anchor, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import userActions from '../store/users/actions'

const VerifyAccount = () => {
    const { user_id, verify_code } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userActions.verifyUser({ user_id, verify_code }))
    }, [])
    return (
        <div className="background-container h-screen w-screen bg-[url('/public/banner1.jpg')] bg-cover bg-top bg-no-repeat">
            <div className="verify-div flex h-full w-full items-center justify-center gap-4 bg-transparent">
                <div className="verify-div2 flex flex-col items-center">
                    <h1 className="verify-message m-0 bg-transparent text-[4rem] text-white">
                        Tu cuenta fue verificada!
                    </h1>
                    <Anchor
                        className="verify-redirect cursor-pointer border-0 bg-transparent text-[1.2rem] font-bold text-white"
                        to="/"
                    >
                        Iniciá sesión
                    </Anchor>
                </div>
            </div>
        </div>
    )
}

export default VerifyAccount
