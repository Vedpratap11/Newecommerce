import React, { useContext, useState, useEffect } from 'react'
import { ecomcontext } from '../App'
import Cartquant from '../components/Cartquant';
import Checkout from './Checkout';
// import { MdDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, HandleRemoveFromCart } = useContext(ecomcontext)
  console.log(cart);

  const [sumTotal, setSumTotal] = useState(0)

  useEffect(() => {
    if(cart.length === 1){
      setSumTotal(cart[0].price*cart[0].quantity)
    }
    else if(cart.length > 1) {
      setSumTotal(cart.reduce(
        
        
        (acc, item) => {
          return (acc.price * acc.quantity + item.price * item.quantity)
        }
      )
      )
    }


  }, [cart])
console.log(sumTotal);



  return (
    <div id='cartblock'>
      <div id='cartelement'>
        {
          cart.map((item) => {
            return (
              <>
                <div className='cart' key={item.id}>

                  <div className='mid'>
                    <h3>{item.title}</h3>
                    <p>Price : ${item.price}</p>
                    <Cartquant id={item.id} />
                    {/* <Link onClick={()=> HandleRemoveFromCart(item)}><MdDeleteSweep/></Link> */}
                  </div>
                  <div className='cartimg'>
                    <img src={item.image} alt="" />
                  </div>
                </div>


              </>
            )

          })
        }
      </div>
      <div className='righto'>
        <div >Subtotal ({cart.length} items) : ${sumTotal.toFixed(2)} </div>
        <Link to="/checkout"><Checkout />Checkout</Link>
      </div>
    </div>
  )
}

export default Cart
