import React from "react";
import { Link } from 'react-router-dom';

const Product = ({id, name, price, picture}) => {

    return (
        <div className="product">
            <img src={picture} width={640}/>

            <div className="product-info">
                <div>
                    <h3>{name}</h3>
                    <p>Price: {price} USD</p>
                </div>

                <a href={"/products/" + id}>Go to product</a>
                {/* <Link to={'products/' + id}/> */}
            </div>

        </div> 
    )
};

export default Product;