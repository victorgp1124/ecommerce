import React, { useState } from 'react';
import '@styles/Header.scss';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import Menu from '@components/Menu';
import cart from '@icons/icon_shopping_cart.svg';

const Header = () => { 
    const [toggle, setToggle] = useState(false);

    const hadleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav>
            <img src={menu} alt="menu" className="menu-header"/>
            <div className="navbar-left-header">
                <img src={logo} alt="logo" className="logo-header"/>
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
            <div className="navbar-right-header">
                <ul>
                    <li className="navbar-email-header" onClick={hadleToggle}>
                        victorgp@example.com
                    </li>
                    <li className="navbar-shopping-cart-header">
                        <img src={cart} alt="shopping cart-header"/>
                        <div>3</div>
                    </li> 
                </ul>   
            </div>
            {toggle && <Menu/>}
        </nav>
    );
}

export default Header;