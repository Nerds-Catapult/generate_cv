import './list.scss';
import React from 'react'
import Card from '../card/Card';

export const List = () => {

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
      <div className='list'>
        {data?.map(item =>( <Card item={item} key={item.id}/>))}
    </div>
  )
}

