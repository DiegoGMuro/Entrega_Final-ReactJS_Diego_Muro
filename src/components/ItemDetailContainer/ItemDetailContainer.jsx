import React, { useContext, useState, useEffect } from "react";
import './ItemDetailContainer.css'
import { getCiudadById } from "../../data/Ciudades";
import Ciudades from "../../data/Ciudades";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";   //
/* import Loader from "../Loader/Loader";      */

/* 
import {getDoc, doc} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */



export default function ItemDetailContainer() {
    const [Ciudades, setCiudades] = useState({});

    /*  const [loading, setLoading] = useState(true) */

    //  Usamos/consumimos el Context
    const { cart, addItem, removeItem } = useContext(cartContext);
    console.log("context:", cart);


    function onAddToCart(quantity) {
        /* agrego al array del context este producto */
        addItem(Ciudades, quantity);
        alert(`Agregaste ${quantity} pasajes a ${Ciudades && Ciudades.nombre} al carrito `);
    }


    const { itemId } = useParams()

    // A - Ver abajo

    useEffect(() => {
        getCiudadById(parseInt(itemId))      /*o poner NUMBER     */
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])



    return (
        /* Separar en componente de presentación: <ItemDetail .../> */

        <div className="ItemDetailContainer">

            {Ciudades ? (
                <>
                    <div className="ItemDetailContainer">
                        <h2 className="NameCity">Ciudad Seleccionada : {Ciudades.nombre}</h2>
                        <h4 className="NameCountry">
                            Pais: {Ciudades.pais}
                            <br />
                            Idioma: {Ciudades.idioma}
                        </h4>
                    </div>
                    <div className="CityImgWrapper">
                        <img src={Ciudades.imagen} alt={Ciudades.nombre} className="CityImg" />
                    </div>
                    <div>
                        <p className="Currency">
                            <strong style={{ fontWeight: "bold" }}>Moneda:</strong> {Ciudades.moneda}
                        </p>
                        <p className="CostPass">
                            Precio Pasaje AR$: {parseFloat(Ciudades.precioPasaje).toLocaleString('es-AR', { minimumFractionDigits: 0 })}
                        </p>
                        <div>
                            <p className="InterestPlaces">
                                <strong style={{ fontWeight: "bold" }}>Lugares de interés:</strong> {Ciudades.lugaresInteres}
                            </p>
                        </div>

                        {/* condicionales / rendering condicional */}
                        <ItemCount onAddToCart={onAddToCart} stock={5} />
                        <br />
                        {/* BOTON TEMPORAL */}
                        <button className="Button" onClick={() => removeItem(Ciudades.id)}>Eliminar</button>

                    </div>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>


        /*         <div className="ItemDetailContainer">
                    <ItemDetail {...Ciudades} />
                </div> */


    );
}







// MODIFICAR CON FIREBASE  - ver VIDEO CLASE 12
// A - Ver abajo

/*
useEffect (() => {
    setLoading(true)

    const docRef = doc(db, 'Ciudades', itemId)

    getDoc(docRef)
    .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        setCiudades(productAdapted)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=> {
        setLoading(false)
    })
}, [itemId])

*/