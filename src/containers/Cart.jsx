import React, { useContext } from 'react';
import '@styles/Cart.scss';
import arrow from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';

const Cart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
    return ( 
        <aside className="my-order-cart">
            <div className="my-order-container-cart">
                <div className="title-container-cart">
                    <img src={arrow} alt="arrow"/>
                    <p className="title-cart">My order</p>
                </div>
                <div className="my-order-content-cart">
                    {state.cart.map(product => (
                        <OrderItem product={product} key={`orderItem-${product.id}`}/>
                    ))}    
                    <div className="order">
					    <p>
						    <span>Total</span>
					    </p>
					    <p>${sumTotal()}</p>
				    </div>
                    <button className="primary-button-cart">Checkout</button>
                </div>
            </div>
        </aside>    
    );
}

export default Cart;