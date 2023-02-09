import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function BuyCard({
    price,
    stock,
    name,
    textColor,
    bgColor,
    bgHoverColor,
}) {
    const product = {
        name: name,
        price: price,
        stock: stock,
        imageSrc:
            'https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/ipa.png?alt=media&token=3063c2e0-797e-4c05-989f-16193e208159',
        imageAlt: 'beer',
    }

    const [open, setOpen] = useState(false)

    const setButton = () => {
        setOpen(true)
    }

    return (
        <>
            <div className="flex justify-center mt-2">
                <button
                    className={`${bgColor} ${bgHoverColor} font-bold w-80 h-9`}
                    onClick={setButton}
                >
                    Compra Rapida
                </button>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">
                                                Close
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="object-cover object-center"
                                                />
                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2
                                                    className={`${textColor} text-2xl font-bold text-gray-900 sm:pr-12`}
                                                >
                                                    {product.name}
                                                </h2>

                                                <section
                                                    aria-labelledby="information-heading"
                                                    className="mt-2"
                                                >
                                                    <h3
                                                        id="information-heading"
                                                        className="sr-only"
                                                    >
                                                        Product information
                                                    </h3>

                                                    <p className="text-2xl text-gray-900">
                                                        ${product.price}
                                                    </p>
                                                </section>

                                                <section
                                                    aria-labelledby="options-heading"
                                                    className="mt-10"
                                                >
                                                    <h3
                                                        id="options-heading"
                                                        className="sr-only"
                                                    >
                                                        Product options
                                                    </h3>
                                                    <button
                                                        className={`mt-6 flex w-full items-center justify-center rounded-md border border-transparent ${bgColor} py-3 px-8 text-base font-medium text-white ${bgHoverColor} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                                    >
                                                        Comprar
                                                    </button>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
