import React, { useEffect, useState }  from 'react'
import "./Women.css"
import axios from 'axios'
import Cards from '../../../../components/site/Cards/Cards'
const Women = () => {
  return (
    <section className='Women'>
   
    <div className="Women_title">
    <h1 >New realeased Products for Women</h1>
    <p>Who are in extremely love with eco friendly system.</p>
    </div>
    <div className="women_cards">
      <Cards/>
    </div>
      
    </section>
  )
}

export default Women
