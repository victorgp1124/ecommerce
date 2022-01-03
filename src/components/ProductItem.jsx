import React from 'react';
import '../styles/ProductItem.scss';
import cart from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = () => {
    return ( 
        <div className="ProductItem">
            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt=""/>
            <div className="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Laptop</p>
                </div>
                <figure>
                    <img src={cart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;