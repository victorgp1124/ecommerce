import React, { useState }  from 'react';
import '@styles/ProductItem.scss';
import cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const [car, setCart] = useState([]);

    const handleClick = ()=> {
        setCart([]);
    }
    return ( 
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={cart} alt=""/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;