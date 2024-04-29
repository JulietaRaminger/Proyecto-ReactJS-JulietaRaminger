MUNDO VISUAL
Mundo Visual es un framework diseñado para ofrecer una experiencia de compra en línea intuitiva y atractiva para la adquisición de cámaras de fotos y celulares.

Estructura del Proyecto:
El proyecto está organizado en dos carpetas principales:

💢components: Contiene todos los componentes necesarios para construir la interfaz de usuario de la aplicación.
📌Cart.jsx: Componente para mostrar el carrito de compras.
📌CartWidget.jsx: Componente de widget para mostrar el número de elementos en el carrito.
📌Checkout.jsx: Componente para el proceso de pago.
📌CheckoutForm.jsx: Componente para el formulario de checkout.
📌Item.jsx: Componente para mostrar un único producto.
📌ItemCount.jsx: Componente para seleccionar la cantidad de un producto.
📌ItemDetail.jsx: Componente para mostrar los detalles de un producto.
📌ItemDetailContainer.jsx: Componente contenedor para mostrar los detalles de un producto.
📌ItemList.jsx: Componente para mostrar una lista de productos.
📌ItemListContainer.jsx: Componente contenedor para mostrar una lista de productos.
📌NavBar.jsx: Componente de barra de navegación.

💢contexts: Contiene el contexto de la aplicación para gestionar el estado global del carrito de compras.
📌CartContext.jsx: Contexto para gestionar el estado global del carrito de compras.

👉Funcionalidades:
Visualización de productos: Los usuarios pueden ver una lista de productos disponibles para comprar.
Detalles del producto: Los usuarios pueden ver los detalles de un producto, incluyendo su descripción y precio.
Selección de cantidad: Los usuarios pueden seleccionar la cantidad deseada de un producto utilizando el componente ItemCount.
Agregado al carrito: Los usuarios pueden agregar productos al carrito de compras.
Visualización del carrito: Los usuarios pueden ver los productos agregados al carrito de compras y su subtotal.
Proceso de pago: Los usuarios pueden proceder al pago de los productos en su carrito utilizando el componente Checkout.

👉Uso:
Para utilizar Mundo Visual en tu aplicación, simplemente importa los componentes necesarios desde la carpeta components y utiliza el contexto CartContext para gestionar el estado del carrito de compras.

import React from 'react';
import { ItemListContainer } from './components/ItemListContainer';
import { Cart } from './components/Cart';
import { CartContextProvider } from './contexts/CartContext';

const App = () => {
return (
<CartContextProvider>
<div>
<NavBar />
<ItemListContainer />
<Cart />
</div>
</CartContextProvider>
);
};

export default App;



¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un issue o enviar un pull request.
