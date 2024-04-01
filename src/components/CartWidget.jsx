import cart from '../assets/cart.png';

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <img src={cart} alt="Cart" className="img" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
