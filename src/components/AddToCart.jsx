import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cartActions from '../store/carts/actions'
import { decodeToken } from 'react-jwt'
import { toast } from 'react-hot-toast'

const { getCart, addProductToCart, createCart } = cartActions

export const AddToCart = ({ stock, bgColor, bgHoverColor, id }) => {
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)
    const storeCart = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    const handleAdd = async () => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        try {
            setLoading(true)
            if (quantity === 0) {
                toast.error('No hay stock, intenta más tarde')
            } else {
                let product = {
                    product_id: id,
                    quantity: quantity,
                }
                if (storeCart.cart.cart?.response?.length === 0) {
                    dispatch(
                        createCart({
                            id: token ? token : guestToken,
                            data: product,
                        })
                    )
                } else {
                    await toast.promise(
                        dispatch(
                            addProductToCart({
                                id: token ? token : guestToken,
                                product: product,
                            })
                        ),
                        {
                            loading: 'Cargando producto',
                            success: 'Producto agregado al carro',
                            error: 'Error al agregar el producto al carro',
                        }
                    )
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            dispatch(getCart(token ? token : guestToken))
        }
    }

    const sumQuantity = () => {
        if (quantity !== stock) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(stock)
        }
    }
    const reduceQuantity = () => {
        if (quantity === 1) {
            setQuantity(1)
        } else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        if (stock === 0) {
            setQuantity(0)
        } else {
            setQuantity(1)
        }
    }, [stock])

    return (
        <div
            className={`flex ${bgColor} ${bgHoverColor} cursor-pointer rounded-sm p-2 duration-300`}
        >
            <div className="flex rounded-md border bg-gray-100 shadow-md">
                <button className="hover:bg-gray-300" onClick={reduceQuantity}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="h-6 w-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                        />
                    </svg>
                </button>
                <input
                    className="w-10 text-center outline-none"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    max={stock}
                    type="number"
                />
                <button className="hover:bg-gray-300" onClick={sumQuantity}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="h-6 w-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </button>
            </div>
            <button
                className="h-full w-full font-bold text-white"
                onClick={handleAdd}
            >
                Agregar al carro
            </button>
        </div>
    )
}

export default AddToCart
