import React, { useState } from 'react'
import { resetPassword } from '../../services/authServices'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/loader'


const initialState = {
  password:"",
  password2:"",
}
function ResetPass() {

  const [isLoading,setIsloading] = useState(false)

  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const reset = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast.error("Passwords must be at least 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
    
    console.log("clicked");
    const userData = {
      password,
      password2,
    };
    setIsloading(true);
    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
      setIsloading(false); // Set loading to false after success
    } catch (error) {
      console.log(error.message);
      setIsloading(false); // Set loading to false on error as well
    }
  };
  
  return (
    <div className="flex h-auto  bg-slate-400 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {isLoading && 
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
              <Loader /> 
            </div>
          
          }
      <div className="sm:mx-auto sm:w-full pb-24 sm:max-w-sm">
      <img
            className="mx-auto mix-blend-color-burn h-auto  w-auto"
            src="https://img.freepik.com/premium-vector/chicken-logo-icon-design_775854-566.jpg?w=740"
            alt="Your Company" 
            
          />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Enter Your New Password
        </h2>
        <p className='text-xs'>Scroll Down</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={reset}>
          <div>
            <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
              New Password
            </label>
            <div className="mt-2">
              <input
                id="password-1"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={password}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>
          <div>
            <label htmlFor="password" className="flex text-sm font-medium leading-6 text-gray-900">
              Re-Enter New Password
            </label>
            <div className="mt-2">
              <input
                id="password2"
                name="password2"
                type="text"
                autoComplete="password"
                required
                value={password2}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPass