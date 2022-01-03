import React from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png';

const OrderItem = () => {
    return ( 
        <div className="OrderItem">
            <figure>
                <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
            </figure>
            <p>Laptop</p>
            <p>$3.000.000</p>
            <img src={close} alt="close"/>
        </div>
    );
}

export default OrderItem;