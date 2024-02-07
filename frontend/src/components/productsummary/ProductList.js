import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { FILTER_PRODUCTS, selectFilteredProducts } from '../../redux/features/product/filterSlice'
import Loader from '../../components/loader/loader';
import { getProducts } from '../../redux/features/product/productSlice';

const ProductList = () => {
  const [isLoading, setIsloading] = useState(false);
  // const [productList, setProductList ] = useState()
  const dispatch = useDispatch()
  const {products} = useSelector((state)=> state.product)

  useEffect(()=>{
    dispatch(getProducts())    
    console.log("getproducts type:", typeof getProducts);
    // console.log(setProductList);

  },[dispatch])
  return (
    <>
    <div className='text-center font-semibold text-black text-2xl'>
      <h1>All Entries</h1>
    </div>    
    
    {isLoading && 
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
              <Loader /> 
            </div>
          
    }
    <div className='p-1 w-full my-4'>
    {/* {!isLoading && Products.length === 0 ? (
      <p>NO Data , Please Make Some Enteries....</p>
    ) : (  */}
      <table className='w-full border-collapse' >
      <thead className='border-y-2 border-cyan-600'>
                <tr className=''>
                  <th>Id</th>
                  <th>Production</th>
                  <th>Rate</th>
                  <th>Feed</th>
                  <th>TotalValue</th>
                  {/* <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th> */}
                </tr>
              </thead>
              <tbody> 
                {products.map((i)=>{
                  // const { customId , production, rate ,feed} = product;
                  return(
                    <tr >
                      <td>{i.customID}</td>
                      <td>{i.production}</td>
                      <td>{i.rate}</td>
                      <td>{i.feed}</td>
                      <td>{i.production * i.rate}</td>
                      
                    </tr>
                  )
                })}
                    
              </tbody>
      </table>
     {/* )         
    }  */}
      
    </div>
    </>
  )
}

export default ProductList