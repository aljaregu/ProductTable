import '../styles/App.css';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

function App() {
  return (
    <section className='filterable-product-table'>
      <SearchBar/>
      <ProductTable/>
    </section>
  );
}

export default App;