import React from "react";
import Product from "./product";
import catalog from './catalog.json';

const Home = () => {
    return (
        <div className='home'>
            {catalog.products.map((product) => <Product id={product.id} name={product.name} price={product.price} picture={product.picture}/>)}
        </div>
    )    
};

export default Home;