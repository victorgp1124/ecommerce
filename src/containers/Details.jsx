import React from 'react';
import '@styles/Details.scss';
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';

const Details = () => { 
    return (
        <aside className="product-detail-details">
            <div className="product-detail-close-details">
                <img src={close} alt="close"/>
            </div>
            <ProductInfo/>
        </aside>   
    );
}

export default Details;