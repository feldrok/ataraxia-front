import CartItem from './CartItem'
import React from 'react'

function OrderDetails({ user, items, price }) {
    return (
        <div className="m-2 grid rounded-sm bg-gray-100 shadow-md md:order-2">
            <div className="w-100 h-80 overflow-y-auto border-b-2 border-gray-300 py-10">
                {items.map((item) => (
                    <CartItem key={item.id} product={item} />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 border-b-2 border-gray-300 py-6 text-gray-600">
                <p>Tiene un codigo promocional?</p>
                <form className="min-w-56 flex max-w-sm items-center justify-center gap-2 p-2">
                    <input
                        type="text"
                        placeholder="Ingresa tu código"
                        className="block h-10 w-full rounded-sm border border-gray-200 p-4 duration-300 focus:border-tertiary-500 focus:outline-none sm:text-sm"
                    />
                    <button className="cursor-pointer rounded-md bg-tertiary-500 p-2 text-white">
                        Aplicar
                    </button>
                </form>
            </div>
            <div className="flex w-full flex-col items-center py-2">
                <p className="text-md flex p-2 text-center font-light text-gray-600">
                    El precio del envio queda a cargo del cliente. Los pedidos
                    no pueden enviarse ni entregarse los fines de semana o días
                    festivos.
                </p>
            </div>
            <div className="flex w-full flex-col justify-center border-t-2 border-gray-300 md:justify-end">
                <div className="flex w-full justify-end gap-2 px-4 text-lg text-gray-500">
                    <p className="text-lg">Subtotal: </p>
                    <p>${price}</p>
                </div>
                <div className="flex w-full justify-end gap-2 px-4 text-lg text-gray-500">
                    <p className="text-lg">IVA: </p>
                    <p>${price * 0.19}</p>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-4 text-gray-800">
                    <p className="text-lg">Total: </p>
                    <p className="text-3xl">${price * 1.19}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
