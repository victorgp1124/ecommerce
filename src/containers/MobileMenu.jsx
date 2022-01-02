import React from 'react';
import '../styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <ul>
                <li>
                    <a href="/" className="title">CATEGORIES</a>
                </li>
                <li>
                    <a href="/" >All</a>
                </li>
                <li>
                    <a href="/" >Clothes</a>
                </li>
                <li>
                    <a href="/" >Electronics</a>
                </li>
                <li>
                    <a href="/" >Furnitures</a>
                </li>
                <li>
                    <a href="/" >Toys</a>
                </li>
                <li>
                    <a href="/" >Others</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/" >My order</a>
                </li>
                <li>
                    <a href="/" >My account</a>
                </li>
            </ul>
            <ul>
                <li>
                    <p className="email">victorgp@example.com</p>
                </li>
                <li>
                    <a href="/" className="sing-out">Sing out</a>
                </li>
            </ul>
        </div>  
    );
}

export default MobileMenu;