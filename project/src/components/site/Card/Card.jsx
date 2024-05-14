
import React from 'react'
import CardItem from '../CardItem/CardItem'

const Card = ({items}) => {
  return (
    <div className='container d-flex gap-5 mt-5 flex-wrap'>
      {
        items.map((item,index)=>(
          <CardItem key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default Card
