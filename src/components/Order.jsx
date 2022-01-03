import React from 'react';
import '../styles/Order.scss';
import arrow from '../assets/icons/flechita.svg';

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$3.000.000</p>
            <img src={arrow} alt="arrow"/>
        </div>
    );
}

export default Order;