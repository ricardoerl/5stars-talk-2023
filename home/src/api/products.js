const API_SERVER = "https://fakestoreapi.com";

export const getProducts = () =>
  fetch(`${API_SERVER}/products?limit=8`).then((res) => res.json());

export const getProductById = (id) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());