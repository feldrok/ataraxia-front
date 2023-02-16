import { Outlet, useNavigate } from 'react-router'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

export default function Orders() {
    const storeUser = useSelector((state) => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!storeUser.user?.response?.user?.is_admin) {
            navigate('/signin')
        }
    }, [storeUser.user.response?.user])
    return (
        <div className="flex min-h-[800px] flex-col items-center justify-start">
            <Outlet />
        </div>
    )
}
