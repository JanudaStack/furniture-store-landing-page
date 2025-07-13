import React from 'react';
import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg';
import { navLinks } from '../../constants';
const Navbar = () => {
    return (
        <header className="site-nav fixed z-50 py-6 px-5 w-full">
            <nav className="">
                <div className="flex items-center">
                    <button className="block absolute lg:hidden">
                        <img src={menu} alt="" className="hamburger-menu" />
                    </button>
                    <a href="#home" className="mx-auto lg:mx-0 mr-auto">
                        <img src={logo} alt="site-logo" />
                    </a>
                    <div className="desktop-navbar hidden lg:block lg:ml-20">
                        <ul className="flex gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`${link.id}`}
                                        className="text-lg border-b-3 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
