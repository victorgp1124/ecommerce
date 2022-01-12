import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/Principal.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const Principal = () => {
    const products = useGetProducts(API);
    
    return ( 
        <section className="main-container-principal">
            <div className="cards-container-principal">
                {products.map(product => {
                   return <ProductItem product={product} key={product.id}/>
                })}
            </div>
        </section>    
    );
}

export default Principal;