import React from 'react';
import {useParams} from 'react-router-dom';
import catalog from './catalog.json';

const ProductPage = ({cartItems, updateCart}) => {

    let params = useParams();
    let id = params.id
    let product = catalog.products.find((product) => product.id === id)

    function addToCart(product){
        cartItems.push(product)
        updateCart(cartItems)
        console.log(cartItems)
    }

    return (
        <div>
            <img src={product.picture} width={640}/>

            <h1>Product {product.name}</h1>
            <p>Price: {product.price} USD</p>

            <button onClick={() => updateCart(product)}>
                Add to cart
            </button>

        </div> 
    )
};

export default ProductPage;