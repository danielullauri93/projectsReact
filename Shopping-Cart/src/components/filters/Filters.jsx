import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../../hooks/useFilters';

export default function Filters() {
  const {filters, setFilters} = useFilters()
  
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {

    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  // handleChangeMinPrice:
  // Usuario mueve el control deslizante (slider):
  // event.target.value obtiene el nuevo valor del slider.
  // El usuario selecciona "50".

  // setMinPrice(event.target.value) se ejecuta:
  // Esto actualiza el estado minPrice a "50".

  // setFilters se ejecuta:
  // Aquí se llama a una función para actualizar el estado global de los filtros.
  // prevState contiene el estado previo de los filtros.
  // El operador spread (...) copia las propiedades existentes de prevState.

  // Se actualiza la propiedad minPrice con el nuevo valor:
  // minPrice: event.target.value // minPrice = 50

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  // handleChangeCategory:
  // Usuario selecciona una categoría en un <select>:

  // Supongamos que selecciona "smartphones".
  // event.target.value será "smartphones".

  // setFilters se ejecuta:
  // Se actualiza el estado global de los filtros:
  // category: event.target.value // category = "smartphones"

  return (
    <section>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}