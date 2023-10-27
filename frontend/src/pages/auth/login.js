import React, {useState}from 'react'
import { useDispatch } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, validateEmail } from '../../services/authServices';
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/loader';

const initialState ={
  email:"",
  password:""
};
function Login ()  {
  const [isLoading, setIsloading] = useState(false);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  // const [spassword, setsPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData,setformData] = useState(initialState)
  const {email,password} = formData;
  
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setformData({...formData,[name]:value})
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async(e) =>{
    e.preventDefault();


    if(!email || !password){
      return toast.error("All fields are Required")
    }
    if(!validateEmail(email)){
      return   toast.error('Please Enter a valid Email')
    }

    const userData = {
      "email":email ,
      "password":password
    };
    console.log(userData)
    setIsloading(true);
    try {
      const data = await loginUser(userData); 
      console.log(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.username));
       navigate("/dashboard");
       setIsloading(false)
    } catch (error) {
      setIsloading(false)
    }
  }
 
  return (
    <>
    <div className="flex min-h-full bg-slate-400 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {isLoading && 
            
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
              <Loader /> 
            </div>
          
          }
        <div className="sm:mx-auto pb-24 pb sm:w-full sm:max-w-sm">
          <img
            className="mx-auto mix-blend-color-burn h-auto w-auto"
            src="https://img.freepik.com/premium-vector/chicken-logo-icon-design_775854-566.jpg?w=740"
            alt="Your Company" 
            
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9  tracking-tight text-gray-900">
           Log in to your account
          </h2>
          <p className='text-xs'>Scroll Down</p>
          
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  action="#" method="POST">
            <div id='form-1'>
              <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
              <input
              type="email"
              placeholder="Email"
              
              name="email"
              value={email}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot_password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
              <input
              name='password'
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleInputChange}
        // onChange={(e) => setsPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
       <div className="text-sm flex">
       <button type='button' className="font-semibold  text-indigo-600 hover:text-indigo-500" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
                </div>
              </div>
              
            </div>

            <div>
              <button
                type="submit"
                onClick={login}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              // to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
