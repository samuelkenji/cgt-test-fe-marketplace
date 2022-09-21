import ProductPage from './productPage';
import Product from './product';
import catalog from './catalog.json';

import './styles/main.css';

function cartItems() {
  return []
}

function App() {
  return (
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

      {
        window.location.pathname === '/' && (
          <div className='home'>

            {/* <p>
              You are probably interested in <a href="/products/a">A</a>.
            </p>

            <p>
              Check out the newest product <a href="/products/b">B</a>!
            </p> */}

            {catalog.products.map((product) => <Product id={product.id} name={product.name} price={product.price} picture={product.picture}/>)}
          </div>
        )
      }
      {
        window.location.pathname === '/products/b' && (
          <ProductPage name="B" price="30" picture="../img/b.jpg"/>
        )
      }
      {
        window.location.pathname === '/products/a' && (
          <ProductPage name="A" price="10" picture="../img/a.jpg"/>
        )
      }
      {
        window.location.pathname === '/cart' && (
          <div>
            Are you ready to purchase these?

            <ul>
              {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)}
            </ul>
          </div>
        )
      }
    </main>
  );
}

export default App;
