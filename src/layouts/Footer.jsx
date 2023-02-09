import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-tertiary-500 mt-10 p-2 flex flex-col items-center justify-center">
            <div className="p-4">
                <img
                    className="w-[300px] select-none"
                    src="https://firebasestorage.googleapis.com/v0/b/ataraxiapp-50a47.appspot.com/o/ATARAXIA.png?alt=media&token=646c1091-70d7-491f-83cf-dd40f834ba77"
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
