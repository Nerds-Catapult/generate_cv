import React from 'react'
import './featured.sass'
import Card from '../card/Card';

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        img2: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isNew: true,
        oldPrice: 100,
        newPrice: 50,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        img2: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isNew: true,
        oldPrice: 100,
        newPrice: 50,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        img2: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isNew: true,
        oldPrice: 100,
        newPrice: 50,
    }
];

const Featured = ({type}) => {
  return (
      <div className='featuredProducts'>
          <div className="top">
              <h1>{type} products</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum eius cupiditate, excepturi molestias soluta. Nemo totam, unde temporibus fugit soluta, minima neque debitis dolorem provident inventore tempore, eaque sint.
              </p>
          </div>
          <div className="bottom">
              {
                  data.map(item => (
                      <Card item={item} key={item.id} />
                  ))
               }
            </div>
    </div>
  )
}

export default Featured
