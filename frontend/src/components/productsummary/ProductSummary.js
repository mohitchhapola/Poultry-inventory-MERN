import React, { useEffect } from 'react'
import { CALC_PRODUCTION_VALUE, CALC_STORE_VALUE , selectTotalStoreValue,selectProductionValue, selectFeedValue,CALC_FEED_VALUE} from "../../redux/features/product/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';


const Productsumm = ({products}) => {
    const dispatch = useDispatch();
    const totalStoreValue = useSelector(selectTotalStoreValue)
    const usedFeed = useSelector(selectFeedValue)
    const totaleggs = useSelector(selectProductionValue)

    useEffect(()=>{
        dispatch(CALC_STORE_VALUE(products));
        dispatch(CALC_PRODUCTION_VALUE(products));
        dispatch(CALC_FEED_VALUE(products));

    },[dispatch, products]);
  return (
    <div className="min-h-screen max-w-screen  lg:p-5 bg-gray-100">
      <main className="">
        {/* Page header */}
        <header className="mb-4">
          <h1 className="lg:text-3xl text-black  font-semibold">Dashboard Overview</h1>
        </header>

        {/* Dashboard content */}
        <div className="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-3 px-auto lg:px-auto ">
        
          {/* Dashboard cards */}
          {/* {dummyData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              
            </div>
          ))} */}
         
            <h2 className="lg:text-2xl text-indigo-600 font-bold">Total:Rs.{totalStoreValue}</h2>
              {/* <p className="lg:text-2xl  font-bold text-indigo-600">
                Rs.{totalStoreValue}
                </p>    */}
            <h2 className="lg:text-2xl text-indigo-600 font-bold">Total Eggs:{totaleggs} </h2>
              {/* <p className="lg:text-2xl font-bold text-indigo-600">
                {totaleggs}
                </p> */}
            <h2 className="lg:text-2xl text-indigo-600 font-bold"> Feed Used:{usedFeed}</h2>
              {/* <p className="lg:text-2xl font-bold text-indigo-600">
                {usedFeed}
                </p> */}
              
          
            {/* <p className="lg:text-center text-red-600 lg:text-3xl">No product</p> */}
        </div>
        <hr className='my-5' ></hr>
        <div>
          <ProductList></ProductList>
        </div>
      </main>
    </div>
  )
}

export default Productsumm;