import React from "react";

const Product = ({id, name, price, picture}) => {
    return (
        <div id={"product_"+id} className="product">
            <img src={picture} width={640} alt="Product"/>

            <div className="product-info">
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>

                <button><a href={"/products/" + id}>Go to product</a></button>
            </div>

        </div> 
    )
};

export default Product;