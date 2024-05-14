import React from 'react'
import Add from './../../../Pages/admin/Add/Add';
import Products from './../../../Pages/admin/Products/Products';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
    <div className="header_top">
        <div className="header_top_left">
          <ul>
            <li><Link>+12312-3-1209</Link></li>
            <li><Link>support@colorlib.com</Link></li>
          </ul>
        </div>
        <div className="header_top_right">
          <li><Link>LOGIN</Link></li>
        </div>
        </div>
        <div className="header_bottom">
          <div className="header_bottom_img">
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" />
          </div>
          <div className="header_bottom_right">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/admin">Add</Link>
                <Link t0="/products">Products</Link>
                <Link>Women</Link>
                <Link>Latest</Link>
                <Link>Pages</Link>
                <Link><i className="fa-solid fa-basket-shopping"></i></Link>
              </li>
            </ul>
          </div>
        </div>
    
    </header>
  )
}

export default Header
