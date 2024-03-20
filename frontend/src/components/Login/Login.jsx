import React, { useEffect, useState } from 'react'

import { Maindiv,Parg ,Par,Form,Input,Inputdiv,P,Span,Sign,BtnSign,Icon} from './login.styled'
import { FaTimes } from 'react-icons/fa'
import { useDispatch , useSelector } from 'react-redux'
import { togglelogin } from '../../redux/features/FormloginSlice';

import { setCredentials } from '../../redux/features/auth/authSlice';
import { useLoginMutation } from '../../redux/api/usersApiSlice';
import { useLocation, useNavigate } from 'react-router-dom';


function Login() {
const [email ,setemail] = useState("")
const [password ,setpassword] = useState("")
const isloginclick = useSelector((state)=>state.loginclick.isLoginclick);
const userInfo = useSelector((state)=>state.auth.userInfo);
const dispatch = useDispatch();
const navigate = useNavigate();
const search =useLocation()
const sp =new URLSearchParams(search);
const redirect = sp.get('redirect') || '/';

const [login , {isLoading}] = useLoginMutation()
useEffect(()=>{
  if (userInfo){
    dispatch(togglelogin());
  }
} , [userInfo] )

const handleSubmit =async(e)=>{
  e.preventDefault();
  try{
    const res = await login({email,password}).unwrap();
    console.log(res);
    dispatch(setCredentials({...res}))

  }catch(error){
    console.log(error.message)
  }
 
}



return (
 
    <Maindiv isloginformopen={isloginclick.toString()}>
      <Parg>Login</Parg>
      <Par>A faster ordering process and all your orders in one place</Par>

      <Form >
        <Inputdiv>
          <P>Email<Span>*</Span> </P>
          <Input type='email' required value={email}  onChange={(e)=>setemail(e.target.value)}/>
        </Inputdiv>
        <Inputdiv>
          <P>Password<Span>*</Span></P>
          <Input type='password' required value={password} onChange={(e)=>setpassword(e.target.value)} />
        </Inputdiv>
        <Sign>
          <BtnSign disabled={isLoading} type='submit' onClick={handleSubmit}>{isLoading ? "Signing In..." : "Sign In"}</BtnSign>
        </Sign>
      </Form>
      <Icon onClick={()=>dispatch(togglelogin())}>
        <FaTimes />
      </Icon>
    </Maindiv>
  )
;

  }


export default Login