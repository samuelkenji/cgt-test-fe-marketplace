import React from "react";

const Product = ({id, name, price, picture}) => {
    return (
        <div className="product">
            <img src={picture} width={640} alt="Product"/>

            <div className="product-info">
                <div>
                    <h3>{name}</h3>
                    <p>Price: {price} USD</p>
                </div>

                <a href={"/products/" + id}>Go to product</a>
            </div>

        </div> 
    )
};

export default Product;