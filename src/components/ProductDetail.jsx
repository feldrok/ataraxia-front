import AddToCart from './AddToCart'
import FastBuy from './FastBuy'
import React from 'react'
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
    if (image?.length > 0) {
        image = image[0]
    }

    return (
        <div className="flex flex-wrap justify-center pt-20 pb-40 w-full">
            <div className="w-full lg:w-1/2 p-4 flex justify-center">
                <img className="shadow-md" src={image} alt={name} />
            </div>
            <div className="flex flex-col justify-evenly w-full lg:w-1/2 p-4">
                <div>
                    <div className="flex flex-col gap-6">
                        <h1
                            className={`text-4xl font-bold ${
                                textColor ? textColor : 'text-gray-600'
                            }`}
                        >
                            {name}
                        </h1>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    <div className="text-xl flex flex-col gap-2 font-bold py-4">
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
                    <h1 className="text-4xl font-bold py-4">${price}</h1>
                </div>
                {stock > 0 ? (
                    <div className="flex flex-col gap-4">
                        <AddToCart
                            stock={stock}
                            bgColor={bgColor}
                            bgHoverColor={bgHoverColor}
                            width={80}
                            className="w-60"
                        />
                        <FastBuy
                            textColor={textColor}
                            bgColor={bgColor}
                            bgHoverColor={bgHoverColor}
                            image={image}
                            price={price}
                            stock={stock}
                            name={name}
                        />
                    </div>
                ) : (
                    <div>
                        <h1 className="text-2xl font-bold py-4 text-gray-600">
                            Producto sin stock, porfavor intenta más tarde.
                        </h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
