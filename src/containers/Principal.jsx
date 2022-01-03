import React from 'react';
import '../styles/Principal.scss';
import ProductItem from '../components/ProductItem';

const Principal = () => {
    return ( 
        <section className="main-container-principal">
            <div className="cards-container-principal">
            <ProductItem/>
            </div>
        </section>    
    );
}

export default Principal;