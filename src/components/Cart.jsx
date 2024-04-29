import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { clear, items, removeItem, totalQuantity } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1 className='produc-cart'>No hay productos en el carrito</h1>
        <div className='btn-volver'>
        <Link to={'/'} className='volver'>Volver a los Productos</Link>
        </div>
      </div>
    );
  }

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleClear = () => clear();
  const handleRemove = (id) => removeItem(id);

  return (
    <Container>
      <h1 className='titulo'>Tus productos:</h1>
      {items.map((item) => (
        <div key={item.id}>
          <ul>
          <li>Producto: {item.title}</li>
          <li>Cantidad: {item.quantity}</li>
          <li>Precio unitario: USD${item.price}</li>
          <button className='btn-x' onClick={() => handleRemove(item.id)}><i className='bx bx-trash'></i></button>
          </ul>
        </div>
      ))}
      <div className='btn-container'>
        <button className='btn-clear' onClick={handleClear}>Limpiar carrito <i className='bx bx-trash'></i></button>
      </div>
      <div className='total-container'>
        <p className='total'>Total: USD${total()}</p>
      </div>
      <div className='checkout-compra'>
        <Link to="/checkout" className="btn-checkout">Realizar compra</Link>
      </div>
    </Container>
  );
};

export default Cart;