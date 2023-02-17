import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import React from 'react'
import orderActions from '../store/orders/actions.js'
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

function AdminOrders() {
    const dispatch = useDispatch()
    const [status, setStatus] = useState(null)
    const storeOrders = useSelector((state) => state.orders)
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

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="m-2 flex max-w-2xl flex-col items-center rounded-md bg-gray-100 p-4">
                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2">
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
                                    <tr
                                        key={order._id}
                                        className="duration-100 hover:bg-gray-200"
                                    >
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order._id}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order.user_id.name +
                                                ' ' +
                                                order.user_id.lastName}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {order.createdAt.slice(0, 10)}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            $
                                            {order.total_price
                                                .toLocaleString({
                                                    style: 'currency',
                                                    currency: 'ARS',
                                                    minimumFractionDigits: 0,
                                                    currencyDisplay: 'symbol',
                                                })
                                                .replace(',', '.')}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
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

export default AdminOrders
