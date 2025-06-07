import axios from "axios";


const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

// Fetch all products form the API
export const getProducts = () => {
  return api.get('/products');
};