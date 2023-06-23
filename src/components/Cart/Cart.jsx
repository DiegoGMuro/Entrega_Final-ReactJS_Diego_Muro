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
    const { cart, clearCart, handleCheckout, quantity, countTotalPrice, removeItem } = useContext(cartContext);
    const navigateTo = useNavigate();        //


    // NUEVO 21/6  -  22/6
    async function handleConfirm(userData) {
        const order = {
            items: cart,
            buyer: userData,
            date: new Date(),
            /* price: countTotalPrice(), */
            price: calculateTotal(),
        };



        /*
            async function handleConfirm() {
        const order = {
            items: cart,
            buyer: {
                name: "Diego Muro",
                phone: 123123,
                email: "diegomuro@mail.com",
            },
            date: new Date(),
            price: calculateTotal(),
        };
        */




        try {
            const id = await createOrderWithStockUpdate(order);
            console.log("respuesta", id);
            /* clear(); */
            clearCart(); // limpio el carrito dps de hacer la compra(despues de la confirmacion)

            navigateTo(`/order-confirmation/${id}`);
            /* COMO MUESTRO EL RESULTADO AL USUARIO DEL PEDIDO
            1. alert: SweetAlert/toastify -> muestren el id
            2. ***redirección: React Router -> /confirmation****
            3. rendering condicional -> modificando un state
          */
        } catch (error) {
            /* alert(error); */
        }
    }
    // FIN NUEVO 21/6






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

                        <CheckoutForm onConfirm={handleConfirm} />
                        <br />
                        <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
                        <br />
                        <br />
                        <Link to='/' className="Option">Seguir comprando</Link>
                        <br />
                        <br />
                        {/*   <Link to="/checkoutform" className="Button">Checkout</Link>  */}

                        {/*                         <Link to="/checkoutform" className="Button" onClick={handleCheckout}>Completar Formulario</Link> */}

                        {/* Temporal */}

                        {/*                         <button className="Button" onClick={handleConfirm}>Crear orden de compra</button> */}

                    </>
                )}
            </div>
        </>
    );
}
export default Cart;