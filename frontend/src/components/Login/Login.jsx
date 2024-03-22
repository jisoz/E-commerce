import React, { useEffect, useState } from 'react'

import { Maindiv,Parg ,Par,Form,Input,Inputdiv,P,Span,Sign,BtnSign,Icon,Maindivtwo,Ifadmin,IfadminBtn,Ifadminp, Icontwo,Divreg,StyledLink} from './login.styled'
import { FaTimes ,FaUserCircle} from 'react-icons/fa'
import { useDispatch , useSelector } from 'react-redux'
import { togglelogin } from '../../redux/features/FormloginSlice';

import { setCredentials ,logout } from '../../redux/features/auth/authSlice';
import { useLoginMutation, useLogoutMutation } from '../../redux/api/usersApiSlice';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
const [email ,setemail] = useState("")
const [password ,setpassword] = useState("")
const [isloged ,setisloged] = useState(false)
const isloginclick = useSelector((state)=>state.loginclick.isLoginclick);
const userInfo = useSelector((state)=>state.auth.userInfo);
const dispatch = useDispatch();
const navigate = useNavigate();
const search =useLocation()
const sp =new URLSearchParams(search);
const redirect = sp.get('redirect') || '/';

const [login , {isLoading}] = useLoginMutation()

const [logoutapicall] = useLogoutMutation()
useEffect(()=>{
  if (userInfo){
    dispatch(togglelogin());
    setisloged(true)
  }else {
    setisloged(false)
  }
} , [userInfo] )

const handleSubmit =async(e)=>{
  e.preventDefault();
  
  
  
  try {
    const res = await login({ email, password }).unwrap();
    dispatch(setCredentials({ ...res }));
    toast.success('Login successful');
  } catch (error) {
    if (!email || !password) {
      
      toast.error('Email and password are required');
   
    }else if (email && password) {

      toast.error('Login failed. Please check your credentials.');
    }
  
  }
    
 
}

const handlelogout = async() => {
   try{
      await logoutapicall().unwrap();
      dispatch(logout());
      toast.success('Logout successful');
   }catch(error){
    console.log(error.message)
   }
}
return (
     <>
    <Maindiv isloginformopen={isloginclick.toString()} isloged={isloged.toString()}>
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
        <Par> 
         <Divreg> New customer ?</Divreg>
          <StyledLink
                to="/register"
              >
               Register
              </StyledLink></Par>
        <Sign>
          <BtnSign disabled={isLoading } type='submit' onClick={handleSubmit}>{isLoading    ? "Signing In..." : "Sign In"}</BtnSign>
        </Sign>
      </Form>
      <Icon onClick={()=>dispatch(togglelogin())}>
        <FaTimes />
      </Icon>
    </Maindiv>



    <Maindivtwo isloginformopen={isloginclick.toString()} isloged={isloged.toString()}>
  {userInfo ? (
    userInfo.isAdmin ? (
      <Ifadmin>
        Welcome Boss {userInfo.username}
        <IfadminBtn onClick={handlelogout}>Logout</IfadminBtn>
      </Ifadmin>
     
    ) : (
      <Ifadmin>
        <Icon  onClick={()=>dispatch(togglelogin())}> <FaTimes /></Icon>
        <Ifadminp> <Icontwo><FaUserCircle></FaUserCircle></Icontwo> Welcome Back  {userInfo.username}</Ifadminp>
        <IfadminBtn>Profile</IfadminBtn>
        <IfadminBtn onClick={handlelogout}>Logout</IfadminBtn>
       
      </Ifadmin>
    )
  ) : (
    <div></div> // or any other empty element you prefer
  )}
</Maindivtwo>
     
      
      </>
  )
;

  }


export default Login