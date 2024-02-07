// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//   createProduct,
//   selectIsLoading,
// } from "../../redux/features/product/productSlice";
// import Loader from "../../components/loader/loader";
// import ProductForm from "../../components/product form/product";

// const initialState = {
//   customID: "",
//   production: "",
//   feed: "",
//   rate: "",
// };

// const AddProduct = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(initialState);
// //   const [productImage, setProductImage] = useState("");
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [description, setDescription] = useState("");

//   const isLoading = useSelector(selectIsLoading);

//   const { customID, rate, production, feed } = product;

 

  

  

//   const saveProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("production", production);
//     formData.append("rate", rate);
//     formData.append("feed", feed);
//     formData.append("customID", customID);
   
    
//     console.log(...formData);
    
//     await dispatch(createProduct(formData));
    
//   };
//   navigate("/dashboard");

//   return (
//     <div>
//       {isLoading && <Loader />}
//       <h3 className="--mt">Add New Product</h3>
//       <ProductForm
//         customID={customID}
//         production={production}
//         rate={rate}
//         feed={feed}
        
//         saveProduct={saveProduct}
//         // setDescription={setDescription}
//         // handleImageChange={handleImageChange}
//       />
//     </div>
//   );
// };

// export default AddProduct;
