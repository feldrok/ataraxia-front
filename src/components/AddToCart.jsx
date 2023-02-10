import React, { useEffect, useState } from 'react'

export const AddToCart = ({ stock, bgColor, bgHoverColor }) => {
    const [quantity, setQuantity] = useState(1)

    const sumQuantity = () => {
        if (quantity !== stock) {
            setQuantity(quantity + 1)
        } else {
            setQuantity(stock)
        }
    }

    const reduceQuantity = () => {
        if (quantity === 1) {
            setQuantity(1)
        } else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        if (stock === 0) {
            setQuantity(0)
        } else {
            setQuantity(1)
        }
    }, [stock])

    return (
        <div
            className={`flex ${bgColor} ${bgHoverColor} duration-300 p-2 cursor-pointer rounded-sm`}
        >
            <div className="flex border rounded-md bg-gray-100 shadow-md">
                <button className="hover:bg-gray-300" onClick={reduceQuantity}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                        />
                    </svg>
                </button>
                <input
                    className="w-10 text-center outline-none"
                    value={quantity}
                    max={stock}
                    type="number"
                />
                <button className="hover:bg-gray-300" onClick={sumQuantity}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </button>
            </div>
            <button className="text-white font-bold w-full h-full">
                Agregar al carro
            </button>
        </div>
    )
}

export default AddToCart
