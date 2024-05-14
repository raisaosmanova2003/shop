import React from 'react'
import "./CardItem.css"
import {Link} from 'react-router-dom'
import Details from '../../../Pages/site/Details/Details'
const CardItem = ({item}) => {
  return (
    <div className='cards'>
    <div className="card" style={{ width: "18rem" }}>
      <img height={"240px"} src={item.image} className="card-img-top" alt="..." />
      <div style={{textAlign:"center"}} className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p style={{color:"red"}} className="card-text">{item.price}</p>
      </div>
      <div className="card_icons">
        <Link>
          <i className="fa-solid fa-heart"></i>
        </Link>
        <Link>
        <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to={`/details/${item.id}`}>
        Details
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CardItem
