import React from 'react'

function UserCheckoutForm() {
    return (
        <form className="shadow-md rounded-sm text-gray-600 flex flex-col justify-center m-2 w-full">
            <div className="bg-gray-100 p-6 h-full">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
                        />
                    </div>

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
                            <option>Uruguay</option>
                            <option>Peru</option>
                            <option>Brasil</option>
                            <option>Mexico</option>
                            <option>Paraguay</option>
                            <option>EEUU</option>
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
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
                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right sm:px-6">
                <button
                    type="submit"
                    className="bg-tertiary-500 hover:bg-tertiary-400 text-white rounded-md font-medium p-4 duration-300"
                >
                    Continuar
                </button>
            </div>
        </form>
    )
}

export default UserCheckoutForm
