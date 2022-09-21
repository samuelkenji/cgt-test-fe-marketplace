import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductPage from './productPage';
import Home from './home';
import Cart from './cart';

import './styles/main.css';
import { useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(null)
  
  const updateCart = (newItem, hasStorage) => {
    
    if(cartItems){
      let newCart = [...cartItems] //Using spread so state actually changes
      newCart.push(newItem)
      setCartItems(newCart)
    }else{
      if(!hasStorage){
        let newCart = []
        newCart.push(newItem)
        setCartItems(newCart)
      }else{
        setCartItems(newItem)
      }
    }
  };

  useEffect(() => {
    if(cartItems){
      localStorage.setItem('cart', JSON.stringify([...cartItems]))
    }else{
      if(localStorage.getItem('cart') !== null){
        let storage = JSON.parse(localStorage.getItem('cart'))
        updateCart(storage, true)
      }
    }
  }, [cartItems])

  return (
    <BrowserRouter>
      <main>
        <header>
          90s shop
          <nav>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
              <li><a href="/">Home</a></li>
              |
              <li><a href="/cart">Cart ({cartItems ? cartItems.length : 0})</a></li>
            </ul>
          </nav>
          <hr/>
        </header>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductPage cartItems={cartItems} updateCart={updateCart} />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
