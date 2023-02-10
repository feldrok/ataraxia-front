import { Link, useParams } from 'react-router-dom'
import OrderDetails from './OrderDetails'
import React, { useEffect } from 'react'
import UserCheckoutForm from './UserCheckoutForm'
import cartActions from '../store/carts/actions'
import { useSelector, useDispatch } from 'react-redux'

const { getCart } = cartActions


const FormCheckout = () => {

    const storeCart = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const params = useParams()

    const {id} = params

    useEffect(() => {
        dispatch(getCart(id))
    }, [])

    console.log(storeCart.cart?.cart.response[0]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-20">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center">
                        <p className="font-light">
                            Ingresa tus datos para el envío y facturación, o{' '}
                            <Link
                                to={'/signup'}
                                className="text-tertiary-500 font-bold"
                            >
                                Inicia sesión.
                            </Link>
                        </p>
                    </div>
                    <UserCheckoutForm/>
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
