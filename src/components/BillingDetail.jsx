import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import userActions from "../store/users/actions"
import addressActions from "../store/address/actions"
import cartActions from '../store/carts/actions'
import mpActions from "../store/mercadopago/actions"
import { decodeToken } from 'react-jwt'
import { useParams } from "react-router"

const { getProfile } = userActions
const { getAddress } = addressActions
const { getCart } = cartActions
const { createOrderMp } = mpActions

const BillingDetail = () => {

    const storeUser = useSelector((store) => store.user)
    const storeAddress = useSelector((store) => store.address)
    const storeCart = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const param = useParams()

    const { id } = param

    useEffect(() => {
        dispatch(getProfile())
        dispatch(getAddress(id))
        let token = localStorage.getItem('token')
        if (token) {
            token = decodeToken(localStorage.getItem('token')).id
        }
        let guestToken = localStorage.getItem('guestToken')
        dispatch(getCart(token ? token : guestToken))
    }, [])

    const user = storeUser.profile.response
    const address = storeAddress.address.response

    const orderMp = () => {
        dispatch(createOrderMp(storeCart))
    }

    return (
        <div className="flex w-full h-screen flex-col items-center justify-center">
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
                        <td className="p-2">Pais:</td>
                        <td className="p-2" colSpan="4">
                            {address?.country}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">Provincia:</td>
                        <td className="p-2" colSpan="4">
                            {address?.state}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">Ciudad:</td>
                        <td className="p-2" colSpan="4">
                            {address?.city}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">Direccion:</td>
                        <td className="p-2" colSpan="4">
                            {address?.street}
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">Codigo Postal:</td>
                        <td className="p-2" colSpan="4">
                            {address?.zipcode}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                type="submit"
                className="mt-10 rounded-md bg-tertiary-500 p-4 font-medium text-white duration-300 hover:bg-tertiary-400"
                onClick={orderMp}
            >
                Continuar
            </button>
        </div>
    )
}

export default BillingDetail