import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <KeyboardArrowDownIcon />
            <span>USD</span>
          </div>
          <div className="item">
            <Link className="link"to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link"to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link"to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link"to="/">Octopus</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link"to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link"to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link"to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link"to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteIcon />
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
