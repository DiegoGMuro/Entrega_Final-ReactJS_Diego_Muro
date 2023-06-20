/* import React from 'react'
import Ciudades from "../data/Ciudades";



export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Ciudades);
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = Ciudades.find((el) => el.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró la ciudad"
            })
        }

    })
}  */