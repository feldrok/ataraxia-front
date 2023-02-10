import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import cartActions from '../store/carts/actions'

const { getCart } = cartActions

function Cart({ handleOnClick, isOpen }) {
    const storeCart = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    const products = storeCart.cart.cart?.response[0]?.products

    useEffect(() => {
        dispatch(getCart('63e40a702798dd1fdd45703a'))
    }, [])

    return (
        <>
            <nav
                className={`fixed top-0 right-0 z-30 min-h-screen max-w-xs overflow-hidden bg-white shadow-md duration-300 ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
            >
                <div className="flex h-screen w-full flex-col justify-between">
                    <div className="flex w-full flex-col">
                        <div className="flex w-full justify-start p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                className="h-8 w-8 cursor-pointer stroke-primary-500"
                                onClick={handleOnClick}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                        <div className="flex w-full flex-col justify-center p-2">
                            {products?.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-center p-4">
                        <div className="flex justify-between p-2">
                            <h2 className="font-bold">Total</h2>
                            <p className="font-light">
                                ${storeCart.cart.cart?.response[0]?.total_price}{' '}
                                ARS
                            </p>
                        </div>
                        <Link
                            to={'/checkout/63e40a702798dd1fdd45703a'}
                            className="rounded-sm border-2 border-primary-500 bg-white p-4 text-center font-bold uppercase text-primary-500 duration-300 hover:bg-primary-500 hover:text-white"
                        >
                            Proceder al pago
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={`backdrop-brightness-70 fixed right-0 top-0 z-20 min-h-screen backdrop-blur-sm backdrop-filter duration-150 ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={handleOnClick}
            ></div>
        </>
    )
}
export default Cart
