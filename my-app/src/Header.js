import './styles/Header.css';
import React from 'react';

function Header(){
    return( 
        <header class='Nav-Header'>
            <div class="Nav">
                <a>Home</a>
                <a>Product</a>
                <a>Contact</a>
                <a>Buy</a>
            </div>
        </header>
    );
}

export default Header;