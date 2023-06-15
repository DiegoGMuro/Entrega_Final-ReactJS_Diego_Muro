import { createContext, useState } from "react";


export const CartContext = createContext({                     // creamos contexto q contendrá el estado del carrito de compras.
    cart: []                                                   // Exportamos el CartContext para que pueda ser utilizado por otros componentes.    
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {                              // Agrega cantidad de items al carrito
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity }])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {                                 // Remueve un item del Cart usando su ID
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {                                         // Remueve todos los Items
        setCart([])
    }

    const isInCart = (itemId) => {                                    // True /  False
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}