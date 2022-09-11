import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './containers/item_detail_container/item_detail_container';
import ItemListContainer from './containers/item_list_container/item_list_container';
import NavBar from './containers/nav_bar/nav_bar';

function App() {
  return (


    <BrowserRouter>
     <NavBar/>
    <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
              <Route path="/detalle/:idProducto" element={<ItemDetailContainer />}/> 
      </Routes>
     </BrowserRouter>
  );
}

export default App;
