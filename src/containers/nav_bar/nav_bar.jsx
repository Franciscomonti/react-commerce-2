import React from 'react';
import CartWidget from '../../components/cart_widget/cart_widget';

const NavBar = () => {
    return (
        <div>
        <nav style={style_navBar}>
            <div style={style_navLogo}><img src={'/img/logo/logo.png'} alt="logo" style={style_navLogo_Img}/></div>
            <ul style={style_nav_blq_btn}>
                <li style={style_nav_blq_btn_li}>Inicio</li>
                <li style={style_nav_blq_btn_li}>Productos</li>
                <li style={style_nav_blq_btn_li}>Acerca de nosotros</li>
                <li style={style_nav_blq_btn_li}>Contactos</li>
            </ul>
            <div style={style_nav_cart}>
                <CartWidget/>
            </div>
        </nav>
            
        </div>

    )
}

export default NavBar;


const style_navBar = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "80px",
    justifyContent: "space-around",
}

const style_navLogo = {
        width: "80px",
        height: "80px",
}

const style_navLogo_Img = {
        height: "80px",
        width: "150px",
        objectFit: "contain",
}

const style_nav_blq_btn = {
    display: "flex",
    height: "80px",
    alignItems: "center",
}

const style_nav_blq_btn_li = {
    listStyle: "none",
    margin: "0px 20px",
    padding: "5px 10px",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px",
    color: "black",
    cursor: "pointer",                   
}

const style_nav_cart = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
}

