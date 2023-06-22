import { createContext, useState, useEffect } from "react";
import './CartContext.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


// creamos contexto q contendrá el estado del carrito de compras. Exportamos el CartContext para que pueda ser utilizado por otros componentes

export const cartContext = createContext({ cart: [] });


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)


// Agrega cantidad de items al carrito, puedo usar PUSH tambien

/*     const addItem = (item, quantity) => {                              
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error("El producto ya fue agregado")
        }
    } */





    function addItem(item, quantity) {
        const newCart = [...cart]; // shallow copy

        if (isInCart(item.id)) {
            setCart(
                cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + quantity };
                    } else {
                        return { ...cartItem };
                    }
                })
            );
        } else {
            newCart.push({ ...item, quantity });
            setCart(newCart);
        }
    }


    function getItem(id) {                                              //
        const itemBuscado = cart.find((item) => item.id === id);
        return itemBuscado;
        /* {} => truthy */
    }






    // Codigo del profe
    /*     function addItem(item, quantity) {
            const newCart = [...cart]; // shallow copy/deep clone
            newCart.push({ ...item, quantity });
            setCart(newCart);
          } */


    function countItems() {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    }

// DUPLICADA CON "calculateTotal"??

    function countTotalPrice() {                                            //
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }


    /*     const removeItem = (itemId) => {                                 
            const cartUpdated = cart.filter(prod => prod.id !== itemId)
            setCart(cartUpdated)
        } */

    function removeItem(idDelete) {                                       // Remueve un item del Cart usando su ID
        setCart(cart.filter((item) => item.id !== idDelete));
    }


    // FUNCION PARA LIMPIAR EL CARRITO DESPUES DE LA COMPRA
    const clearCart = () => {                                         // Remueve todos los Items
        setCart([])

    }

    const handleCheckout = () => {
        Swal.fire({
            icon: 'info',
            title: 'Finalizacion de la compra',
            text: 'Ud está siendo redirigido al cierre de la compra',
            showConfirmButton: false,
            timer: 3000, 
        });
    };





    const isInCart = (itemId) => {                                    // True /  False
        return cart.some(prod => prod.id === itemId)
    }


    return (
        <cartContext.Provider value={{ cart, setCart, addItem, countItems, getItem, removeItem, clearCart, handleCheckout, countTotalPrice, isInCart  /* , precioTotal */ }}>
            <div className="cart-container">
                {children}
            </div>
        </cartContext.Provider>
    );
}


/*
const precioTotal = () =>{
    return cart.reduce((acc, prod) => scc + prod.precio * prod.cantidad, 0)
}
*/


// CARPI CODER
/*
export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito
        } }>
            {children}
        </CartContext.Provider>
    )



}

*/