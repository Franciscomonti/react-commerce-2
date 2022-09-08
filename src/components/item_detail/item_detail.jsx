import React from 'react'

const ItemDetail = ({productos: {nombre, precio}}) => (


    <div style={blq_item_details}>
        
        <div style={blq_item_details_caract}>
            <div>
                <h2>{nombre}</h2>
                <h2>Price : ${precio}</h2>
            </div>
            <div>
                <button style={blq_item_details_btn}>add to cart</button>
                <button style={blq_item_details_btn}>Buy</button>
            </div>
        </div>
        
    </div>
    
)

const blq_item_details ={
    width : '80%',
    margin : '200px auto',
    display : 'flex',
    justifyContent : 'center',
}



const blq_item_details_caract = {
    padding : '20px',
    margin : '0px 20px',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'end',
}

const blq_item_details_btn = {
    margin : '0 10px',
}



export default ItemDetail