import { useEffect, useState } from 'react'
import './App.css'
import MainContext from './context/context'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router'
import axios from 'axios'
import ROUTES from './Routes/routes';

function App() {
const routes=createBrowserRouter(ROUTES)
const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) :[])
const [data,setData]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState("")
useEffect(() =>{
  axios.get('http://localhost:3000/products').then(res=>{
    setData([...res.data])
    setLoading(false)
  }).catch(error=>{
    setError(error)
    setLoading(false)
})
},[])
const contextData={data,setData,error,setError,loading,setLoading,basket,setBasket}
  return (
    <>
  <MainContext.Provider value={contextData}>
<RouterProvider router={routes}/>
  </MainContext.Provider>
    </>
  )
}

export default App
