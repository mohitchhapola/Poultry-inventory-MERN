import axios from "axios";

const BACKEND_URL = "https://poultrybackend.vercel.app/" ||  process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/dailyAct/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  console.log(response)
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteProduct = async ({ customID }) => {
  const response = await axios.delete(`${API_URL}${customID}`);
  return response.data;
};

// Get a Product
const getProduct = async ( customID ) => {
  const response = await axios.get(`${API_URL}${customID}`);
  return response.data;
};

// Update Product
const updateProduct = async (customID, updateData) => {
  const response = await axios.patch(`${API_URL}${customID}`,updateData);
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
