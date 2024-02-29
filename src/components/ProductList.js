import { cloneElement, useEffect, useState } from 'react';

export function ProductList() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <p>productlist</p>
    </div>
  );
}
