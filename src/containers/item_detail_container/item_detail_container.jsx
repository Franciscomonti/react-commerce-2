import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/item_detail/item_detail';


const ItemDetailContainer = () => {
    const [Item, setItem ] = useState([])
    const [loadSpin, setLoadSpin] = useState(false)
    const {idProducto} = useParams()

    

    const getItem = new Promise((response) => {
        setTimeout(async()=> {
            const itemResponse = await fetch('./JSON/productos.json');
            let itemData = itemResponse.json();
            setLoadSpin(true);
            response(itemData);
        },2000);
    });

    useEffect(() => {
        const item = async() => {
            try {
                let itemData = await getItem;
                itemData = itemData.filter(listaProductos => listaProductos.id === idProducto)
                setItem(itemData)
            }
            catch(e){
                console.log(e)
            }
    
    };

    item()
        // eslint-disable-next-line react-hooks/exhaustive-deps
},[idProducto]);

return <>{loadSpin ? <ItemDetail productos={Item} key={Item.id}/> : <div style={load_blq}> <img src={ 'img/gifs/spinner.gif'} style={spinner_style} alt="Loading"/> <p>Estamos Cargando tu Proxima Compra...</p></div>} </>

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

export default ItemDetailContainer