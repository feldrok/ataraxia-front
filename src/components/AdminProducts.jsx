import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import productActions from '../store/products/actions'

const { getProducts } = productActions

function AdminProducts() {
    const storeProducts = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-end">
                <Link
                    to={'/admin/product/new'}
                    className="mr-2 rounded-md bg-primary-500 p-2 text-sm text-white duration-200 hover:bg-primary-300"
                >
                    Nuevo Producto
                </Link>
            </div>
            <div className="m-2 flex max-w-2xl flex-col items-center rounded-md bg-gray-100 p-4">
                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2">
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Nombre
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Categoría
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Precio
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Stock
                                </th>
                                <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeProducts.products?.response?.length === 0 ? (
                                <tr className="border-b">
                                    <td className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                                        No hay pedidos
                                    </td>
                                </tr>
                            ) : (
                                storeProducts.products?.response?.map(
                                    (product) => (
                                        <tr
                                            key={product._id}
                                            className="duration-100 hover:bg-gray-200"
                                        >
                                            <td
                                                className={`border-b px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider ${
                                                    product?.stock === 0
                                                        ? 'text-red-500'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                {product.name}
                                            </td>
                                            <td
                                                className={`border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                                                    product?.stock === 0
                                                        ? 'text-red-500'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                {product.category_id.name}
                                            </td>
                                            <td
                                                className={`border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                                                    product?.stock === 0
                                                        ? 'text-red-500'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                $
                                                {product.price
                                                    .toLocaleString({
                                                        style: 'currency',
                                                        currency: 'ARS',
                                                        minimumFractionDigits: 0,
                                                        currencyDisplay:
                                                            'symbol',
                                                    })
                                                    .replace(',', '.')}
                                            </td>
                                            <td
                                                className={`border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider ${
                                                    product?.stock === 0
                                                        ? 'text-red-500'
                                                        : 'text-gray-600'
                                                }`}
                                            >
                                                {product.stock}
                                            </td>
                                            <td
                                                className={`cursor-pointer border-b px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-800 hover:text-gray-400`}
                                            >
                                                <Link
                                                    to={`/admin/product/${product._id}`}
                                                >
                                                    Editar
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProducts
