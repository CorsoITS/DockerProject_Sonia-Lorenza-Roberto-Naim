import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <img src= "https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg" alt='logo'></img>
            <div>
                <a href="/shop">Acquista</a>
                <a href="/orders">Ordini</a>
                <a href="/inventory">Inventario</a>
            </div>
        </nav>
    );
};

export default Header;