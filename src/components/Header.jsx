import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logos/logo_yard_sale.svg';
import menu from '../assets/icons/icon_menu.svg';
import cart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo"/>
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Other</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">victorgp@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={cart} alt="shopping cart"/>
                        <div>3</div>
                    </li> 
                </ul>   
            </div>
        </nav>
    );
}

export default Header;