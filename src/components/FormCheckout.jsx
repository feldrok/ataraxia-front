import { Link, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OrderDetails from './OrderDetails'
import UserCheckoutForm from './UserCheckoutForm'
import cartActions from '../store/carts/actions'

const { getCart } = cartActions

const FormCheckout = () => {
    const storeCart = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const params = useParams()

    const { id } = params

    useEffect(() => {
        dispatch(getCart(id))
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 pt-20 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center">
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
                    <UserCheckoutForm />
                </div>
                <OrderDetails
                    user={storeCart.cart.cart?.response[0].user_id}
                    items={storeCart.cart.cart?.response[0].products}
                    price={storeCart.cart.cart?.response[0].total_price}
                />
            </div>
        </>
    )
}

export default FormCheckout
