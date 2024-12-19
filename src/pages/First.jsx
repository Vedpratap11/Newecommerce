import React, { useEffect, useState } from 'react'
import instance from '../axiosConfig.js'
import Product from "../components/Product.jsx"

function First() {
    const [obj, setObj] = useState([])
    useEffect(()=>{
        async function fetchdata() {
            const result = await instance.get("/products")
            console.log(result.data) 
            setObj(result.data)
        }
        fetchdata()
    },[])
    console.log(obj)
  return (
    <section id='wrapp'>
    {
      obj.map((product)=>{
        return obj.length > 0 ? (<Product key={product.id} product={product}/>) : (<div className='load'>LOADING...</div>)
      })
    }
       
    </section>
  )
}

export default First
