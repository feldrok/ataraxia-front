import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Address from './Address'
import addresActions from '../store/address/actions'
import { useEffect } from 'react'

const { getUserAddresses } = addresActions

function UserCheckoutForm({ session }) {
    const [isLogged, setIsLogged] = useState(session)
    const [hasAddresses, setHasAddresses] = useState(false)
    const storeUser = useSelector((state) => state.user)
    const storeAddress = useSelector((state) => state.address)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLogged(session)
    }, [session])

    useEffect(() => {
        if (isLogged === true) {
            dispatch(getUserAddresses())
        } else {
            setIsLogged(false)
        }
    }, [storeUser])

    useEffect(() => {
        if (storeAddress.addresses?.response?.length > 0) {
            setHasAddresses(true)
        } else {
            setHasAddresses(false)
        }
    }, [storeAddress])

    return (
        <form className="m-2 flex w-full flex-col justify-center rounded-sm text-gray-600 shadow-md">
            {hasAddresses ? (
                <div className="h-full bg-gray-100 p-6">
                    <h1></h1>
                    <Address />
                </div>
            ) : (
                <>
                    <div className="h-full bg-gray-100 p-6">
                        <div className="grid grid-cols-6 gap-2 md:grid-cols-12">
                            {isLogged ? null : (
                                <>
                                    <div className="col-span-6 md:col-span-6">
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 md:col-span-6">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 md:col-span-12">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="col-span-6 md:col-span-4">
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Pais
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-sm border border-gray-300 bg-white py-2 px-3 focus:border-tertiary-500 focus:outline-none focus:ring-tertiary-500 sm:text-sm"
                                >
                                    <option>Chile</option>
                                    <option>Argentina</option>
                                </select>
                            </div>

                            <div className="col-span-6 md:col-span-8">
                                <label
                                    htmlFor="street-address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Direccion
                                </label>
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 md:col-span-4">
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Localidad
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 md:col-span-4">
                                <label
                                    htmlFor="region"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Provincia
                                </label>
                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 md:col-span-4">
                                <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Codigo Postal
                                </label>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="mt-1 block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="rounded-md bg-tertiary-500 p-4 font-medium text-white duration-300 hover:bg-tertiary-400"
                        >
                            Continuar
                        </button>
                    </div>
                </>
            )}
        </form>
    )
}

export default UserCheckoutForm
