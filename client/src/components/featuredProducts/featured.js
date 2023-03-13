import React from 'react'
import Card from '../card/Card';


import './featured.scss'
const featured = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622 .jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Nike Air Max 270",
            isNew: true,
            oldPrice: 200,
            newPrice: 150,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Nike Air Max 270",
            isNew: true,
            oldPrice: 200,
            newPrice: 150,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Nike Air Max 270",
            isNew: true,
            oldPrice: 200,
            newPrice: 150,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Nike Air Max 270",
            isNew: true,
            oldPrice: 200,
            newPrice: 150,
        }

    ];

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima harum est aliquam reiciendis veritatis consectetur laborum maiores tenetur explicabo aspernatur eius labore nulla quod repellat ad porro, cumque vitae temporibus?
                </p>
            </div>
            <div className="bottom">
                {data.map(item =>( <Card item={item} key={item.id} />))}
            </div>
        </div>
    )
}

export default featured
