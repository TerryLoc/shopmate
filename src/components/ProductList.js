import { cloneElement, useState } from 'react';

export function ProductList() {
  const [products, setProducts] = useState([]);

  console.log(products);

  fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>
      <p>productlist</p>
    </div>
  );
}
