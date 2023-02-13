import { Link, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decodeToken } from 'react-jwt'

import OrderDetails from './OrderDetails'
import UserCheckoutForm from './UserCheckoutForm'
import cartActions from '../store/carts/actions'
import userActions from '../store/users/actions'
import mpActions from '../store/mercadopago/actions.js'

const { getCart } = cartActions
const { getProfile } = userActions
const { createOrderMp } = mpActions

const FormCheckout = () => {
    const storeCart = useSelector((store) => store.cart)
    const storeUser = useSelector((store) => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        dispatch(getCart(token ? token : guestToken))
        dispatch(getProfile())
    }, [])

    
    const user = storeUser?.profile?.response
    
    const createOrder = () => {
        dispatch(createOrderMp(storeCart))
    }

    return (
        <>
            <div className="grid grid-cols-1 pt-20 md:grid-cols-2">
                <div className="order-2 flex flex-col items-center justify-center md:order-1">
                    {/* <div className="text-center">
                        <p className="font-light">
                            Ingresa tus datos para el envío y facturación, o{' '}
                            <Link
                                to={'/signup'}
                                className="font-bold text-tertiary-500"
                            >
                                Inicia sesión.
                            </Link>
                        </p>
                    </div> */}
                    <div className='w-full flex flex-col items-center justify-center'>
                        <table className="border-collapse border-gray-300 w-3/4">
                            <thead className='border-2 bg-gray-100 text-lg'>
                                <tr>
                                    <th colSpan="2" className='p-2'>Datos de facturacion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-2'>Nombre:</td>
                                    <td className='p-2' colSpan="4" >{user?.name}</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Apellido:</td>
                                    <td className='p-2' colSpan="4" >{user?.lastName}</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Mail:</td>
                                    <td className='p-2' colSpan="4" >{user?.mail}</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>DNI:</td>
                                    <td className='p-2' colSpan="4" >{user?.dni}</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Direccion:</td>
                                    <td className='p-2' colSpan="4" >-</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Pais:</td>
                                    <td className='p-2' colSpan="4" >-</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Localidad:</td>
                                    <td className='p-2' colSpan="4" >-</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>Codigo Postal:</td>
                                    <td className='p-2' colSpan="4" >-</td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            type="submit"
                            className="bg-tertiary-500 hover:bg-tertiary-400 text-white rounded-md font-medium p-4 mt-10 duration-300"
                            onClick={createOrder}
                        >
                            Continuar
                        </button>
                    </div>
                    {/* <UserCheckoutForm /> */}
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
