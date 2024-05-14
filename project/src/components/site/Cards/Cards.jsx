import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Card from '../Card/Card'
import "./Cards.css"
const Cards = () => {
  const {data}=useContext(MainContext)
  return (
    <div className='cards'>
      <Card items={data}/>
    </div>
  )
}

export default Cards

