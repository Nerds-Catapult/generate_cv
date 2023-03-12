import React from 'react'
import { Link } from 'react-router-dom'


import './card.scss'
const Card = ({ item }) => {
  return (
    <Link to={`product/item/${item.id}`} className='link'>
      <div className='card'>
        <div className="image">
          <img src={item.img} className='mainImg' />
          <img src={item.img2} 
          className='secondImg'/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3> ${item.oldPrice} </h3>
          <h3> ${item.newPrice} </h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
