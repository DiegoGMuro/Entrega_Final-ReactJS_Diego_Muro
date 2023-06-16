import React, { useState, useEffect } from "react";
import { getCiudadById } from "../../data/Ciudades";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

/* 
import {getDoc, doc} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */



export default function ItemDetailContainer() {
    const [Ciudades, setCiudades] = useState(null)

    const [loading, setLoading] = useState(true)

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
        <div className="ItemDetailContainer">
            <ItemDetail {...Ciudades} />
        </div>
    )
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