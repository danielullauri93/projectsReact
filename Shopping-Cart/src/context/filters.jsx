import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// 1. Crear el contexto, este es el que tenemos que consumir
export const FiltersContext = createContext();

// 2. Crear el Provider, para Proveer el Contexto, y este es el que va en volver en la raiz
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ahora acepta cualquier contenido React
};
