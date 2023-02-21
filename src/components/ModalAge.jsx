import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function ModalAge({ modalState }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (modalState === true) {
            setIsOpen(false)
        } else if (modalState === false) {
            setIsOpen(true)
        }
    }, [modalState])

    function closeModal() {
        localStorage.setItem('mayorEdad', 'true')
        setIsOpen(false)
    }

    function doNothing() {
        console.log('menor de edad')
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={doNothing}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        ¿Eres mayor de edad?
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-2">
                                        <p className="text-sm text-gray-500">
                                            Esta página contiene venta de
                                            productos alcoholicos, si eres menor
                                            de edad no puedes ingresar.
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Al confirmar que eres mayor de edad
                                            aceptas los términos y condiciones
                                            de la página.
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-secondary-500 px-4 py-2 text-sm font-bold text-white hover:bg-secondary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Soy mayor de edad
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={doNothing}
                                        >
                                            Soy menor de edad
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
