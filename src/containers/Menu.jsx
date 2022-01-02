import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
    return (
        <div class="desktop-menu">
            <ul>
                <li>
                    <a href="/" class="title">My order</a>
                </li>
                <li>
                    <a href="/" >My account</a>
                </li>
                <li>
                    <a href="/" >Sing out</a>
                </li>
            </ul>
        </div>  
    );
}

export default Menu;