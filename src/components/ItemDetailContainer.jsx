import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
        const filter = data.find ((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

if(!product) return <div>loading...</div>;

  return (
    <Container className="item-detail-container mt-4">
     <h2 className='title-img'>{product.title}</h2>
     <img src={product.pictureUrl} alt={product.title} className="product-image"/>
     <p>{product.description}</p>
     <p className='price'>{product.price}</p>
     <div className="item-count-container">
     <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </div>
    </Container>
  );
};
