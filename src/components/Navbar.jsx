import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="#home">
                    {/* <img src="/images/logo.svg" alt="logo" /> */}
                    <img
                        src="/images/icon-hamburger.svg"
                        alt="hamburger-menu"
                    />
                    <p>Willow Nest</p>
                </a>
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
