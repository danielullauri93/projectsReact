import { products as initialProducts } from './mocks/products.json';
import Products from './components/products/Products.jsx';
import Header from './components/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { IS_DEVELOPMENT } from './config.js';
import { useFilters } from './hooks/useFilters.js';
import { CartProvider } from './context/cart.jsx';
import Cart from './components/cart/Cart.jsx'

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
