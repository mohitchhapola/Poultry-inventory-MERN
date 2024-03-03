import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../../redux/features/product/productSlice';

const ProductUpdate = () => {
  const { customID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.product);

  // Initialize updateData state with an empty object
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    // Find the product with the matching customID
    const singleProduct = products.find((product) => product.customID === Number(customID));
    if (singleProduct) {
      // If product is found, update the state
      setUpdateData(singleProduct);
    }
  }, [customID, products]);

  // Update the state when form inputs change
  const handleInputChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Dispatched updateData: ", updateData);
    dispatch(updateProduct(updateData))
    .then(() => {
      // console.log("Update successful");
      navigate("/dashboard");
    })
    .catch((error) => {
      console.error("Error updating product:", error);
    });
};

  return (
    <>
      <div className="max-w-screen-sm mx-auto p-4">
        <Link to="/dashboard">Back to Dashboard</Link>
        <h1 className="text-2xl font-bold mb-4">Edit/Update Table</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex text-sm font-medium">Custom Id:</label>
            <input
              type="number"
              name="customID"
              value={updateData.customID || ''}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              disabled // Prevent editing of customID
            />
          </div>
          <div className="mb-4">
            <label className="flex text-sm font-medium">Production:</label>
            <input
              type="number"
              name="production"
              placeholder="Egg Counts"
              value={updateData.production || ''}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="flex text-sm font-medium">Rate:</label>
            <input
              type="text"
              name="rate"
              placeholder="Today Egg Rate"
              value={updateData.rate || ''}
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="flex text-sm font-medium">Feed Used:</label>
            <input
              type="text"
              name="feed"
              placeholder="In Bags"
              value={updateData.feed || ''}
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
    </>
  );
};

export default ProductUpdate;
