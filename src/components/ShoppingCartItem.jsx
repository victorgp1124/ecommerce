import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
        <div className="ShoppingCartItem">
            <figure>
                <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
            </figure>
            <p>Laptop</p>
            <p>3.000.000</p>
        </div>
    );
}

export default ShoppingCartItem;