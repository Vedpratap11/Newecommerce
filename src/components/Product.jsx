import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ecomcontext } from "../App"
import Cartquant from "./Cartquant"

function Product({ product }) {
  const { cart, handleAddToCart } = useContext(ecomcontext)

  function trimContent(input, limit) {
    return input.length > limit ? input.slice(0, limit + 1) + "..." : input;
  }
  return (
    <div className='box'>
      <Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
      <Link to={`/product/${product.id}`}><h3>{trimContent(product.title, 40)}</h3></Link>
      <p>Price: $.{product.price}</p>
      {cart.find((item) => item.id === product.id)!== undefined ?
        (<Cartquant id={product.id}/>)
        :
        (<div className='add'>
          <Link className='addToCart' onClick={() => handleAddToCart(product)}>Add To Cart</Link>
        </div>)}

    </div>
  )
}

export default Product
