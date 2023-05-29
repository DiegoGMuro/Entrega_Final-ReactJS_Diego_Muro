import React, { useState, useEffect } from "react";
import { getCiudadById } from "../../data/Ciudades";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    const [Ciudades, setCiudades] = useState(null)
    const { itemId } = useParams()


    useEffect(() => {
        getCiudadById(parseInt(itemId))
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


