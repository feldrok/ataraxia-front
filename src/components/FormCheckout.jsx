import { Link } from 'react-router-dom'
import OrderDetails from './OrderDetails'
import React from 'react'
import UserCheckoutForm from './UserCheckoutForm'

const FormCheckout = () => {
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
                    <UserCheckoutForm />
                </div>
                <OrderDetails />
            </div>
        </>
    )
}

export default FormCheckout
