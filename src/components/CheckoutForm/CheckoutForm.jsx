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
import Cart from '../Cart/Cart';


const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (

        <div className="Container">
            <h1 className="main-title">Contacto</h1>
            <form className="Form" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <br />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <br />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <br />
                <button className="Button" type="submit">Enviar</button>

            </form>
        </div>

    )
}

export default Contacto
