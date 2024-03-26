import {React,useEffect,useState} from 'react';
import {Div,Par,Parg,Span,Input,Inputdiv,P, Btn,Sdiv,Icon} from './reset.style'
import { useNavigate } from 'react-router-dom';

 const Resetsection =()=>{

    const navigate = useNavigate()

  

   
    return(
         <>
         
        <Div>
        <Parg>Reset Your Password</Parg>
        <Par>Enter your email and you will receive a link to reset your password</Par>   
        <Inputdiv>
          <P>Email<Span>*</Span> </P>
          <Input type='email' required placeholder='Email' />
        </Inputdiv>
         <Btn>Submit</Btn> <Sdiv onClick={()=>navigate(-1)}> <Icon></Icon> Back to login</Sdiv>
         
        </Div>
       
        
        
        </>

    ) 

  
}
export default Resetsection ;

