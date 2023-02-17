import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { ThreeDots } from 'react-loading-icons'
import cartActions from '../store/carts/actions'
import { decodeToken } from 'react-jwt'
import { useDispatch } from 'react-redux'

const { getCart, updateCart, deleteItem } = cartActions

function CartItem({ product }) {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    const producto = product.product_id

    useEffect(() => {
        setQuantity(product?.quantity)
    }, [product])

    const handleUpdate = async (quant) => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        let productUpdate = {
            product_id: producto._id,
            quantity: quant,
        }
        try {
            setLoading(true)
            await dispatch(
                updateCart({
                    id: token ? token : guestToken,
                    product: productUpdate,
                })
            )
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            await dispatch(getCart(token ? token : guestToken))
        }
    }

    const handleDeleteItem = async () => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        try {
            let product = {
                product_id: producto._id,
            }
            setLoading(true)
            await dispatch(
                deleteItem({
                    id: token ? token : guestToken,
                    product_id: product,
                })
            )
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
            await dispatch(getCart(token ? token : guestToken))
        }
    }

    const sumQuantity = () => {
        if (quantity !== producto?.stock) {
            handleUpdate(quantity + 1)
            setQuantity(quantity + 1)
        } else {
            handleUpdate(product?.stock)
            setQuantity(producto?.stock)
        }
    }

    const reduceQuantity = () => {
        if (quantity === 1) {
            handleUpdate(1)
            setQuantity(1)
        } else if (quantity === 0) {
            handleDeleteItem()
        } else {
            handleUpdate(quantity - 1)
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="relative flex w-full justify-center p-1">
            {loading === true ? (
                <div className="absolute flex h-full w-full items-center justify-center bg-[rgba(255,255,255,.8)]">
                    <ThreeDots stroke="black" />
                </div>
            ) : null}

            <Link to={`/product/${producto?._id}`} className="flex h-32 w-32">
                <img
                    className="h-32 w-32 rounded-md object-cover shadow-md"
                    src={producto?.image[0]}
                    alt=""
                />
            </Link>
            <div className="flex w-32 flex-col justify-evenly p-2">
                <Link
                    to={`/product/${producto?._id}`}
                    className="font-bold text-gray-800"
                >
                    {producto?.name}
                </Link>
                <p className="text-sm text-gray-600">
                    {producto?.ml ? `${producto?.ml} ml` : null}
                </p>
                <div className="flex w-min rounded-md border bg-gray-100 shadow-md">
                    <button
                        className="hover:bg-gray-300"
                        onClick={reduceQuantity}
                    >
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
            </div>
            <div className="flex flex-col justify-between p-2">
                <div className="flex w-full justify-end">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="h-6 w-6 cursor-pointer stroke-gray-500"
                        onClick={handleDeleteItem}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h2 className="whitespace-nowrap text-sm text-gray-800">
                        ${producto?.price} c/u
                    </h2>
                    <h1 className="font-bold text-gray-900">
                        ${producto?.price * quantity}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default CartItem
