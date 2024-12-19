import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../axiosConfig.js'
import { Link } from 'react-router-dom'
import { ecomcontext } from '../App'
import Cartquant from '../components/Cartquant'

function SingleProduct() {
      const {cart ,handleAddToCart} = useContext(ecomcontext)
   const {id} = useParams()
   const [product, setProduct] = useState({})

   useEffect(()=>{
    fetchdata(id);
   },[id])

   async function fetchdata(id) {
    const result = await instance.get("/products/" + id)
    setProduct(result.data)
   }
  return (
    <>
    {
      Object.keys(product).length > 0 ? (
        <div className="singleProduct">
        <div className="left">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="right">
          <h2>{product.title}</h2>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          {cart.find((item) => item.id === product.id) ?
        (<Cartquant id={product.id}/>)
        :
        (<div className='add1'>
          <Link className='addToCart' onClick={() => handleAddToCart(product)}>Add To Cart</Link>
        </div>)}
        </div>
      </div>
      ) : (
        <div>Loading...</div>
      )
    }
    
    </>
  )
}

export default SingleProduct
