import { Outlet } from 'react-router'
import React from 'react'

export default function Orders() {
    return (
        <div className="flex min-h-[800px] flex-col items-center justify-start">
            <Outlet />
        </div>
    )
}
