import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import React from 'react'
import orderActions from '../../store/orders/actions.js'
import { toast } from 'react-hot-toast'

const { orderUpdate, getOrders } = orderActions

const statuses = [
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Completed',
    'Canceled',
]

export default function Orders() {
    const dispatch = useDispatch()
    const storeOrders = useSelector((state) => state.orders)
    const [status, setStatus] = useState(null)
    const [currentOrder, setCurrentOrder] = useState(null)

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    useEffect(() => {
        if (currentOrder) {
            toast.promise(
                dispatch(
                    orderUpdate({
                        id: currentOrder,
                        status: { status: status },
                    })
                ),
                {
                    loading: 'Actualizando estado...',
                    success: 'Estado actualizado correctamente',
                    error: 'Error al actualizar estado',
                }
            )
        }
    }, [status])

    console.log(storeOrders)
    return (
        <div className="flex h-[800px] flex-col items-center justify-start">
            <h1 class="text-3xl font-bold text-primary-500">Orders</h1>
            <div class="m-2 flex max-w-2xl flex-col items-center rounded-md bg-gray-100 p-4">
                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Id Pedido
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Cliente
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
                                            {order.user_id.name +
                                                ' ' +
                                                order.user_id.lastName}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order.createdAt.slice(0, 10)}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            ${order.total_price}
                                        </td>
                                        <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            <form>
                                                <select
                                                    className="p-2"
                                                    onChange={(e) => {
                                                        setStatus(
                                                            e.target.value
                                                        )
                                                        setCurrentOrder(
                                                            order._id
                                                        )
                                                    }}
                                                >
                                                    <option
                                                        value={order.status}
                                                    >
                                                        {order.statusOrder}
                                                    </option>
                                                    {statuses
                                                        .filter(
                                                            (status) =>
                                                                status !==
                                                                order.statusOrder
                                                        )
                                                        .map((status) => (
                                                            <option
                                                                key={status}
                                                                value={status}
                                                            >
                                                                {status}
                                                            </option>
                                                        ))}
                                                </select>
                                            </form>
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
