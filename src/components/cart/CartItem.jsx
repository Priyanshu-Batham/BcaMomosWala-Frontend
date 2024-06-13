import React from 'react'
import '../../style/cartItem.scss'

const CartItem = ({value, title, img, increment, decrement}) => {
  return (
    <div className='cartItem'>
      <div>
        <h4>{title}</h4>
        <img src={img} alt='item' />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type='number' readOnly value={value}/>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default CartItem
