import { useState } from 'react';
import { useFretch } from '../hooks/useFretch';
// import Loading from '../assets/snail-loading.png';

export function ProductList() {
  const [url, setUrl] = useState('http://localhost:8000/products');
  const { data: products, loading } = useFretch(url);

  // // Only when function is outside useEffect
  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl('http://localhost:8000/products')}>
          All
        </button>
        <button
          onClick={() => setUrl('http://localhost:8000/products?instock=1')}>
          In Stock
        </button>
      </div>

      {loading && (
        <p className="loading">
          Loading Products...
          {/* <img src={Loading} alt="" /> */}
        </p>
      )}

      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>€{product.price}</span>
              <span className={product.instock ? 'instock' : 'unavailable'}>
                {product.instock ? 'In Stock' : 'Unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
}
