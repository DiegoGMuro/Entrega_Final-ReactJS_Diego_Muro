import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';



/* const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className=" Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className=" Option">Checkout</Link>
        </div>
    )
}
export default Cart       */           //


const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(cartContext);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            const itemPrice = parseFloat(item.precioPasaje);
            const itemQuantity = parseFloat(item.quantity);
            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                total += itemPrice * itemQuantity;
            }
        });
        return total;
    };

    const total = calculateTotal();

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>El carrito está vacío</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {/* {cart.map(p => <CartItem key={p.id} {...p} />)}  */}

            {cart.map(item => (

/*
 <ul key={item.id}>
<li>
    Destino: {item.nombre}
    <br />
    Cantidad: {item.quantity}
    <br />
    Precio: {item.precioPasaje}
    <br />
    Pais: {item.pais}
    <br />
    Moneda: {item.moneda}
    <br />Total: ${item.quantity * item.precioPasaje}
</li>
</ul>*/ 


                <CartItem
                    key={item.id}
                    nombre={item.nombre}
                    pais={item.pais}
                    moneda={item.moneda}
                    precioPasaje={item.precioPasaje}
                    quantity={item.quantity}
                />
            ))}

            <h3 style={{ color: 'darkred' }}>Total General: {total.toLocaleString('es-AR', {style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</h3>

            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    );
}

export default Cart;