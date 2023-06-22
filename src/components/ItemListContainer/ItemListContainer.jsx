import React, { useState, useEffect } from "react";
/* import { getCiudades } from "../../data/Ciudades"; */
/* import { getCiudadesByContinent } from "../../data/Ciudades"; */
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

import { getCiudades } from "../../services/firebaseConfig";
import { getCiudadesByContinent } from "../../services/firebaseConfig";

/* import { pedirDatos } from "../../Helpers/PedirDatos"; */

/* import{getDocs, collection, query, where} from 'firebase/firestore' */
/* import {db} from '../../services/firebaseConfig' */



export default function ItemListContainer() {
    const [Ciudades, setCiudades] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { continenteId } = useParams()

    useEffect(() => {                  //Para que la accion se ejecute cuando lo queremos usamos UseEffect, entonces el "useEffect" hace que el componente se ejecute cuando se monta y cuando el "continenteId" cambie

        setIsLoading(true)

        //  A - Ver abajo

        /* const fetchData = continenteId ? getCiudadesByContinent : getCiudades */

        const fetchData = continenteId === undefined ? getCiudades : getCiudadesByContinent

        fetchData(continenteId)
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {                      //
                setIsLoading(false);
            });
    }, [continenteId])



    return (
        <div>
            <div>
                <ItemList loading={isLoading} Ciudades={Ciudades} />
            </div>
        </div>
    )
}





    // MODIFICAR CON FIREBASE  - ver VIDEO CLASE 12
    // A - Ver abajo

    /*
    const collectionRef = continenteId
    ? query(collection(db, 'Ciudades'), where ('continente', '==', continenteId))
    : collection(db, 'Ciudades")
    
    getDocs(collectionRef)
    . then(response => {
        const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setCiudades(productsAdapted)
    })
    .catch(error=> {
        console.log(error)
    })
    .finally(() =>{
        setLoading(false)
    })
    
    
    
    */


