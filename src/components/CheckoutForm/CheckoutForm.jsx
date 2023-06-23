/* import React from 'react'
import './CheckoutForm.css'
import { useState } from 'react'


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()          // Evitamos que se recargue la pagina

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        <div className='Container'>
            <h1 className='main-title'>Contacto</h1>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <br />
                    <input
                        className='Input'
                        type='text'
                        placeholder='Ingresa tu nombre'
                        value={name}
                        onChange={({ target }) => setName(target.value)} />
                </label>
                <label className='Label'>
                    Telefono
                    <br />
                    <input
                        className='Input'
                        type='text'
                        placeholder='Ingresa tu telefono'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className='Label'>
                    Email
                    <br />
                    <input
                        className='Input'
                        type='email'
                        placeholder='Ingresa tu email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </label>
                <br />
                <br />
                <div className='Label'>
                    <button type='submit' className='Button'>Crear Orden</button>
                </div>

            </form>
        </div>
    )
}

export default CheckoutForm */


/*------------------------------------------------------------------------------------------------*/

import React from 'react'
import './CheckoutForm.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cart from '../Cart/Cart';
/* import {handleConfirm} from '../Cart/Cart' */

/* const CheckoutForm = () => {
    const { register, handleSubmit } = useForm();
    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="Container">
            <h1 className="main-title">Ingresar datos para finalizar la compra ✈️</h1>
            <form className="Form" onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <br />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <br />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <br />
                <button */

/* onClick={handleConfirm} */

/*                 className="Button" type="submit">Crear Orden de compra2</button>
            </form>
        </div>
    )
}
export default CheckoutForm */

/*---------------------------------------------------------------------*/

export default function CheckoutForm({ onConfirm }) {
    const [userData, setUserData] = useState({
        nombre: "",
        phone: "",
        email: "",
    });

    function onInputChange(evt) {
        const prop = evt.target.name;
        const value = evt.target.value;

        const newData = { ...userData };
        newData[prop] = value;
        setUserData(newData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        console.log(userData);
        onConfirm(userData);
    }

    function handleReset(evt) {
        evt.preventDefault();
        setUserData({
            nombre: "",
            phone: "",
            email: "",
        });
    }

    const styleInput = { display: "flex", marginBottom: 24 };
    const label = { width: "100px", marginRight: 4 };

    return (
        <form className="Container" onSubmit={onSubmit}>
            <h2>Ingresar datos para finalizar la compra ✈️</h2>
            <div style={styleInput}>
                <label style={label}>Nombre</label>
                <input
                    value={userData.nombre}
                    name="nombre"
                    type="text"
                    onChange={onInputChange}/>
            </div>
            <div style={styleInput}>
                <label style={label}>Teléfono</label>
                <input
                    value={userData.phone}
                    name="phone"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div style={styleInput}>
                <label style={label}>Email</label>
                <input
                    value={userData.email}
                    name="email"
                    type="text"
                    onChange={onInputChange}
                />
            </div>
            <div>
            <button className="Button2">Crear Orden de compra</button>
            </div>
            <br />
            <div>
            <button className="Button2" onClick={handleReset}>Vaciar Formulario</button>
            </div>
        </form>
    );
}
