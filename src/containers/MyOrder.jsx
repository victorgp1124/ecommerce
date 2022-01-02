import React from 'react';
import '../styles/MyOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$3.000.000</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>3.000.000</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>3.000.000</p>
                    </div>
                    <div className="shopping-cart">
                        <figure>
                            <img src="https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg" alt="laptop"/>
                        </figure>
                        <p>Laptop</p>
                        <p>3.000.000</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default MyOrder;