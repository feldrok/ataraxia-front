import React from 'react'

function CartItem() {
    const [quantity, setQuantity] = React.useState(1)

    const sumQuantity = () => {
        setQuantity(quantity + 1)
    }

    const reduceQuantity = () => {
        if (quantity === 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="flex w-full p-1 gap-2">
            <div className="flex">
                <img
                    className="w-32 h-32 object-cover rounded-md shadow-md"
                    src="https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/blondeale.png?alt=media&token=190942bf-7eeb-46f9-b2a4-9dab8e0de0c4"
                    alt=""
                />
            </div>
            <div className="flex flex-col p-2 justify-evenly">
                <h1 className="font-bold text-gray-800">Blonde Ale</h1>
                <p className="text-sm text-gray-600">355ml</p>
                <p className="text-sm text-gray-600">Botella</p>
                <div className="flex border rounded-md bg-gray-100 shadow-md">
                    <button
                        className="hover:bg-gray-300"
                        onClick={reduceQuantity}
                    >
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
                        defaultValue={quantity}
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
            </div>
            <div className="p-2 flex flex-col justify-between">
                <div className="flex w-full justify-end">
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-gray-800">$Unit</h2>
                    <h1 className="text-gray-900">$Total</h1>
                </div>
            </div>
        </div>
    )
}

export default CartItem
