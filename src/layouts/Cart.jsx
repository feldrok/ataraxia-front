import { Link } from 'react-router-dom'
import React from 'react'

function Cart({ handleOnClick }) {
    return (
        <div
            class="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2
                                            class="text-lg font-medium text-gray-900"
                                            id="slide-over-title"
                                        >
                                            Carrito cervecero
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span class="sr-only">
                                                    Close panel
                                                </span>
                                                <svg
                                                    onClick={handleOnClick}
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div class="mt-6">
                                        <a
                                            href="#"
                                            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            <button
                                                type="button"
                                                class="font-medium text-indigo-600 hover:text-indigo-500"
												onClick={handleOnClick}
                                            >
                                                Continue Shopping
                                                <span aria-hidden="true">
                                                    {' '}
                                                    &rarr;
                                                </span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
