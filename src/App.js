import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { Aside } from './components/Aside';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts(category, selectedBrands, price);
  }, [category, selectedBrands, price]);

  const handlePriceFilter = (price) => {
    setPrice(price);
    fetchProducts(category, selectedBrands, price);
  };

  const fetchProducts = (category, brands, price) => {
    let url = 'https://e-commerce-be-sigma.vercel.app/product';
    let params = new URLSearchParams();

    if (category && category !== 'All') {
      params.append('category', category);
    }

    if (price > 0) {
      params.append('price', price);
    }

    if (brands.length > 0) {
      brands.forEach((brand) => params.append('brand', brand));
    }

    if (params.toString()) {
      url += '?' + params.toString();
    }

    axios
      .get(url)
      .then((response) => {
        console.log('Response data:', response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.error('Error fetching the products:', err);
      });
  };

  
  return (
    <div className="container">
      <div className="header">
        <div className="total-products">{products.length} product(s)</div>
        <button className="filter-button" onClick={() => setShowFilters(!showFilters)}>
          Filters
        </button>
      </div>
      <div className={`main-content ${showFilters ? 'show-filters' : ''}`}>
        <Aside
          setCategory={setCategory}
          setSelectedBrands={setSelectedBrands}
          handlePriceFilter={handlePriceFilter}
        />
        <div className="product-container">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product._id} product={product} />)
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
