import React from "react";
import "./CartWidget.css";
import cart from './assets/Carrito.svg'


export default function CartWidget() {
    return (
        <div className="cart-widget">
            <img src={cart} alt="carrito" />
            <li>0</li>
        </div>
    )
} 