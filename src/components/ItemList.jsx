import { Item } from './Item';

export const ItemList = ({ products }) => (
  <div className='item-list'>
    {products.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </div>
);