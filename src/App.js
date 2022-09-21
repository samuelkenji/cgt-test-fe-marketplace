import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ProductPage from './productPage';
import Product from './product';
import catalog from './catalog.json';
import Home from './home';
import Cart from './cart';

import './styles/main.css';
import { useEffect } from 'react';

/* function cartItems() {
  return []
} */

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
    console.log(cartItems)
  };

  useEffect(() => {
    if(cartItems){
      localStorage.setItem('cart', JSON.stringify([...cartItems]))
    }else{
      if(localStorage.getItem('cart') !== null){
        let storage = JSON.parse(localStorage.getItem('cart'))
        console.log(storage)
        updateCart(storage, true)
      }
    }
    console.log(cartItems)
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
          {<Route path='/cart' element={<Cart/>}/>}
        </Routes>
        {/* {
          window.location.pathname === '/cart' && (
            <div>
              Are you ready to purchase these?

              <ul>
                {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)}
              </ul>
            </div>
          )
        } */}
      </main>
    </BrowserRouter>
  );
}

export default App;
