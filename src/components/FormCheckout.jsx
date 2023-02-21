import { Link, Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OrderDetails from './OrderDetails'
import UserCheckoutForm from './UserCheckoutForm'
import cartActions from '../store/carts/actions'
import { decodeToken } from 'react-jwt'
import mpActions from '../store/mercadopago/actions.js'

const { getCart } = cartActions
const { createOrderMp } = mpActions

const FormCheckout = () => {
    const storeCart = useSelector((store) => store.cart)
    const storeUser = useSelector((store) => store.user)
    const [isLogged, setIsLogged] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (
            storeUser.message === 'Usuario autenticado' ||
            storeUser.message === 'Perfil actualizado'
        ) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        dispatch(getCart(token ? token : guestToken))
    }, [storeUser])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 m-2 flex max-w-xl flex-col items-center justify-center md:order-1">
                    {isLogged ? null : (
                        <div className="text-center">
                            <p className="font-light">
                                Ingresa tus datos para el envío y facturación, o{' '}
                                <Link
                                    to={'/signup'}
                                    className="font-bold text-tertiary-500"
                                >
                                    Inicia sesión.
                                </Link>
                            </p>
                        </div>
                    )}
                    <Outlet />
                </div>
                <OrderDetails
                    items={storeCart.cart.cart?.response[0]?.products}
                    price={storeCart.cart.cart?.response[0]?.total_price}
                />
            </div>
        </>
    )
}

export default FormCheckout
