import React, { useContext, useState } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { ecomcontext } from '../App';
function Cartquant({ id }) {
  const { cart, HandleRemoveFromCart, changeQuantity } = useContext(ecomcontext)
  const [count, SetCount] = useState(1)
  // console.log(id);
 
  function icre() {
    SetCount(count + 1)
    changeQuantity(id, "icre")
  }

  function dcre() {
    if (count > 1) {
      SetCount(count - 1)
      changeQuantity(id, "dcre")
    }
  }
  return (

    <div className='counter'>
      <button onClick={icre}>+</button>
      <div className='count'>{count}</div>
      <button onClick={dcre}>-</button>
      <MdDeleteSweep className="delete" onClick={() => HandleRemoveFromCart(id)} />
    </div>
  )
}

export default Cartquant
