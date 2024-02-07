// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectIsLoading } from '../../redux/features/product/productSlice'
// import ProductForm from './ProductForm'

// const initialState = {
//     customID: "",
//     production: "",
//     feed: "",
//     rate: "",
// }
// const SaveForm = () => {
//     const dispatch = useDispatch()
//     const [product, setProduct] = useState(initialState)

//     const isLoading = useSelector(selectIsLoading)
//     const {customID,production,feed, rate} = product;

//     const handleInputChange = (e) =>{
//         const {name,value} = e.target;
//         setProduct({...product,[name]:value})
//     }
//   return (
//     <div>
//         {isLoading && <Loader />}
//         <ProductForm
        
//         />

        
//     </div>
//   )
// }

// export default SaveForm