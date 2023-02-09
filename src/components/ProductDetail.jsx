import React from 'react'
import BuyCard from './BuyCard'
import { BtnCart } from './BtnCart'
function ProductDetail({
    abv,
    description,
    image,
    name,
    price,
    stock,
    ml,
    textColor,
    bgColor,
    bgHoverColor,
}) {
    return (
        <div className="flex flex-wrap mt-4 p-10 w-full h-full">
            <img
                className="flex-1 md:w-2/5 lg:w-50 h-80 object-contain "
                src={image}
                alt="cerveza"
            />
            <div className="flex-2 md:w-2/5 m-auto ">
                <h1
                    className={`flex justify-center mt-3 text-xl font-bold ${textColor}`}
                >
                    {name}
                </h1>
                <p className="text-gray-600 p-3">{description}</p>
                <div className="text-xl flex justify-around font-bold ">
                    <h2>Stock:{stock} </h2>
                    {abv ? <h2> ABV {abv}%</h2> : null}
                    {ml ? <h2>355 ml</h2> : null}
                </div>
                <h1 className="mt-3 text-4xl flex justify-center font-bold">
                    ${price}
                </h1>
                <BtnCart
                    stock={stock}
                    bgColor={bgColor}
                    bgHoverColor={bgHoverColor}
                    width={80}
                    className="w-60"
                />

                <div className=" w-full">
                    <BuyCard
                        textColor={textColor}
                        bgColor={bgColor}
                        bgHoverColor={bgHoverColor}
                        image={image}
                        price={price}
                        stock={stock}
                        name={name}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
