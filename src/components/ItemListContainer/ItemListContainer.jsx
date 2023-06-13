import React, { useState, useEffect } from "react";
import { getCiudades } from "../../data/Ciudades";
import { getCiudadesByContinent } from "../../data/Ciudades";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

import { pedirDatos } from "../../Helpers/PedirDatos";



export default function ItemListContainer() {
    const [Ciudades, setCiudades] = useState([]);
    const { continenteId } = useParams()

    useEffect(() => {                  //Para que la accion se ejecute cuando lo queremos usamos UseEffect, entonces el "useEffect" hace que el componente se ejecute cuando se monta y cuando el "continenteId" cambie
        const asyncFunc = continenteId ? getCiudadesByContinent : getCiudades

        asyncFunc(continenteId)
            .then(response => {
                setCiudades(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [continenteId])


    return (
        <div>
            <div>
                <ItemList Ciudades={Ciudades} />
            </div>
        </div>
    )
}