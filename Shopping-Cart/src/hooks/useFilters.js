import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      );
    });
  };

  // .filter:
  // product.price >= filters.minPrice
  // Compara el precio del producto actual (product.price) con el precio mínimo (filters.minPrice).
  // Si el precio del producto es mayor o igual al precio mínimo, esta parte devuelve true. Si no, devuelve false.

  // Segunda condición:
  // filters.category === 'all' || filters.category === product.category
  // Evalúa si el filtro de categoría está configurado como 'all'.
  // Si es 'all', todos los productos pasan esta condición, independientemente de su categoría.
  // Si no es 'all', verifica si la categoría del producto (product.category) coincide exactamente con el valor del filtro (filters. category).
  // Operador lógico ||:
  // Si cualquiera de las dos condiciones es verdadera, la expresión completa devuelve true.

  return { filters, filterProducts, setFilters };
}
