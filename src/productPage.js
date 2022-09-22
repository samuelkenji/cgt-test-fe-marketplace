import React from 'react';
import {useParams} from 'react-router-dom';
import catalog from './catalog.json';
import {FaShoppingCart} from 'react-icons/fa'

import './styles/productPage.css'

const ProductPage = ({addToCart}) => {

    let params = useParams();
    let id = params.id
    let product = catalog.products.find((product) => product.id === id)

    return (
        <div className='product-page'>
            <div className="info">
                <img src={product.picture} width={640} alt="Product"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod placerat ligula nec consequat. Cras euismod, turpis commodo molestie finibus, arcu orci tempus nisl, sit amet vulputate quam massa ut purus. Duis iaculis turpis nisl, et posuere massa malesuada sed. Vivamus rutrum euismod nulla at facilisis. Phasellus vel finibus ligula. Etiam nec consequat nibh, id laoreet erat. Sed dapibus eros odio, nec consequat tortor consectetur quis. Nullam ultrices iaculis leo, a placerat neque rhoncus sed. Phasellus commodo elit ac pretium aliquam. Praesent accumsan rhoncus dui, sed facilisis eros sollicitudin nec. Etiam volutpat, nisi a mattis consectetur, nisi lectus porttitor justo, ac bibendum diam augue vitae tortor. Curabitur quis orci leo.</p>
            </div>

            <div className="product-price">
                <h1>Product {product.name}</h1>
                <div className="product-buy">
                    <h2>${product.price}</h2>
                    <FaShoppingCart onClick={() => addToCart(product)} />
                </div>
            </div>

        </div> 
    )
};

export default ProductPage;