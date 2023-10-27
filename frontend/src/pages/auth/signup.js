// import React, {useState}from 'react'
// import { useDispatch } from 'react-redux';
// import { Link,  useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { loginUser, validateEmail } from '../../services/authServices';
// import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';
// import Loader from '../../components/loader/loader';


// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   password2: "",
// };
// function Signup() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setformData] = useState(initialState);
//   const { name, email, password, password2 } = formData;
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can access the form data here and perform any necessary actions.
//     console.log('Submitted Data:', { username, email, phone, password });
//   };

//   return (
//     <div className="flex h-auto  bg-slate-400 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//     <div className="sm:mx-auto sm:w-full pb-24 sm:max-w-sm">
//     <img
//           className="mx-auto mix-blend-color-burn h-auto  w-auto"
//           src="https://img.freepik.com/premium-vector/chicken-logo-icon-design_775854-566.jpg?w=740"
//           alt="Your Company" 
          
//         />
//       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
//         Create Your Account
//       </h2>
//       <p className='text-xs'>Scroll Down</p>
//     </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name" className="flex text-sm font-medium leading-6 text-gray-900">
//               Username
//             </label>
//             <div className="mt-2">
//               <input
//                 id="name"
//                 name="username"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="email" className="flex text-sm font-medium leading-6 text-gray-900">
//               Email
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="phone" className="flex text-sm font-medium leading-6 text-gray-900">
//               Phone Number
//             </label>
//             <div className="mt-2">
//               <input
//                 id="keshav"
//                 name="keshav"
//                 type="tel"
//                 autoComplete="tel"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
             
//             </div>
//             <div className="mt-2 ">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//               <div className="text-sm ">
//                 <button
//                   className="font-semibold flex mr-0 text-indigo-600 hover:text-indigo-500"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? 'Hide' : 'Show'} Password
//                 </button>
//               </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>

//         <p className="mt-10 text-center text-sm text-gray-500">
//           Already have an account?{' '}
//           <Link
//             to="/"
//             className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//           >
//             Have an Account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
