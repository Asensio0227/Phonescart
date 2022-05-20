import React from 'react'
import CartItems from './CartItems';
import { useGlobalContext } from './Context';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>your bag</h2>
        <h4 className="rmpty-cart">is currently empty</h4>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((cartItem) => {
          return <CartItems key={cartItem.id} {...cartItem}/>
        })}
      </div>
      <footer>
        <hr />
        <div className="total-items">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-cart" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
