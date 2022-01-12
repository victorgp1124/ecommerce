import React from 'react';
import '@styles/ProductInfo.scss';
import cart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => { 
    return (
        <>
            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
            <div className="points-details">
                <li className="active-details"></li>
                <li></li>
                <li></li>
            </div>
            <div className="ProductInfo">
                <p>$3.000.000</p>  
                <p>Laptop</p>   
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quasi quaerat est soluta non, blanditiis esse error ducimus eum accusamus eligendi animi architecto cupiditate veniam dolor voluptatibus mollitia reprehenderit eos.</p> 
                <button className="primary-button add-to-cart-button">
                    <img src={cart} alt="add to cart"/>    
                    Add to cart
                </button>
            </div>
        </>   
    );
}

export default ProductInfo;