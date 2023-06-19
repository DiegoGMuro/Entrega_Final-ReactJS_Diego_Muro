import React from "react";
import "./ItemCount.css";
import { useState } from "react";
import LayOut from "../LayOut/LayOut";
import { Link } from "react-router-dom";


export default function ItemCount({ stock, initial, /* onAdd, */ onAddToCart /* props */ }) {

    const [quantity, setQuantity] = useState(/* initial */ 0);

    const [addToCartClicked, setAddToCartClicked] = useState(false);  // 


    const increment = () => {
        if (quantity < /*props.stock*/stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        if (quantity > 0) {
            setAddToCartClicked(true);   //
            onAddToCart(quantity);
        }
    };

    return (
        <div className="Counter">

            {!addToCartClicked && (


                <div className="Controls">
                    <button className="Button" onClick={decrement} disabled={quantity <= 1}>-</button>
                    <h4 className="Number">{quantity}</h4>
                    <button className="Button" onClick={increment}>+</button>
                </div>

            )}

            <div>
                {/*                 <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar viaje</button> */}


                {/*                 <button className="Button" onClick={() => onAddToCart(quantity)} disabled={!stock}>
                Agregar viaje</button> */}




                {/*  <button className="Button" onClick={handleAddToCart} disabled={!stock}>
                    Agregar viaje
                </button>
                {quantity > 0 && (
                    <Link to="/cart" className="Option">
                        Ir al carrito
                    </Link>
                )} */}





                {!addToCartClicked && (
                    <button className="Button" onClick={handleAddToCart} disabled={!stock}>
                        Agregar viaje
                    </button>
                )}

                {addToCartClicked && (
                    <>
                        <Link to="/cart" className="Option">
                            Ir al carrito
                        </Link>
                        <br /> 
                        <br />
                        <Link to='/' className="Option">Seguir comprando</Link>
                    </>
                )}
            </div>
        </div>
    )
}