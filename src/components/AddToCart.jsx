import React, { useEffect, useState } from 'react'

import cartActions from '../store/carts/actions'
import { useDispatch } from 'react-redux'

const { getCart, addProductToCart } = cartActions

export const AddToCart = ({ stock, bgColor, bgHoverColor, id }) => {
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleAdd = async () => {
        let user_id = '63e40a702798dd1fdd45703a'
        let productUpdate = {
            product_id: id,
            quantity: quantity,
        }
        try {
            setLoading(true)
            if (quantity === 0) {
                alert('No hay stock')
            } else {
                await dispatch(
                    addProductToCart({ id: user_id, products: productUpdate })
                )
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            await dispatch(getCart(user_id))
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
