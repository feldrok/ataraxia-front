import React from "react"

const FormCheckout = () => {

    return (
        <>
            <div className="grid grid-cols-7 min-h-full">
                <div className="grid col-span-7 lg:col-span-3 bg-gray-100 items-center justify-center">
                    <div className="grid grid-cols-6 border-b-2 border-gray-300 w-100 py-10">
                        <div className="col-span-4 justify-center items-start flex">
                            <img className="w-40" src="https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/scottish.png?alt=media&token=c98c002a-d44a-4ca5-838c-341ca3b830da" alt="" />
                            <div className="gird text-gray-600 col-span-2px-5">
                                <p className="font-bold">Cerveza Scottish Ale</p>
                                <p>Cervezas</p>
                                <p><span className="font-bold">Ibu:</span> 12</p>
                                <p><span className="font-bold">Abv:</span> 4.8</p>
                                <p><span className="font-bold">Cantidad:</span> 1</p>
                            </div>
                        </div>
                        <div className="self-end text-gray-600">
                            <p className="font-bold">Price: $1000</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-gray-600 justify-center border-b-2 border-gray-300 py-10">
                        <p>Tiene un codigo promocional?</p>
                        <form className="grid grid-cols-7 gap-2 w-4/5 justify-center" action="">
                            <input type="text" placeholder="Ingrese codigo" className="grid col-span-5 md:col-span-6 w-full h-10 p-4 rounded-sm border border-gray-300" />
                            <button className="block cursor-pointer bg-tertiary-500 rounded-md text-white text-sm lg:text-md col-span-2 md:col-span-1 h-10">
                                Aplicar
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col w-full items-center py-2">
                        <div className="flex gap-40 text-gray-600 text-lg pb-4">
                            <p>Subtotal: </p>
                            <p>$1000</p>
                        </div>
                        <p className="flex text-gray-600 text-lg w-4/5">El precio del envio queda a cargo del cliente. Los pedidos no pueden enviarse ni entregarse los fines de semana o días festivos. </p>
                    </div>
                    <div className="flex w-full justify-center lg:justify-end py-4 border-t-2 border-gray-300 pr-5">
                        <div className="flex items-end gap-10">
                            <p>Total:</p>
                            <p className="text-3xl">$1000</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 col-span-7 lg:col-span-4 h-screen">
                    <form className="h-screen" action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md text-gray-600 h-screen">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="h-3/4 grid grid-cols-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
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

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Direccion
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            Localidad
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            autoComplete="address-level2"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            Provincia
                                        </label>
                                        <input
                                            type="text"
                                            name="region"
                                            id="region"
                                            autoComplete="address-level1"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            Codigo Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="w-full h-10 p-4 mt-1 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex h-10 justify-center rounded-md border border-transparent bg-tertiary-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-tertiary-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormCheckout