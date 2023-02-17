import React, { useState } from 'react'

import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

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
    } else {
        bgColor = 'bg-gray-700'
        bgHoverColor = 'hover:bg-gray-500'
    }

    const renderDetails = (category) => {
        if (category === 'cervezas') {
            return (
                <>
                    <div className="relative rounded-sm">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                            <img
                                className="absolute top-0 duration-300 hover:-translate-y-5 hover:scale-125"
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
                        {stock > 0 ? (
                            <p className="text-xl font-medium text-gray-600">
                                $
                                {price
                                    .toLocaleString({
                                        style: 'currency',
                                        currency: 'ARS',
                                        minimumFractionDigits: 0,
                                        currencyDisplay: 'symbol',
                                    })
                                    .replace(',', '.')}
                            </p>
                        ) : (
                            <p className="text-xl font-bold text-red-500">
                                Sin Stock
                            </p>
                        )}
                    </div>
                    <AddToCart
                        stock={stock}
                        bgColor={bgColor}
                        bgHoverColor={bgHoverColor}
                        id={id}
                    />
                </>
            )
        } else if (category === 'packs') {
            return (
                <>
                    <div className="relative rounded-sm">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                            <img
                                className="absolute top-0 duration-300 hover:-translate-y-6 hover:scale-125"
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
                        <div className="flex justify-between text-gray-500">
                            <p>{packSize} unidades</p>
                            <p>{ml}ml c/botella</p>
                        </div>
                        <p className="text-xl font-medium text-gray-600">
                            $
                            {price
                                .toLocaleString({
                                    style: 'currency',
                                    currency: 'ARS',
                                    minimumFractionDigits: 0,
                                    currencyDisplay: 'symbol',
                                })
                                .replace(',', '.')}
                        </p>
                    </div>
                    <AddToCart
                        stock={stock}
                        bgColor={bgColor}
                        bgHoverColor={bgHoverColor}
                        id={id}
                    />
                </>
            )
        } else if (category === 'merch') {
            return (
                <>
                    <div className="relative rounded-sm">
                        <Link to={`/product/${id}`}>
                            <img src={image[0]} alt="" />
                            <img
                                className="absolute top-0 duration-300 hover:-translate-y-10 hover:scale-125"
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
                        <p className="text-xl font-medium text-gray-600">
                            $
                            {price
                                .toLocaleString({
                                    style: 'currency',
                                    currency: 'ARS',
                                    minimumFractionDigits: 0,
                                    currencyDisplay: 'symbol',
                                })
                                .replace(',', '.')}
                        </p>
                    </div>
                    <AddToCart
                        stock={stock}
                        bgColor={bgColor}
                        bgHoverColor={bgHoverColor}
                        id={id}
                    />
                </>
            )
        }
    }

    return (
        <div className="flex w-64 select-none flex-col rounded-sm shadow-md duration-300 hover:scale-105 hover:shadow-none">
            {renderDetails(category)}
        </div>
    )
}

export default ProductCard
