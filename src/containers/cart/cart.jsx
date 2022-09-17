import { CartContext } from "../../context/cartContext"
import React from "react"


const Cart = () => {

    const {cartItem} = React.useContext(CartContext)
    const {deleteProducto} = React.useContext(CartContext)

    return(
        <div>{cartItem.map((item)=>
            <div>
                <h1>nombre{item.nombre}</h1>
                <h2>precio{item.precio}</h2>
                <h2>cantidad: {item.quantity}</h2>
                <p onClick={() => deleteProducto(item)}>eliminar</p>
            </div>
            )}
        </div>

    )
}


export default Cart