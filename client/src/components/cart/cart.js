import React from 'react'

function Cart() {
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
  ]
  return (
    <div className='cart'>
      <h1>Items In your cart</h1>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p> {item.desc.substring(0, 100)} </p>
            <div className="price"> 1 x ${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
