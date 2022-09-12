import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './containers/item_detail_container/itemDetailContainer';
import ItemListContainer from './containers/item_list_container/itemListContainer';
import NavBar from './components/nav_bar/navBar';

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
