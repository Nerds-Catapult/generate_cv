import React from 'react';
import './Navbar.scss';
import { HiOutlineSearch } from 'react-icons/hi'
import { MdRemoveShoppingCart } from 'react-icons/md';
const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <h1>Shopka</h1>
                </div>
                <div className="affiliate">
                    <a href="#">Sell On Shopka</a>
                    <a href="#">Register</a>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button> <HiOutlineSearch/> </button>
                </div>
                <div className="cart">
                    <MdRemoveShoppingCart />
                    <span>2</span>
                </div>
                <div className="user">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
