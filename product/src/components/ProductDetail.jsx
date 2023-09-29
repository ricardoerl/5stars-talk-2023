import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "home/products";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((product) => {
        setProduct(product);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <>
      {error && <div className="text-center py-6">
        <h1 className="text-3xl">¡Algo salió mal!</h1>
        <button
              type="submit"
              class="rounded-md border border-transparent bg-indigo-600 mt-6 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Regresar
            </button>
        </div>}
      {Object.keys(product).length > 0 && (
        <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
            <p class="text-3xl tracking-tight text-gray-900 mt-2">
              ${product.price}
            </p>
          </div>

          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.image}
                alt="Model wearing plain white basic tee."
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div class="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="mb-6">
              <div class="space-y-2">
                <p class="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            <button
              type="submit"
              class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Comprar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
