import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Item = ({ prod : { nombre, precio, portada, down, right, back, marca, descripcion, id, key } }) => {
    
    const [imagenActiva, setImagenActiva] = useState(portada)

return(
    <div style={ productos_cards }>
        <div style= { productos_cards_img_blq }>
            <div style= { productos_cards_blq_img_peq }>
                <img onClick={() => setImagenActiva(portada)} src={ portada } alt={key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(down)} src={ down } alt={key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(right)} src={ right } alt={key} style= { productos_cards_img_peq }/>
                <img onClick={() => setImagenActiva(back)} src={ back} alt={key} style= { productos_cards_img_peq }/>
            </div>
        
            <div style= { productos_cards_blq_img_grande }>
                <img src={ imagenActiva } alt={key} style= { productos_cards_img_grande }/>
            </div>    
        </div>

        <div style={productos_cards_caract_blq }>
            <h2 style={ productos_cards_caract_marca}>{ marca }</h2>
            <h2 style={productos_cards_title }> { nombre } </h2>
            <h3 style={ productos_cards_price }><span style= { productos_cards_price_span }> ${ precio }</span> </h3>
            <p style={ productos_cards_caract_descrip}>{descripcion}</p>
            
            <div style={ productos_cards_caract_btn_blq}>
                <button style={ productos_cards_caract_btn_add}>Añadir al carrito</button>
                <button style={ productos_cards_caract_btn_fav}><img src='/img/icon/fav_icon.svg' alt='favicon' style={productos_cards_caract_btn_fav_img}/></button>
                <Link style={ productos_cards_caract_btn_add} to={`/detalle/${nombre}`}>Detalles</Link>
            </div>
            
        </div>
    </div>
    
)}

const productos_cards = {
    width: '90%',
    height: '300px',
    padding: '5px',
    margin: '10px 20px',
    boxShadow: '10px 10px 0px #fafafa',
    display: 'flex',
    justifyContent: 'sapce-between',
    position: 'relative',
    backgroundColor: 'white',
} 

const productos_cards_img_blq  = {
    display:'flex',
    justifyContent: 'space-between',
}

let productos_cards_blq_img_grande  ={
    height: '100%',
    display: 'flex',
    backgroundColor: '#f6f6f6',
    margin: '0px 5px',
}

const productos_cards_img_grande = {
    width: '650px',
    height: '300px',
    margin: 'auto',
    objectFit: 'contain',
}

const productos_cards_blq_img_peq = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

const productos_cards_img_peq  = {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
    cursor: 'pointer',
    backgroundColor: '#f6f6f6',
}


const productos_cards_caract_blq  = {
    width: '400px',
    margin: '0 0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const productos_cards_caract_marca = {
    margin:'0',
    padding: '0',
}

const productos_cards_title = {
    fontSize: '16px',
    fontWeight: '500',
    margin:'0',
    padding: '0',
}

const productos_cards_caract_descrip = {
    margin:'10px 0px 20px',
    padding: '0',
    fontSize: '14px',
    textAlign: 'justify',
    overflow:   'hidden',
}

const productos_cards_price = {
    margin:'0',
    padding: '0',
}

const productos_cards_price_span = {
    margin:'0',
    padding: '0',
}

const productos_cards_caract_btn_blq = {
    height: '50px',
    display: 'flex',
}

const productos_cards_caract_btn_add = {
    margin: '5px',
    height: '40px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '0.5px solid transparent',
    backgroundColor: '#efefef',
    alignText: 'center',
    display: 'flex',   
    alignItems: 'center',
    justifyContent: 'center',     
    padding: '0px 5px', 
    textDecoration: 'none', 
    color: 'black',
    fontSize: '14px',
}

const productos_cards_caract_btn_fav = {
    margin: '5px',
    height: '40px',
    width: '40px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '0.5px solid transparent ',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const productos_cards_caract_btn_fav_img = {
    width: '30px',
    objectFit: 'cover',
}


export default Item