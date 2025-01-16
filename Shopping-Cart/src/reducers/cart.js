// useReducer
// Estado inicial del carrito: un arreglo vacío
export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

// update localstorage with state for cart
export const updateToLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

// Función reductora que determina cómo cambiará el estado según la acción
export const cartReducer = (state, action) => {
  // Extrae el tipo de acción (type) y los datos asociados (payload)
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    // Caso para agregar un producto al carrito
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id); // Verifica si el producto ya está en el carrito

      // Verifica si el producto ya está en el carrito
      if (productInCartIndex >= 0) {
        // forma usando structuredClone
        // Si ya está en el carrito, crea una copia profunda del estado actual
        const newCart = structuredClone(state); // el structuredClone hace copias profundas de los arreglos
        // Incrementa la cantidad del producto en el carrito
        newCart[productInCartIndex].quantity++; // usamos la copia del indice e incrementamos, porque no es parte del estado
        return newCart; // Retorna el nuevo estado con la cantidad actualizada
      }

      // Si no está en el carrito, agrega el producto con cantidad inicial 1
      const newState = [
        ...state,
        {
          ...actionPayload, // Copia todos los datos del producto
          quantity: 1, // Inicializa la cantidad en 1
        },
      ];

      updateToLocalStorage(newState); // Actualiza el estado en el local storage
      return newState; // Retorna el nuevo estado con el producto agregado
    }

    // Caso para eliminar un producto del carrito
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.findIndex((item) => item.id === id);
      updateToLocalStorage(newState)
      return newState      
    }

    // Caso para limpiar todo el carrito
    case CART_ACTION_TYPES.CLEAR_CART: {
      // Llama la función updateToLocalStorage con el estado inicial
      updateToLocalStorage(cartInitialState) 
      return cartInitialState; // Retorna el estado inicial (un carrito vacío)
    }
  }

  return state;
};
