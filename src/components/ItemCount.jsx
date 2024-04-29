import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      swal('No hay suficiente stock 🥹');
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="Button" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
