import React from 'react';
import '../styles/Details.scss';
import close from '../assets/icons/icon_close.png';
import cart from '../assets/icons/bt_add_to_cart.svg';

const Details = () => {
    return (
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src={close} alt="close"/>
            </div>
            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
            <div class="points">
                <li class="active"></li>
                <li></li>
                <li></li>
            </div>
            <div class="product-info">
                <p>$3.000.000</p>  
                <p>Laptop</p>   
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quasi quaerat est soluta non, blanditiis esse error ducimus eum accusamus eligendi animi architecto cupiditate veniam dolor voluptatibus mollitia reprehenderit eos.</p> 
                <button class="primary-button add-to-cart-button">
                    <img src={cart} alt="add to cart"/>    
                    Add to cart
                </button>
            </div>
        </aside>   
    );
}

export default Details;