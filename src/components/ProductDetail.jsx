import React from 'react'
import BuyCard from './BuyCard'

function ProductDetail({ description, name, price, stock, abv }) {
    return (
        <div className="flex flex-wrap mt-4 p-10 w-full h-full">
            <img
                className="flex-1 md:w-2/5 lg:w-50 h-80 object-contain "
                src="https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/ipa.png?alt=media&token=3063c2e0-797e-4c05-989f-16193e208159"
                alt="cerveza"
            />
            <div className="flex-2 md:w-2/5 m-auto ">
                <h1 className="flex justify-center mt-3 text-xl font-bold text-primary-500 ">
                    {name}
                </h1>
                <p className="text-gray-600 p-3">{description}</p>
                <div className="text-xl flex justify-around font-bold ">
                    <h2>Stock:{stock} </h2>
                    <h2> ABV {abv}%</h2>
                    <h2>355 ml</h2>
                </div>
                <h1 className="mt-3 text-4xl flex justify-center font-bold">
                    ${price}
                </h1>
                <div className="bg-primary-500 mt-3 w-80 h-9 flex m-auto font-bold p-1">
                    <input
                        className="w-12 h-7 rounded"
                        type="number"
                        name=""
                        min={1}
                        max={stock}
                        placeholder={1}
                        id=""
                    />
                    <button className="hover:bg-primary-300 w-full h-full">
                        Agregar al Carrito
                    </button>
                </div>
                <div className=" w-full">
                    <BuyCard price={price} stock={stock} name={name} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
