import React, { useEffect } from "react";

import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import redirectLogoutUser from '../../custom hook/redirectLogoutUser';

import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../../redux/features/product/productSlice";
import ProductSummary from "../../components/productsummary/ProductSummary";


export const formatNumbers = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
// const dummyData = [
//   { title: 'Total Users', value: 100 },
//   { title: 'Revenue', value: '$10,000' },
//   { title: 'New Orders', value: 25 },
// ];

function Dashboard({product}) {
  redirectLogoutUser("/");
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products } = useSelector(
    (state) => state.product
    );

  const dispatch = useDispatch();
  
  
  
  
  useEffect(() => {
    // dispatch(getProducts())
      // dispatch(CALC_STORE_VALUE(products));
    }, [dispatch, products]);
    // console.log("totalStoreValue type:", typeof totalStoreValue);
  return (
    <ProductSummary products={products}></ProductSummary>
  );

}

export default Dashboard;
