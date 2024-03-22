import React, { useState } from 'react'
import { Container } from '../container.styled'
import { Maindiv,Parg ,Par,Form,Input,Inputdiv,P,Span,Sign,BtnSign,SpanError,Iconcheck} from "./register.styled"
import { useDispatch , useSelector } from 'react-redux'


import { setCredentials } from '../../redux/features/auth/authSlice';
import {  useRegisterMutation } from '../../redux/api/usersApiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCheck } from 'react-icons/fa';

const Register = () => {
    const [email ,setemail] = useState("")
    const [emailError, setEmailError] = useState("");
    const [password ,setpassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [username ,setname] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [register , {isLoading}]= useRegisterMutation()
    const userInfo = useSelector((state)=>state.auth.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const search =useLocation()
    // const sp =new URLSearchParams(search);
    // const redirect = sp.get('redirect') || '/';
    const validateEmail = (email) => {
 
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const validatePassword = (password) => {
     
      return password.length >= 6;
    };
    
    const validateUsername = (username) => {
      
      return username.length >= 3;
    };

    const handleEmailChange = (e) => {
      setemail(e.target.value);
      if (!validateEmail(e.target.value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    };

    const handlePasswordChange = (e) => {
      setpassword(e.target.value);
      if (!validatePassword(e.target.value)) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError("");
      }
    };
    
    const handleUsernameChange = (e) => {
      setname(e.target.value);
      if (!validateUsername(e.target.value)) {
        setUsernameError("Username must be at least 3 characters");
      } else {
        setUsernameError("");
      }
    };
    const handleSubmit =async (e) => {
    e.preventDefault();
     if (!validateEmail(email) || !validatePassword(password) || !validateUsername(username)) {
    toast.error("Please correct the form errors");
    return;
  }else{
    try {
      const res=await register({username , email, password}).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/')
      toast.success('User Sucessfully registered');
    }catch (e){
      toast.error(e.data.message);
    }



    }
  }
  return (
    <>
    <Container width="100vw" height="100vh" position="absolute" top="0" ></Container>
        <Maindiv >
    
        <Parg>Don't Have an account yet?</Parg>
        <Par>Create Account</Par>

        <Form >
          
            <Inputdiv>
            <P>Name<Span>*</Span> </P>
            <Input type='text' required value={username}  onChange={handleUsernameChange}/>
            {usernameError && <SpanError>{usernameError}</SpanError>}
            {username && usernameError =="" && <Iconcheck><FaCheck></FaCheck></Iconcheck>}
            </Inputdiv>
            <Inputdiv>
            <P>Email<Span>*</Span> </P>
            <Input type='email' required value={email}  onChange={handleEmailChange}/>
            {emailError && <SpanError>{emailError}</SpanError>}
            { email && emailError =="" && <Iconcheck><FaCheck></FaCheck></Iconcheck>}
            </Inputdiv>
            <Inputdiv>
            <P>Password<Span>*</Span></P>
            <Input type='password' required value={password} onChange={handlePasswordChange} />
            {passwordError && <SpanError>{passwordError}</SpanError>}
            </Inputdiv>
            <Sign>
            <BtnSign disabled={isLoading} type='submit' onClick={handleSubmit}>{isLoading ? "Registering..." :"Register" }</BtnSign>
            </Sign>
        </Form>
        
        </Maindiv>
        </>
  );
};





export default Register;
