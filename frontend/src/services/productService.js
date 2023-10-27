import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteProduct = async ({customID}) => {
  const response = await axios.delete(API_URL + {customID});
  return response.data;
};
// Get a Product
const getProduct = async ({customID}) => {
  const response = await axios.get(API_URL + {customID});
  return response.data;
};
// Update Product
const updateProduct = async ({customID}, formData) => {
  const response = await axios.patch(`${API_URL}${{customID}}`, formData);
  return response.data;
};

const ProductService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default ProductService;
