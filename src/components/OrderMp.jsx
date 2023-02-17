import React from "react"
import { Link } from "react-router-dom"
import Footer from "../layouts/Footer"
import Nav from "../layouts/Nav"

const OrderMp = () => {

    return(
        <>
        <Nav />
        <div className="w-full h-screen flex justify-center items-center flex-col gap-10">
            <div className=" w-2/4 bg-lime-600 text-white flex flex-col items-center gap-10 p-5 rounded-lg">
                <p className="text-center text-2xl">Su compra se realizo correctamente!</p>
                <img className="w-16" src="../check.png" alt="" />
            </div>
            <div className="flex gap-2 text-xl">
                <div className=" text-gray-600">
                    Volver al 
                </div>
                <Link className="font-bold text-primary-500" to={'/'}>Inicio</Link>
            </div>
        </div>
        <Footer /> 
        </>
    )
}

export default OrderMp