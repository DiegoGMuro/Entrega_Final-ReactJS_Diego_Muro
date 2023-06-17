
import React from 'react';
import './CartItem.css';
import Ciudades from '../../data/Ciudades';



const CartItem = ({ id, nombre, pais, moneda, precioPasaje, quantity }) => {

  /*   console.log(pais) */

  const precio = parseFloat(precioPasaje);
  const cantidad = parseInt(quantity);
  const subtotal = isNaN(precio) || isNaN(cantidad) ? 0 : precio * cantidad;

  const formattedPrecioPasaje = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(precio);


  return (
    <div className="CartItem">
      <h4 style={{ color: 'darkblue', fontSize: '1.2em' }}>Destino: {nombre}</h4>
      {/*             <p>Pais: {pais}</p> */}
    <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Precio:</span> {formattedPrecioPasaje}</p>
    <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Cantidad:</span> {quantity}</p>
    <p><span style={{ color: 'darkgreen', fontWeight: 'bold' }}>Subtotal:</span> {subtotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</p>

    </div>
  );
}

/* console.log(CartItem) */

export default CartItem;
