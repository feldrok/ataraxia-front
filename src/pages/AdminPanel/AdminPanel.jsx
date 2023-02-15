import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import orderActions from "../../store/orders/actions.js";
const {orderUpdate, getOrders} = orderActions

export default function Orders() {
    const dispatch = useDispatch();
    const userOrders = useSelector((state) => state.orders.orders);
    console.log(userOrders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <div>
            <div class="flex items-center flex-col ">
                <h1 class="text-4xl bg-blend-lighten">Orders</h1>
                <div>
                    {userOrders?.response?.map((order, index) => {
                            return (
                                <div key={index} class= "">
                                <p className="m-5">Id del carro: {order.cart_id}</p>
                                <p className="m-5">Fecha de creacion: {order.createdAt}</p>
                                <p className="m-5">Estado de orden: {order.statusOrder}</p>
                                <p className="m-5">Total a pago: {order.total_price}</p>
                                <label>
                                    <input type="radio" name="status" value={order.statusOrder} onChange={(e) => dispatch(orderUpdate(e.target.value, order._id))}/>
                                    <span className="ml-2 text-sm text-blue-500">Cancelado</span>
                                </label>
                                <label>
                                    <input type="radio" name="status" value={order.statusOrder} onChange={(e) => dispatch(orderUpdate(e.target.value, order._id))}/>
                                    <span className="ml-2 text-sm text-blue-500">Pagado</span>
                                </label>
                            </div>
                                
                            )
                    })}
                </div>
            </div>
        </div>

)}
