import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Cart from './componentes/Cart/index';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CartProvider from "./context/CartContext";
import PaymentForm from './componentes/Tarjeta/PaymentForm';
import GraciasCompra from './componentes/Tarjeta/GraciasCompra';



function App() {
  return (
    <>
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar/>
          <Routes>
          <Route path='/ecommerce' element={ <ItemListContainer/> }/>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> }/>
            <Route path='/cart' element={  <Cart/> }/>
            <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/> }/>
            <Route path='/PaymentForm' element={<PaymentForm/>}/>
            <Route path='/GraciasCompra/:order' element={<GraciasCompra/>}/>
          </Routes>
        </CartProvider>
    </BrowserRouter>  
    </>
  );
}

export default App;
