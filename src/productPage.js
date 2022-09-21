import React from "react";
import {useParams} from "react-router-dom";
import catalog from './catalog.json';

const ProductPage = () => {

    let params = useParams();
    let product = catalog.products.find((product) => product.id === params.id)

    return (
        <div>
            <img src={product.picture} width={640}/>

            <h1>Product {product.name}</h1>
            <p>Price: {product.price} USD</p>

            <button onClick={() => console.warn('Not implemented!')}>
                Add to cart
            </button>

        </div> 
    )
};

export default ProductPage;