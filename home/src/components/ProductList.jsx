import React, { useState, useEffect } from "react";

import { getProducts } from "home/products";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div class="bg-white mx-auto max-w-7xl mt-2 sm:px-6 lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products && products.map((product) => <Product item={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
