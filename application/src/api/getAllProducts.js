import axios from "axios";
const API_URL = 'http://localhost:3003';

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/products`);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/products/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const { data } = await axios.get(`${API_URL}/products?category=${category}`);
    return data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};
