import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import cart from '../assets/cart.png';

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);
  return (
    <Link to="/cart" id="cart-widget">
      <img src={cart} alt="Cart" className="img" />
      <span> {total} </span>
    </Link>
  );
};

export default CartWidget;
