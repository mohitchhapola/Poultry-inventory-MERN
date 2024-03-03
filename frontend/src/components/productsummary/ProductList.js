import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { FILTER_PRODUCTS, selectFilteredProducts } from '../../redux/features/product/filterSlice'
import Loader from '../../components/loader/loader';
import { deleteProduct, getProducts } from '../../redux/features/product/productSlice';
import { Link } from "react-router-dom";

const ProductList = () => {
  const [isLoading, setIsloading] = useState(false);
  // const [productList, setProductList ] = useState()
  const dispatch = useDispatch()
  const {products} = useSelector((state)=> state.product)

  // const handleDelbtn = async() =>{
  //   console.log(customID)
  //  await dispatch(deleteProduct(customID));
  // }

  useEffect(()=>{
    dispatch(getProducts())    
    // console.log("getproducts type:", typeof getProducts);
    // console.log(setProductList);

  },[dispatch])
  return (
    <>
    <div className='font-semibold text-black inline lg:text-2xl'>
      <h1 className='lg:text-center inline-block '>All Entries</h1>
      <Link className='right-2 text-2xl absolute' to="/product">+</Link>
    </div>    
    
    {isLoading && 
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
              <Loader /> 
            </div>
          
    }
    <div className='my-4'>
    {/* {!isLoading && products.length === 0 ? (
      <p>NO Data , Please Make Some Enteries....</p>
    ) : (  */}
      <table className='min-w-full' >
      <thead className='border-y-2 border-cyan-600'>
                <tr className=''>
                  <th>Id</th>
                  <th>Production</th>
                  <th>Rate</th>
                  <th>Feed</th>
                  <th>TotalValue</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody> 
                {products.map((i)=>{
                  // const { customId , production, rate ,feed} = product;
                  return(
                    <tr key={i.customID}>
                      <td>{i.customID}</td>
                      <td>{i.production}</td>
                      <td>{i.rate}</td>
                      <td>{i.feed}</td>
                      <td>{i.production * i.rate}</td>
                      <td >
                        <Link to={`/productupdate/${i.customID}`} className="px-4">Edit</Link>
                        <button onClick={() => dispatch(deleteProduct(i.customID))}>Delete</button>
                        
                        </td>
                      
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