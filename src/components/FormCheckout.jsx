import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
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
        if (storeUser.message === 'Usuario autenticado') {
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

    const createOrder = () => {
        dispatch(createOrderMp(storeCart))
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 flex flex-col items-center justify-center md:order-1">
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
                    <UserCheckoutForm session={isLogged} />
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
