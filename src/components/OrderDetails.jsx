import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import cartActions from '../store/carts/actions'
import { decodeToken } from 'react-jwt'
import { toast } from 'react-hot-toast'

const { applyCoupon, getCart } = cartActions

function OrderDetails({ items, price }) {
    const storeCart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const inputCoupon = useRef(null)

    const handleCoupon = (e) => {
        e.preventDefault()
        try {
            const coupon = inputCoupon.current.value
            dispatch(
                applyCoupon({
                    id: storeCart.cart?.cart?.response[0]?._id,
                    coupon: {
                        coupon_name: coupon,
                    },
                })
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        if (storeCart.message === 'Coupon applied successfully') {
            toast.success('Cupón aplicado exitosamente')
            dispatch(getCart(token ? token : guestToken))
        }
        if (storeCart.message?.response === 'Coupon not found') {
            toast.error('El cupón ingresado no existe')
        }
    }, [storeCart])

    return (
        <div className="m-auto grid max-w-xl rounded-sm bg-gray-100 shadow-md md:order-2">
            <div className="w-100 h-80 overflow-y-auto border-b-2 border-gray-300 py-10">
                {items?.map((item) => (
                    <CartItem key={item._id} product={item} />
                ))}
            </div>
            {!storeCart.cart?.cart?.response[0]?.coupon_id ? (
                <div className="flex flex-col items-center justify-center gap-4 border-b-2 border-gray-300 py-6 text-gray-600">
                    <p>Tiene un codigo promocional?</p>
                    <form
                        onSubmit={handleCoupon}
                        className="min-w-56 flex max-w-sm items-center justify-center gap-2 p-2"
                    >
                        <input
                            type="text"
                            placeholder="Ingresa tu código"
                            ref={inputCoupon}
                            className="block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                        />
                        <input
                            type="submit"
                            className="cursor-pointer rounded-md bg-tertiary-500 p-2 text-white"
                            value="Aceptar"
                        />
                    </form>
                </div>
            ) : null}

            <div className="flex w-full flex-col items-center py-2">
                <p className="text-md flex p-2 text-center font-light text-gray-600">
                    El precio del envio queda a cargo del cliente. Los pedidos
                    no pueden enviarse ni entregarse los fines de semana o días
                    festivos.
                </p>
            </div>
            <div className="flex w-full flex-col justify-center border-t-2 border-gray-300 md:justify-end">
                <div className="flex w-full items-center justify-end gap-2 p-4 text-gray-800">
                    <p className="text-lg">Total: </p>
                    <p className="text-3xl">${Math.floor(price)}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
