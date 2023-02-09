import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-tertiary-500 mt-10 p-2 flex flex-col items-center justify-center">
            <div className="p-4">
                <img
                    className="w-[300px] select-none"
                    src="/ATARAXIAwhite.png"
                    alt=""
                />
            </div>
            <div className="flex w-full justify-between p-4">
                <div>
                    <Link to={'https://www.instagram.com/ataraxiacerveceria/'}>
                        <BsInstagram size={38} color={'white'} />
                    </Link>
                </div>
                <div>
                    <p className="font-light text-white text-center text-sm">
                        Ataraxia Team - Mindhub Cohort 39/40 © 2023
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
