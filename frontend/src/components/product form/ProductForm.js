import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from '../../redux/features/product/productSlice';
const initialState = {
  customID: "",
  production: "",
  feed: "",
  rate: "",
};

function ProductForm(
    customID,
    production,
    rate,
    feed,
    // saveProduct
) {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // console.log("product state:", product)
  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    // const formData = new FormData();
    // console.log(...formData)
    // formData.append("customId",customID);
    // formData.append("production",production);
    // formData.append("rate",rate);
    // formData.append("feed",feed);

    
    await dispatch(createProduct(product))
    navigate("/dashboard");
  }
  

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <Link to="/dashboard">Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Production Table</h1>
      <form onSubmit={handleFormSubmit} >
        <div className="mb-4">
          <label className="flex text-sm font-medium">Custom Id:</label>
          <input
            type="number"
            name="customID"
            value={product.customID}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Production:</label>
          <input
            type="number"
            name="production"
            placeholder='Egg Counts'
            value={product.production}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Rate:</label>
          <input
            type="varchar"
            name="rate"
            placeholder='Today Egg Rate'
            value={product.rate}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Feed Used:</label>
          <input
            type="varchar"
            name="feed"
            placeholder='In Bags'
            value={product.feed}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 font-semibold w-full"
          
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
