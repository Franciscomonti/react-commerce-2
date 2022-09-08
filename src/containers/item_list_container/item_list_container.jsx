import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/item_list/item_list'

const ItemListContainer = () => {
    
    const [listaProductos, setListaProductos] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idProducto} = useParams()

    const promesa = new Promise((response)=>{
        setTimeout(async() => {
            const dataResponse = await fetch('./JSON/productos.json');
            let data = await dataResponse.json();
            setLoadSpin(true);
            response(data);
        },2000);
    });

    useEffect(() => {

        const productos = async () => {
            try {
                let data = await promesa;
                if(idProducto == null) { setListaProductos(data); }
                else{
                data = data.filter(listaProductos => listaProductos.id === idProducto)
                setListaProductos(data);
                }
            }
            catch(e){
                console.log(e);
            } 
    };
        
        productos()    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idProducto]);

    return <>{loadSpin ? <ItemList productos={listaProductos}/> : <div style={load_blq}><img src={ 'img/gifs/spinner.gif'} style={spinner_style} alt="Loading"></img>
    <p>Estamos Cargando tu Proxima Compra...</p></div>} </>


}

const load_blq = {
    display: 'flex',
    flexDirection: "column",
    margin: "300px auto",
    width: "400px",
    alignItems: "center",
}
const spinner_style = {
    width: "200px",
    objectFit: "cover",
}


export default ItemListContainer