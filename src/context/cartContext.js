
import React, {useState} from 'react';

const CartContext = React.createContext()

const CartPorvider = ({children}) => {

    const [cartItem, setCartItem]  = useState([]);
    

    const productoAdd = (itemToAdd, quantity) => {
        setCartItem(() => {
            return [...cartItem, itemToAdd, {quantity}]
        })
    }

    const deleteProducto = (itemDeleted) => {
        const itemsCart = cartItem.filter((item)=> item.id !== itemDeleted.id)
        setCartItem(itemsCart)
    }



    return (
        <CartContext.Provider value ={{cartItem,productoAdd,deleteProducto}}> {children} </CartContext.Provider>
    )
}














export  {CartPorvider, CartContext};