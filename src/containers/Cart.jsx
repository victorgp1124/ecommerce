import React from 'react';
import '@styles/Cart.scss';
import arrow from '@icons/flechita.svg';
import OrderItem from '@components/OrderItem';
import Order from '@components/Order';

const Cart = () => {
    return ( 
        <aside className="my-order-cart">
            <div className="my-order-container-cart">
                <div className="title-container-cart">
                    <img src={arrow} alt="arrow"/>
                    <p className="title-cart">Shopping cart</p>
                </div>
                <div className="my-order-content-cart">
                    <Order/>
                    <OrderItem/>
                    <button className="primary-button-cart">Checkout</button>
                </div>
            </div>
        </aside>    
    );
}

export default Cart;