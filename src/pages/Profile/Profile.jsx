import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import orderActions from '../../store/orders/actions'
import { useNavigate } from 'react-router'
import userActions from '../../store/users/actions'

const { getUserOrders } = orderActions
const { getProfile } = userActions

function Profile() {
    const storeUser = useSelector((store) => store.user)
    const storeOrders = useSelector((store) => store.orders)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (storeUser.user === null) {
            navigate('/signin')
        }
        if (storeUser.user?.response?.user) {
            dispatch(getProfile(storeUser.user?.response?.user?.id))
        }
        dispatch(getUserOrders())
    }, [storeUser.user])

    return (
        <div className="flex h-[800px] w-full flex-col items-center">
            <div className="m-2 flex w-full flex-col rounded-md bg-gray-100 p-8 md:w-1/2">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-600">
                        Hola, {storeUser.profile?.response?.name}{' '}
                        {storeUser.profile?.response?.lastName}
                    </h2>
                    <p className="text-gray-500">
                        Email: {storeUser.profile?.response?.mail}
                    </p>
                </div>
            </div>
            <div className="m-2 flex w-full flex-col rounded-md bg-gray-100 p-8 md:w-1/2">
                <h1 className="text-xl font-medium text-gray-600">
                    Tus pedidos
                </h1>
                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Id Pedido
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Fecha
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Total
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeOrders.orders?.response?.length === 0 ? (
                                <tr className="border-b">
                                    <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                        No hay pedidos
                                    </td>
                                </tr>
                            ) : (
                                storeOrders.orders?.response?.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order._id}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order.createdAt}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            ${order.total_price}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order.statusOrder}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile
