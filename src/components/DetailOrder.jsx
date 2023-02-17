import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import orderActions from '../store/orders/actions'

const { getOrder } = orderActions

function DetailOrder({ id }) {
    const storeOrders = useSelector((state) => state.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        if (
            storeOrders.message !== 'Orden obtenida' ||
            storeOrders.message !== 'Error al obtener la orden'
        ) {
            dispatch(getOrder({ id: id }))
        }
    }, [storeOrders.message])

    console.log(storeOrders)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="m-2 flex max-w-2xl flex-col items-center rounded-md bg-gray-100 p-4">
                <div>
                    <div className="flex p-4">
                        <h1 className="text-2xl font-semibold text-gray-700">
                            Detalles del pedido
                        </h1>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2">
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Producto
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Cantidad
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Precio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeOrders.order?.response?.products?.map(
                                (product) => (
                                    <tr
                                        key={product?.product_id?.name}
                                        className="duration-100 hover:bg-gray-200"
                                    >
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {product?.product_id?.name}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            {product?.quantity}
                                        </td>
                                        <td className="border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                            $
                                            {product?.product_id?.price
                                                .toLocaleString({
                                                    style: 'currency',
                                                    currency: 'ARS',
                                                })
                                                .replace(',', '.')}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <div className="flex justify-end p-4">
                        <p className="text-md font-semibold text-gray-600">
                            Total: $
                            {storeOrders.order?.response?.total_price
                                .toLocaleString({
                                    style: 'currency',
                                    currency: 'ARS',
                                })
                                .replace(',', '.')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailOrder
