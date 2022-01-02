import React from 'react';
import '../styles/Cart.scss';
import arrow from '../assets/icons/flechita.svg';
import close from '../assets/icons/icon_close.png';

const Cart = () => {
    return (
        <aside className="my-order">
            <div className="my-order-container">
                <div className="title-container">
                    <img src={arrow} alt="arrow"/>
                    <p className="title">Shopping cart</p>
                </div>
                <div className="my-order-content">
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>$3.000.000</p>
                        <img src={close} alt="close"/>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>$3.000.000</p>
                        <img src={close} alt="close"/>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>$3.000.000</p>
                        <img src={close} alt="close"/>
                    </div>
                    <div className="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>$3.000.000</p>
                    </div>
                    <button className="primary-button">Checkout</button>
                </div>
            </div>
        </aside>    
    );
}

export default Cart;