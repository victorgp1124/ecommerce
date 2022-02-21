import React, { useState , useContext } from 'react';
import '@styles/Header.scss';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import Cart from '@containers/Cart';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import cart from '@icons/icon_shopping_cart.svg';
import MobileMenu from '../containers/MobileMenu';

const Header = () => { 
    const [toggle,setToggle] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    const [toggleOrder, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const hadleToggle = () => {
        setToggle(!toggle);
    }
    const hadleToggle2 = () => {
        setToggle2(!toggle2);
    }
    return (
        <nav>
            <img src={menu} alt="menu" className="menu-header" onClick={hadleToggle2}/>
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
                    <li className="navbar-shopping-cart-header" onClick={() =>setToggleOrders(!toggleOrder)}>
                        <img src={cart} alt="shopping cart-header"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li> 
                </ul>   
            </div>
            {toggle && <Menu/>}
            {toggleOrder && <Cart/>}
            {toggle2 && <MobileMenu/>}
        </nav>
    );
}

export default Header;