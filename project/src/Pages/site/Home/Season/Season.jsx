import React from 'react'
import "./Season.css"
import { Link } from 'react-router-dom';
const Season = () => {
  return (
    <section className='season'>
      <div className="season_left">
          <img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" />
      </div>
      <div className="season_right">
          <h1 className='off'><span className='flat'>Flat</span>75%Off</h1>
          <h1 className='its'>IT’S HAPPENING <br />
THIS SEASON!</h1>
<button><Link>Purchase Now</Link></button>
      </div>
    </section>
  )
}

export default Season
