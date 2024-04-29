import React from 'react';

const CheckoutForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <div className="checkout-form-container">
      <form className="checkout-form">
        <label>Nombre</label>
        <input
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
        />
        <label>Celular</label>
        <input
          type="text"
          value={values.phone}
          name="phone"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;


