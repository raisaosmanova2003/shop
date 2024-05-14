import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import MainContext from '../../../context/context';
const Details = () => {
  const [data,setData]=useState ()
const {id}= useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`).then(res=>{
      setData(res.data)
    })
  },[])
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container mt-5">
            <div className="details">
    {data && (
        <>
            <div className="details_img">
                <img src={data.image} alt="" />
            </div>
            <div className="details_body">
                <h1>{data.name}</h1>
                <h2>{data.price}</h2>
            </div>
        </>
    )}
</div>
            </div>
            
    </div>
  )
}

export default Details
