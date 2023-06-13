import React from "react";
import "./CartWidget.css";
import cart from './assets/Carrito.svg'


import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



export default function CartWidget() {

/* const {totalQuantity} = useContext (CartContext) */

    return (
        <div className="cart-widget">
            <img src={cart} alt="carrito" />
            <li>0</li>
        </div>
    )

/*
return (
    <Link to='/cart' className=" CartWidget" style={{display: totalQuantity > 0 ? "block" : " none"}}>
    <img className = "cart-widget" src={cart} alt="carrito"/>
    {totalQuantity}
    </Link>
)
*/

} 
