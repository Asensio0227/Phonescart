import React from 'react'
import { useGlobalContext } from './Context'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CartItems = ({ id, img, title, price, amount }) => {
  const { removeCart, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-items">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="items-price">${price}</h4>
        <button className="remove-btn" onClick={() => removeCart(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => toggleAmount(id, 'Inc')}>
          <FaArrowUp className="icon" />
        </button>
        <p className={amount > 5 ? 'amount active-btn' : 'amount'}>{amount}</p>
        <button className="amount-btn" onClick={() => toggleAmount(id, 'desc')}>
          <FaArrowDown className="icon" />
        </button>
      </div>
    </article>
  )
};

export default CartItems
