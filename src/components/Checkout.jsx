import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { CartContext } from '../contexts/CartContext';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

const Checkout = () => {
  const [values, setValues] = useState(initialValues);
  const { items, clear } = useContext(CartContext);

  const total = () => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert('Su orden: ' + id + ' ha sido completada!');
        }
      })
      .finally(() => {
        clear;
        setValues(initialValues);
      });
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <CheckoutForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Link to="/cart">Volver al carrito</Link>
    </Container>
  );
};

export default Checkout;
