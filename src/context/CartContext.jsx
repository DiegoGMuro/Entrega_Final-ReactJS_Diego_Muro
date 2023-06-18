import { createContext, useState, useEffect } from "react";
import './CartContext.css';


// creamos contexto q contendrá el estado del carrito de compras. Exportamos el CartContext para que pueda ser utilizado por otros componentes

export const cartContext = createContext({ cart: [] });


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {                              // Agrega cantidad de items al carrito, puedo usar PUSH tambien
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

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



    /*     const removeItem = (itemId) => {                                 
            const cartUpdated = cart.filter(prod => prod.id !== itemId)
            setCart(cartUpdated)
        } */

    function removeItem(idDelete) {                                       // Remueve un item del Cart usando su ID
        setCart(cart.filter((item) => item.id !== idDelete));
    }

    const clearCart = () => {                                         // Remueve todos los Items
        setCart([])

    }

    const isInCart = (itemId) => {                                    // True /  False
        return cart.some(prod => prod.id === itemId)
    }


    return (
        <cartContext.Provider value={{ cart, setCart, addItem, countItems, removeItem, clearCart, isInCart  /* , precioTotal */ }}>
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