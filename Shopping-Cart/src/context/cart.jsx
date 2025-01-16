// Importa PropTypes para validación de props y React hooks
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { createContext } from 'react';
import { cartReducer, cartInitialState } from '../reducers/cart';

// 1. Crear Contexto para manejar el estado global del carrito
export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState); // useReducer para manejar el estado del carrito con las acciones definidas en el reducer

  // Función para agregar un producto al carrito
  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART', // Define el tipo de acción
      payload: product, // Envía el producto como datos adicionales
    });

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART', // Define el tipo de acción
      payload: product, // Envía el producto como datos adicionales
    });

  // Función para limpiar todo el carrito
  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART', // Define el tipo de acción
    });

  // Retorna el estado y las funciones para el carrito
  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

// 2. Crear Provider
export const CartProvider = ({ children }) => {
  // ANTES DE USAR EL useReducer

  // const [cart, setCart] = useState([]);
  // const addToCart = (product) => {
  //   // Check if the product is already in the cart

  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   if (productInCartIndex >= 0) {
  //     // forma usando structuredClone
  //     const newCart = structuredClone(cart); // el structuredClone hace copias profundas de los arreglos
  //     newCart[productInCartIndex].quantity++; // usamos la copia del indice e incrementamos, porque no es parte del estado
  //     setCart(newCart);
  //   }

  //   // si el producto no esta en el carrito
  //   setCart((prevState) => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ]);
  // };

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id != product.id));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };
  // FIN DE LO ANTERIOR DEL useReducer


  const { state, addToCart, removeFromCart, clearCart } = useCartReducer(); // useCartReducer para manejar el estado del carrito con las acciones definidas en el reducer
  return (
    // Proveer el estado y las funciones al contexto
    <CartContext.Provider
      value={{
        cart: state, // Estado actual del carrito
        addToCart, // Función para agregar al carrito
        removeFromCart, // Función para eliminar del carrito
        clearCart, // Función para limpiar el carrito
      }}
    >
      {children} {/* Renderiza los componentes hijos */}
    </CartContext.Provider>
  );
};

// Validación de las props para asegurar que se pase correctamente el children
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que children sea un nodo de React
};
