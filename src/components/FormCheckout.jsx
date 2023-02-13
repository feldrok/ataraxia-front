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

                    {/* <div className="flex w-full flex-col items-center justify-center">
                        <table className="w-3/4 border-collapse border-gray-300">
                            <thead className="border-2 bg-gray-100 text-lg">
                                <tr>
                                    <th colSpan="2" className="p-2">
                                        Datos de facturacion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">Nombre:</td>
                                    <td className="p-2" colSpan="4">
                                        {user?.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Apellido:</td>
                                    <td className="p-2" colSpan="4">
                                        {user?.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Mail:</td>
                                    <td className="p-2" colSpan="4">
                                        {user?.mail}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">DNI:</td>
                                    <td className="p-2" colSpan="4">
                                        {user?.dni}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Direccion:</td>
                                    <td className="p-2" colSpan="4">
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Pais:</td>
                                    <td className="p-2" colSpan="4">
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Localidad:</td>
                                    <td className="p-2" colSpan="4">
                                        -
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2">Codigo Postal:</td>
                                    <td className="p-2" colSpan="4">
                                        -
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            type="submit"
                            className="mt-10 rounded-md bg-tertiary-500 p-4 font-medium text-white duration-300 hover:bg-tertiary-400"
                            onClick={createOrder}
                        >
                            Continuar
                        </button>
                    </div> */}
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
