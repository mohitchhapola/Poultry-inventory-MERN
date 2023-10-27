import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "../../../services/productService";
import { toast } from "react-toastify";

const initialState = {  
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    totalStoreValue: 0,
    outOfStock: 0,
    category: [],
  }; 

  //create new product 

  
  export const createProduct = createAsyncThunk(
    "products/create",
    async (formData, thunkAPI) =>{
        try {
            return await ProductService.createProduct(formData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
  );

  //get all product
  export const getProducts = createAsyncThunk(
    "products/getAll",
    async (_, thunkAPI) =>{
        try {
            return await ProductService.getProducts()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
  );
  

  //delete a product

  export const deleteProduct = createAsyncThunk(
    "products/delete",
    async ({customID}, thunkAPI) =>{
        try {
            return await ProductService.deleteProduct({customID})
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
  );
  

  //get product by id

  export const getProduct = createAsyncThunk(
    "products/getProduct",
    async ({customID}, thunkAPI) =>{
        try {
            return await ProductService.getProduct({customID})
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
  );
  

  //update product

  export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({customID,formData}, thunkAPI) =>{
        try {
            return await ProductService.getProducts({customID},formData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
  );
  
const productSlice = createSlice({
    name:"production",
    initialState,
    reducers:{
        CALC_STORE_VALUE(state, action){
            const product = action.payload;
            const array =[];
            product.map((item)=>{
                const { production, rate } = item;
                const ProductionValue = production * rate;
                return array.push(ProductionValue)
            });
            const totalValue = array.reduce((a,b)=>{
                return a+b
            }, 0)
            state.totalStoreValue = totalValue;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(createProduct.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            console.log(action.payload);
            state.products.push(action.payload);
            toast.success("Product added successfully");
          })
          .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
          .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            console.log(action.payload);
            state.products = action.payload;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
          .addCase(deleteProduct.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Product deleted successfully");
          })
          .addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
          .addCase(getProduct.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.product = action.payload;
          })
          .addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          })
          .addCase(updateProduct.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Product updated successfully");
          })
          .addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
          });
      },

})


export const { CALC_STORE_VALUE } =
  productSlice.actions;

export const selectIsLoading = (state) => state.product.isLoading;
export const selectTotalStoreValue = (state) => state.product.totalStoreValue;
export const selectProduct = (state) => state.product.product;
 

export default productSlice.reducer;
