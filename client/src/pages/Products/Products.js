import React, {useState} from 'react'
import { List } from '../../components/list/list'
import { useParams } from 'react-router-dom'
import './products.scss'
const Products = () => {

  const catId = parseInt(useParams().id); 
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1 " value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2 " value={2} />
            <label htmlFor="2">Skirt</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Trousers</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" id="price" name="price" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id="asc" name="price" value="asc" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" name="price" value="desc" onChange={e=>setSort("desc")}/>
            <label htmlFor="asc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <List catId={catId}  maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products
