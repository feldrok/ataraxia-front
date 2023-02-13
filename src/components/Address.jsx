import React, { useState } from 'react'

import { CheckIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Address({cart}) {
    const storeAddress = useSelector((state) => state.address)
    const [activeAddress, setActiveAddress] = useState(
        storeAddress.addresses?.response[0]?._id
    )

    return (
        <div className="flex flex-col w-full justify-center p-4">
            <RadioGroup
                value={activeAddress}
                onChange={setActiveAddress}
                defaultChecked={
                    activeAddress === storeAddress.addresses?.response[0]?._id
                }
            >
                <RadioGroup.Label className="text-2xl text-tertiary-500">
                    Tus direcciones
                </RadioGroup.Label>
                {storeAddress.addresses?.response?.map((address) => (
                    <RadioGroup.Option
                        className={({ checked }) => `
                            ${checked
                                ? 'bg-tertiary-500 text-white shadow-none'
                                : 'bg-white text-black shadow-md'
                            }
                            relative my-2 flex cursor-pointer select-none rounded-md border px-16 py-4`}
                        key={address._id}
                        value={address._id}
                        checked={address._id === activeAddress}
                    >
                        <div>
                            <div>{address.street}</div>
                            <div>
                                {address.city}, {address.state}
                            </div>
                            <div>{address.zipcode}</div>
                            <div>{address.country}</div>
                        </div>
                        <CheckIcon className="absolute right-0 top-0 m-4  h-6 w-6 ui-checked:block ui-not-checked:hidden" />
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
            <Link
                className="rounded-md self-center bg-tertiary-500 mt-10 p-4 font-medium text-white duration-300 hover:bg-tertiary-400"
                to={`/billing-detail/${activeAddress}`}
            >
                Continuar
            </Link>
        </div>
    )
}

export default Address
