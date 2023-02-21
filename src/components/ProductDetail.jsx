import AddToCart from './AddToCart'
import FastBuy from './FastBuy'
import Rating from './Ratings'
import React from 'react'
import { useParams } from 'react-router'
function ProductDetail({
    abv,
    ibu,
    description,
    image,
    name,
    price,
    stock,
    ml,
    packSize,
    textColor,
    bgColor,
    bgHoverColor,
}) {
    const { id } = useParams()
    if (image?.length > 0) {
        image = image[0]
    }

    return (
        <div className="m-auto flex w-full max-w-7xl flex-wrap items-center justify-center pt-20 pb-40">
            <div className="flex w-full justify-center p-4 lg:w-1/2">
                <img className="shadow-md" src={image} alt={name} />
            </div>
            <div className="flex w-full flex-col justify-evenly p-4 lg:w-1/2">
                <div>
                    <div className="flex flex-col gap-6">
                        <h1
                            className={`text-4xl font-bold ${
                                textColor ? textColor : 'text-gray-600'
                            }`}
                        >
                            {name}
                        </h1>
                        <Rating/>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    <div className="flex flex-col gap-2 py-4 text-xl font-bold">
                        <h2
                            className={
                                stock === 0 ? 'text-red-500' : 'text-gray-600'
                            }
                        >
                            <span
                                className={`${
                                    textColor ? textColor : 'text-gray-600'
                                }`}
                            >
                                Stock:{' '}
                            </span>
                            {stock === 0 ? 'Sin stock' : stock}
                        </h2>
                        {abv ? (
                            <h2 className="text-gray-600">
                                <span
                                    className={`${
                                        textColor ? textColor : 'text-gray-600'
                                    }`}
                                >
                                    ABV
                                </span>{' '}
                                {abv}%
                            </h2>
                        ) : null}
                        {ibu ? (
                            <h2 className="text-gray-600">
                                <span
                                    className={`${
                                        textColor ? textColor : 'text-gray-600'
                                    }`}
                                >
                                    IBU
                                </span>{' '}
                                {ibu}
                            </h2>
                        ) : null}
                        {packSize ? (
                            <h2
                                className={`${
                                    textColor ? textColor : 'text-gray-600'
                                }`}
                            >
                                {' '}
                                {packSize} botellas
                            </h2>
                        ) : null}
                        {ml ? (
                            <h2
                                className={`${
                                    textColor ? textColor : 'text-gray-600'
                                }`}
                            >
                                {ml}ml c/botella
                            </h2>
                        ) : null}
                    </div>
                    <h1 className="py-4 text-4xl font-bold">${price}</h1>
                </div>
                {stock > 0 ? (
                    <div className="flex flex-col gap-4">
                        <AddToCart
                            stock={stock}
                            bgColor={bgColor}
                            bgHoverColor={bgHoverColor}
                            id={id}
                        />
                    </div>
                ) : (
                    <div>
                        <h1 className="py-4 text-2xl font-bold text-gray-600">
                            Producto sin stock, porfavor intenta más tarde.
                        </h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
