import React, { useEffect } from 'react'
import { getLoginStatus } from '../services/authServices'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { SET_LOGIN } from '../redux/features/auth/authSlice'


function RedirectLogoutUser(path) {
 const navigate = useNavigate()
 const dispatch = useDispatch()

 useEffect(()=>{
    const redirectlogoutuser = async()=>{
        const isLoggedIn = await getLoginStatus()
        dispatch(SET_LOGIN(isLoggedIn));


        if(!isLoggedIn){
            toast.info("Session Expired, Please Login");
            navigate(path);
            return;
        }
    }
    redirectlogoutuser();
 },[navigate,path,dispatch])
}

export default RedirectLogoutUser;