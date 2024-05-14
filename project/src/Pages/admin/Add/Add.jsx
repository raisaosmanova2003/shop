import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./Add.css"
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet-async';
const Add = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <div className=' add'>
    <Helmet>
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <h1>Anywhere in your app</h1>
      <Formik
       initialValues={{ image: '', name: '', price: '' }}
      
       onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3000/products", {
            id:uuidv4(),
            name:values.name,
            image:values.image,
            price:values.price,
            
        }).then(res=>{
        setData([...data, res.data])
        } )
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="name"
             name="name"
             placeholder='name'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           /> <br />
           {errors.name && touched.name && errors.name}
           <input
             type="text"
             name="image"
             placeholder='image'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           /> <br />
           <input
             type="text"
             name="price"
             placeholder='price'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           /> <br />
           
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Add
