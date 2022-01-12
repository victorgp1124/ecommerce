import React from 'react';
import '@styles/MyOrders.scss';
import OrderItem from '@components/OrderItem';

const MyOrders = () => {
    return (
        <div className="my-order-my_orders">
            <div className="my-order-container-my_orders">
                <h1 className="title-my_orders">My orders</h1> 
                <div className="my-order-content-my_orders">
                    <OrderItem/>
                </div>
            </div>
        </div>  
    );
}

export default MyOrders;