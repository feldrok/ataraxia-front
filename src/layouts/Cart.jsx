import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import React from 'react'

function Cart({ handleOnClick, isOpen }) {
    return (
        <>
            <nav
                className={`fixed top-0 right-0 z-30 min-h-screen duration-300 max-w-xs bg-white shadow-md overflow-hidden ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
            >
                <div className="flex flex-col justify-between w-full h-screen">
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
                        <div className="w-full flex justify-center p-2">
                            <CartItem />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center p-4">
                        <div className="flex justify-between p-2">
                            <h2 className="font-bold">Total</h2>
                            <p className="font-light">$0 ARS</p>
                        </div>
                        <Link
                            to={'/checkout'}
                            className="hover:bg-primary-500 p-4 hover:text-white text-center font-bold uppercase rounded-sm bg-white text-primary-500 border-2 border-primary-500 duration-300"
                        >
                            Proceder al pago
                        </Link>
                    </div>
                </div>
            </nav>
            <div
                className={`fixed z-20 right-0 top-0 duration-150 min-h-screen backdrop-blur-sm backdrop-brightness-70 backdrop-filter ${
                    isOpen ? 'w-full' : 'w-0'
                }`}
                onClick={handleOnClick}
            ></div>
        </>
    )
}
export default Cart
