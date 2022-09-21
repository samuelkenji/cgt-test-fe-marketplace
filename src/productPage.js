import React from "react";

const ProductPage = ({name, price, picture}) => {

    return (
        <div>
            <h1>Product {name}</h1>
            <p>Price: {price} USD</p>

            <button onClick={() => console.warn('Not implemented!')}>
            Add to cart
            </button>

            <div><img src={picture} width={640}/></div>
        </div> 
    )
};

export default ProductPage;