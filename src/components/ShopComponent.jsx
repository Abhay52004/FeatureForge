import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

function ShopComponent() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setError('');
    } catch {
      setError('Failed to fetch products');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  return (
    <div className="container mt-4 shop-section">
      <h1>Shop</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopComponent;