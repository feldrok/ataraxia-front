import React from 'react'

function BeerCard({ name, image, price, abv, ibu }) {
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

    return (
        <div className="flex flex-col w-64 shadow-md hover:scale-105 hover:shadow-none duration-300 rounded-sm select-none">
            <div className="rounded-sm">
                <img src={image} alt="" />
            </div>
            <div className="p-2">
                <h1 className={`text-2xl font-bold ${textColor}`}>{name}</h1>
                <div className="flex justify-between">
                    <p className="text-gray-500">IBU {ibu}</p>
                    <p className="text-gray-500">ABV {abv}%</p>
                </div>
                <p className="text-gray-600 font-medium text-xl">${price}</p>
            </div>
            <div
                className={`flex ${bgColor} ${bgHoverColor} duration-300 p-2 cursor-pointer rounded-sm`}
            >
                <input
                    className="w-12 font-bold rounded-sm pl-2"
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={10}
                />
                <button className="text-white font-bold w-full h-full">
                    Agregar al carro
                </button>
            </div>
        </div>
    )
}

export default BeerCard
