import React from 'react';

const Navbar = () => {
    return (
        <nav className="site-nav">
            <div>
                <button>
                    <img
                        src="/images/icon-hamburger.svg"
                        alt=""
                        className="hamburger-menu"
                    />
                </button>
                <a href="#home">
                    <img src="/images/logo.svg" alt="site-logo" />
                </a>
                <div className="desktop-navbar">
                    <ul>
                        <li>
                            <a href="#home" className="underline-hover">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className="underline-hover">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="underline-hover">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="underline-hover">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
