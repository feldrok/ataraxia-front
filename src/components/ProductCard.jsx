import { Link } from 'react-router-dom'
import React from 'react'

function ProductCard({
    id,
    name,
    image,
    price,
    abv,
    ibu,
    category,
    ml,
    packSize,
    stock,
}) {
    const [quantity, setQuantity] = React.useState(1)
    let bgColor
    let bgHoverColor
    let textColor
    if (name === 'Scottish Ale') {
        bgColor = 'bg-primary-500'
        bgHoverColor = 'hover:bg-primary-300'
        textColor = 'text-primary-500'
    } else if (name === 'IPA') {
        bgColor = 'bg-secondary-500'
        bgHoverColor = 'hover:bg-secondary-300'
        textColor = 'text-secondary-500'
    } else if (name === 'Stout') {
        bgColor = 'bg-tertiary-500'
        bgHoverColor = 'hover:bg-tertiary-300'
        textColor = 'text-tertiary-500'
    } else if (name === 'Blonde Ale') {
        bgColor = 'bg-quaternary-500'
        bgHoverColor = 'hover:bg-quaternary-300'
        textColor = 'text-quaternary-500'
    }

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

    const renderDetails = (category) => {
        if (category === 'cervezas') {
            return (
                <>
                    <div className="rounded-sm relative">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                            <img
                                className="absolute top-0 hover:scale-125 duration-300"
                                src={image[1]}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to={`/product/${id}`}
                            className={`text-2xl font-bold ${textColor}`}
                        >
                            {name}
                        </Link>
                        <div className="flex justify-between">
                            <p className="text-gray-500">IBU {ibu}</p>
                            <p className="text-gray-500">
                                ABV <span>{abv}%</span>
                            </p>
                        </div>
                        <p className="text-gray-600 font-medium text-xl">
                            ${price}
                        </p>
                    </div>
                    <div
                        className={`flex ${bgColor} ${bgHoverColor} duration-300 p-2 cursor-pointer rounded-sm`}
                    >
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
                                max={stock}
                                type="number"
                            />
                            <button
                                className="hover:bg-gray-300"
                                onClick={sumQuantity}
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
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        } else if (category === 'packs') {
            return (
                <>
                    <div className="rounded-sm relative">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to={`/product/${id}`}
                            className={`text-2xl font-bold text-gray-700`}
                        >
                            {name}
                        </Link>
                        <div className="flex justify-between text-gray-500">
                            <p>{packSize} unidades</p>
                            <p>{ml}ml c/botella</p>
                        </div>
                        <p className="text-gray-600 font-medium text-xl">
                            ${price}
                        </p>
                    </div>
                    <div
                        className={`flex bg-gray-700 hover:bg-gray-500 duration-300 p-2 cursor-pointer rounded-sm`}
                    >
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
                                max={stock}
                                type="number"
                            />
                            <button
                                className="hover:bg-gray-300"
                                onClick={sumQuantity}
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
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        } else if (category === 'merch') {
            return (
                <>
                    <div className="rounded-sm relative">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                            <img
                                className="absolute top-0 hover:scale-125 hover:-translate-y-10 duration-300"
                                src={image[1]}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to={`/product/${id}`}
                            className={`text-2xl font-bold text-gray-700`}
                        >
                            {name}
                        </Link>
                        <p className="text-gray-600 font-medium text-xl">
                            ${price}
                        </p>
                    </div>
                    <div
                        className={`flex bg-gray-700 hover:bg-gray-500 duration-300 p-2 cursor-pointer rounded-sm`}
                    >
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
                                max={stock}
                                type="number"
                            />
                            <button
                                className="hover:bg-gray-300"
                                onClick={sumQuantity}
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
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="flex flex-col w-64 shadow-md hover:scale-105 hover:shadow-none duration-300 rounded-sm select-none">
            {renderDetails(category)}
        </div>
    )
}

export default ProductCard
