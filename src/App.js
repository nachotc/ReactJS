import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar logo='CafeR'/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
