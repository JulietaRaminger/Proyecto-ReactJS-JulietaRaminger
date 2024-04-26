import Container from 'react-bootstrap/Container';
import { useContext } from 'react';

import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="item-detail-container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <h2 className="title-img">{product.title}</h2>
          <img
            src={product.pictureUrl}
            alt={product.title}
            className="product-image"
          />
          <p>{product.description}</p>
          <p className="price">USD${product.price}</p>
          <div className="item-count-container"></div>
        </div>
      </div>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
