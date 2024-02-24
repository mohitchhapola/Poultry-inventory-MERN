// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ForgotPass from './pages/auth/forgotpass';
import ResetPass from './pages/auth/resetpass';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './pages/dashboard/dashboard';
import Layout from './components/layout/layout';
import Loader from './components/loader/loader';

import axios from "axios";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from 'react-redux';
import { getLoginStatus } from './services/authServices';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
import ProductForm from './components/product form/ProductForm';
import ProductUpdate from './components/product form/ProductUpdate';
axios.defaults.withCredentials=true;



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/forgot_password",
    element: <ForgotPass></ForgotPass>,
  },
  {
    path: "/resetpassword/:resetToken",
    element: <ResetPass></ResetPass>,
  },
  {
    path: "/product",
    element: <Sidebar>
    <Layout>
      <ProductForm />
      </Layout>
  </Sidebar>,
  },
  {
    path:"/dashboard",
    element:
    <Sidebar>
      <Layout>
        <Dashboard />
        </Layout>
    </Sidebar>
  
  },
  {
    path:"/productupdate/:customID",
    element:
    <Sidebar>
      <Layout>
        <ProductUpdate />
        </Layout>
    </Sidebar>
  
  }
]);
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    async function loginStatus(){
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status))
    }
    loginStatus()
  },[dispatch])
  return (
  <>
    <div className="App ">
    <ToastContainer />
      <RouterProvider router={router} />
    </div>
  </>
  );
}

export default App;
