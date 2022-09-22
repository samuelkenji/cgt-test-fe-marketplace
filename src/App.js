import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductPage from './productPage';
import Home from './home';
import Cart from './cart';

import './styles/main.css';
import { useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(null)
  
  function addToCart(newItem, hasStorage){
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

  function removeFromCart(index){
      let storage = JSON.parse(localStorage.getItem('cart'))
      storage.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(storage))
      setCartItems(storage) 
  }

  useEffect(() => {
    if(cartItems){
      localStorage.setItem('cart', JSON.stringify([...cartItems]))
    }else{
      if(localStorage.getItem('cart') !== null){
        let storage = JSON.parse(localStorage.getItem('cart'))
        addToCart(storage, true)
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
          <Route path='/products/:id' element={<ProductPage addToCart={addToCart} />}/>
          <Route path='/cart' element={<Cart removeFromCart={removeFromCart}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
