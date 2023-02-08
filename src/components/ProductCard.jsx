import React from 'react'

function ProductCard({
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

    const renderDetails = (category) => {
        if (category === 'cervezas') {
            return (
                <>
                    <div className="p-2">
                        <h1 className={`text-2xl font-bold ${textColor}`}>
                            {name}
                        </h1>
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
                        <input
                            className="w-12 font-bold rounded-sm pl-2"
                            type="number"
                            defaultValue={1}
                            min={1}
                            max={stock}
                        />
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        } else if (category === 'packs') {
            return (
                <>
                    <div className="p-2">
                        <h1 className={`text-2xl font-bold text-gray-700`}>
                            {name}
                        </h1>
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
                        <input
                            className="w-12 font-bold rounded-sm pl-2"
                            type="number"
                            defaultValue={1}
                            min={1}
                            max={stock}
                        />
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        } else if (category === 'merch') {
            return (
                <>
                    <div className="p-2">
                        <h1 className={`text-2xl font-bold text-gray-700`}>
                            {name}
                        </h1>
                        <p className="text-gray-600 font-medium text-xl">
                            ${price}
                        </p>
                    </div>
                    <div
                        className={`flex bg-gray-700 hover:bg-gray-500 duration-300 p-2 cursor-pointer rounded-sm`}
                    >
                        <input
                            className="w-12 font-bold rounded-sm pl-2"
                            type="number"
                            defaultValue={1}
                            min={1}
                            max={stock}
                        />
                        <button className="text-white font-bold w-full h-full">
                            Agregar al carro
                        </button>
                    </div>
                </>
            )
        }
    }

    if (image.length > 0) {
        image = image[0]
    }

    return (
        <div className="flex flex-col w-64 shadow-md hover:scale-105 hover:shadow-none duration-300 rounded-sm select-none">
            <div className="rounded-sm">
                <img src={image} alt="" />
            </div>
            {renderDetails(category)}
        </div>
    )
}

export default ProductCard
