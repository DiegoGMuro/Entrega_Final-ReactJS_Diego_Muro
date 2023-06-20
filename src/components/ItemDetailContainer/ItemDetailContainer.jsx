import React, { useContext, useState, useEffect } from "react";
import './ItemDetailContainer.css'
/* import { getCiudadById } from "../../data/Ciudades"; */
import Ciudades from "../../data/Ciudades";
/* import ItemDetail from "../ItemDetail/ItemDetail"; */ // PROXIMO A BORRAR
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";   //
import Loader from "../Loader/Loader";
/* import { NewtonsCradle } from '@uiball/loaders'; */
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { getCiudadById } from "../../services/firebaseConfig"; 




/* 
import {getDoc, doc} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */



export default function ItemDetailContainer() {

    const [errors, setErrors] = useState(null);   //
    /* const [Ciudades, setCiudades] = useState({}); */
    const [Ciudades, setCiudades] = useState(null);  // {} truthy => evalua a true
    const [loading, setLoading] = useState(true)

    //  Usamos/consumimos el Context
    const { cart, addItem, removeItem } = useContext(cartContext);
    /* console.log("context:", cart); */

    /* agrego al array del context este producto */
    /*     function onAddToCart(quantity) {
            addItem(Ciudades, quantity);
            alert(`Agregaste ${quantity} pasajes a ${Ciudades && Ciudades.nombre} al carrito `);
        } */


    function onAddToCart(quantity) {
        /* agrego al array del context este producto */
        addItem(Ciudades, quantity);

        Swal.fire({
            title: 'Operación realizada',
            html: `Agregaste <strong>${quantity}</strong> pasajes a <strong>${Ciudades && Ciudades.nombre}</strong> al carrito`,
            icon: 'success',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                confirmButton: 'swal-confirm-button',
                icon: 'swal-icon',
            },
        });
    }

    const { itemId } = useParams()

    // A - Ver abajo

    useEffect(() => {

        setLoading(true);

        getCiudadById(parseInt(itemId))      /*o poner NUMBER     */
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                /* console.error(error) */

                setErrors(error.message);

            })

            .finally(() => {
                setLoading(false); 
            });
    }, [itemId])


    if (errors)
        return (
            <div style={{color: "red" }}>
                <h1>Error!!! 😒</h1>
                <p style={{color: "green", fontSize: "16px", fontWeight: "bold" }}>{errors}</p>
            </div>
        );



    return (
        /* Separar en componente de presentación: <ItemDetail .../> */

        <div className="ItemDetailContainer">


            {loading ? (
                <Loader /> // Mostrar el indicador de carga mientras se está cargando la información
            ) : (

                /* { Ciudades ? (*/
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
                /* ) : (
                    <p>Cargando...</p> */
            )/*)*/}
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