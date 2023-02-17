import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DetailOrder from '../../components/DetailOrder'
import { decodeToken } from 'react-jwt'
import orderActions from '../../store/orders/actions'
import { useSearchParams } from 'react-router-dom'

const { createOrder } = orderActions

const OrderDetail = () => {
    const storeUser = useSelector((state) => state.user)
    const storeOrders = useSelector((state) => state.orders)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()

    const currentParams = Object.fromEntries([...searchParams])

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(token).id
            console.log(token)
        }
        let guestToken = localStorage.getItem('guestToken')
        const currentParams = Object.fromEntries([...searchParams])
        dispatch(
            createOrder({
                id: token ? token : guestToken,
                preference_id: currentParams.preference_id,
                status: currentParams.status,
            })
        )
    }, [])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
            <div className=" flex w-2/4 flex-col items-center gap-10 rounded-lg bg-lime-600 p-5 text-white">
                <p className="text-center text-2xl">
                    Su compra se realizo correctamente!
                </p>
                <img className="w-16" src="../check.png" alt="" />
            </div>
            <DetailOrder id={currentParams.preference_id} />
            <div className="flex gap-2 text-xl">
                <div className=" text-gray-600">Volver al</div>
                <Link className="font-bold text-primary-500" to={'/'}>
                    Inicio
                </Link>
            </div>
        </div>
    )
}

export default OrderDetail
