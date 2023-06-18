import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import LayOut from "../LayOut/LayOut"; 



export default function ItemCount({ stock, initial, /* onAdd, */ onAddToCart /* props */}) {

    const [quantity, setQuantity] = useState(/* initial */ 0);

    const increment = () => {
        if (quantity < /*props.stock*/stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement} disabled={quantity <= 1}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>

            <div>
{/*                 <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar viaje</button> */}

                <button className="Button" onClick={() => onAddToCart(quantity)} disabled={!stock}>
                Agregar viaje</button>


            </div>

        </div>
    )


}