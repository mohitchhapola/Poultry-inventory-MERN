import { useState } from "react";
import {validateEmail, forgotPassword} from "../../services/authServices"
import { toast } from "react-toastify";
import Loader from "../../components/loader/loader";

function ForgotPass() {

  const [isLoading, setIsloading] = useState(false);
  
    const [email, setEmail] = useState('');
    
    const forgot = async(e)=>{
      e.preventDefault();

      if(!email){
        return toast.error("Please Enter An Email")
      }
      if(!validateEmail(email)){
        return toast.error("Please Enter a Valid Email")
      }

      const userData = {
        email,
      }
      setIsloading(true)
      await forgotPassword(userData)
      setEmail("")
      setIsloading(false)
      console.log("mail sent")
    }
   
  return (
    <div className="flex h-auto bg-slate-400 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {isLoading && 
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
              <Loader /> 
            </div>
          
          }
      <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-24">
      <img
            className="mx-auto mix-blend-color-burn h-auto w-auto"
            src="https://img.freepik.com/premium-vector/chicken-logo-icon-design_775854-566.jpg?w=740"
            alt="Your Company" 
            
          />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset Your Password
        </h2>
        <p className="text-xs">Scroll Down</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={forgot}>
          <div>
            <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Get Reset Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPass