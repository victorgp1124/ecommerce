import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order-my_order">
            <div className="my-order-container-my_order">
                <h1 className="title-my_order">My order</h1> 
                <div className="my-order-content-my_order">
                    <div className="order-my_order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$3.000.000</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div> 
    );
}

export default MyOrder;