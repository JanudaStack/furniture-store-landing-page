import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <div className="site-logo">
                    <img
                        src="/images/icon-hamburger.svg"
                        alt="hamburger-menu"
                    />
                </div>
                <a href="#home">Willow Nest</a>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
