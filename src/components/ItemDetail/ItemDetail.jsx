import React from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'


import { useState } from "react";
import { Link } from "react-router-dom";


/*
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
 */


export default function ItemDetail({ id, nombre, pais, moneda, idioma, precioPasaje, imagen, lugaresInteres, stock }) {

    const [quantityAdded, setQuantityAdded] = useState(0)

    /*const { addItem } = useContext(CartContext)*/


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        /*
        const item = {
            id, nombre, precioPasaje
        }
        addItem(item, quantity)*/

    }


    return (
        <div className="CardCity">
            <div className="City">
                <h2 className="NameCity">
                    Ciudad seleccionada: {nombre}
                </h2>
                <h4 className="NameCountry">
                    Pais: {pais}
                    <br />
                    <br />
                    Idioma: {idioma}
                </h4>
                <div className="city_img">
                    <img src={imagen} alt={nombre} className="CityImg" />
                </div>
                <section>
                    <p className="Currency">
                        <strong style={{ fontWeight: "bold" }}>Moneda:</strong> {moneda}
                    </p>
                    <p className="CostPass">
                        Precio Pasaje: {precioPasaje}
                    </p>
                </section>
                <section>
                    <p className="InterestPlaces">
                        <strong style={{ fontWeight: "bold" }}>Lugares de interés:</strong> {lugaresInteres}
                    </p>
                </section>
                <section className="ItemQty">


                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" className="Option"> Terminar Compra </Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }


                    {/*                     <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} /> */}

                </section>
            </div>
        </div>
    )

}