import {useDispatch, useSelector} from "react-redux"
import {SET_LOGIN, SET_NAME, selectName} from "../../redux/features/auth/authSlice"
import { logoutUser } from "../../services/authServices"
import { Link, useNavigate } from "react-router-dom"
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName)
  const logOut = async()=>{
    //logout function here
      await logoutUser()
      dispatch(SET_NAME(''));
      await dispatch(SET_LOGIN(false))
      navigate("/")
    }
    
  
    
  return (
    <div className="max-w-full mx-auto px-3 lg:px-16 pb-4   ">
    <div className="flex justify-between items-center">
      <h3>
        Welcome
        <span className="text-red-500 lg:text-lg font-medium"> {name} </span>
      </h3>
      <div className="space-x-4 lg:flex hidden">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product">Add</Link>
      </div>
      <button onClick={logOut} className="lg:text-xl text-red-600 font-normal py-2 px-2 m-0 mr-5 border border-transparent rounded-md cursor-pointer flex justify-center items-center transition-all duration-300">Logout</button>
    </div>
    <hr />
  </div>
  )
}

export default Header