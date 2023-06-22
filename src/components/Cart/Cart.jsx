import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
/* import Swal from 'sweetalert'; */
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { createOrderWithStockUpdate } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';


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
    const { cart, clearCart, handleCheckout, quantity, removeItem } = useContext(cartContext);

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

    /*     if (quantity === 0) {
            return (
                <div>
                    <h1>El carrito está vacío</h1>
                    <Link to='/' className="Option">Productos</Link>
                </div>
            );
        } */

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <>
            <h2 style={{ color: 'darkgreen', fontSize: '1.5em' }}>Resumen - Carrito:</h2>
            <div>
                {/* {cart.map(p => <CartItem key={p.id} {...p} />)} */}

                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id} className="CartItemContainer">
                            <CartItem
                                key={item.id}
                                nombre={item.nombre}
                                imagen={item.imagen}
                                pais={item.pais}
                                moneda={item.moneda}
                                idioma={item.idioma}
                                precioPasaje={item.precioPasaje}
                                quantity={item.quantity}
                            />
                            <button onClick={() => handleRemoveItem(item.id)} className="EliminarButton">Eliminar</button>
                        </div>
                    ))
                ) : (
                    <div>
                        <h1>El carrito está vacío</h1>
                        <Link to='/' className="Option">Seguir comprando</Link>
                    </div>
                )}

                {cart.length > 0 && (
                    <>
                        <h3 style={{ color: 'darkred' }}>Total General: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</h3>
                        <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
                        <br />
                        <br />
                        <Link to='/' className="Option">Seguir comprando</Link>
                        <br />
                        <br />
                        {/*   <Link to="/checkoutform" className="Button">Checkout</Link>  */}

                        <Link to="/checkoutform" className="Button" onClick={handleCheckout}>Completar Formulario</Link>

                    </>
                )}
            </div>
        </>
    );
}
export default Cart;