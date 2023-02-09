import CartItem from './CartItem'
import React from 'react'

function OrderDetails() {
    return (
        <div className="grid bg-gray-100 shadow-md rounded-sm m-2">
            <div className="border-b-2 border-gray-300 w-100 py-10 overflow-y-auto h-80">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="flex flex-col items-center gap-4 text-gray-600 justify-center border-b-2 border-gray-300 py-6">
                <p>Tiene un codigo promocional?</p>
                <form className="flex p-2 items-center gap-2 min-w-56 max-w-sm justify-center">
                    <input
                        type="text"
                        placeholder="Ingresa tu código"
                        className="w-full h-10 p-4 block sm:text-sm border border-gray-200 rounded-sm focus:border-tertiary-500 duration-300 focus:outline-none"
                    />
                    <button className="p-2 cursor-pointer bg-tertiary-500 rounded-md text-white">
                        Aplicar
                    </button>
                </form>
            </div>
            <div className="flex flex-col w-full items-center py-2">
                <p className="flex text-gray-600 text-md font-light p-2 text-center">
                    El precio del envio queda a cargo del cliente. Los pedidos
                    no pueden enviarse ni entregarse los fines de semana o días
                    festivos.
                </p>
            </div>
            <div className="flex flex-col w-full justify-center md:justify-end border-t-2 border-gray-300">
                <div className="flex justify-end w-full text-gray-500 text-lg px-4 gap-2">
                    <p className="text-lg">Subtotal: </p>
                    <p>$1000</p>
                </div>
                <div className="flex justify-end w-full text-gray-500 text-lg px-4 gap-2">
                    <p className="text-lg">IVA: </p>
                    <p>$190</p>
                </div>
                <div className="flex w-full justify-end items-center text-gray-800 gap-2 p-4">
                    <p className="text-lg">Total: </p>
                    <p className="text-3xl">$1190</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
