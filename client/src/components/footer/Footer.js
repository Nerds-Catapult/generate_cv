import React from 'react'
import './footer.scss'


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Gategories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium obcaecati voluptates. Dolore voluptate laborum quis blanditiis excepturi, in eos, expedita unde omnis dolorem odit maxime dicta commodi enim adipisci?
          </span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium obcaecati voluptates. Dolore voluptate laborum quis blanditiis excepturi, in eos, expedita unde omnis dolorem odit maxime dicta commodi enim adipisci?
        </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Octopus</span>
          <span className="copyright">
            © 2021 Octopus. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
   </div>
  )
}

export default Footer
