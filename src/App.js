import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ProductPage from './productPage';
import Product from './product';
import catalog from './catalog.json';
import Home from './home';

import './styles/main.css';

function cartItems() {
  return []
}

function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          90s shop
          <nav>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
              <li><a href="/">Home</a></li>
              |
              <li><a href="/cart">Cart ({cartItems().length})</a></li>
            </ul>
          </nav>
          <hr/>
        </header>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductPage/>}/>
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
