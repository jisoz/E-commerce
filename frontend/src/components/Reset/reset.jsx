import {React,useEffect,useState} from 'react';
import {Div,Par,Parg,Span,Input,Inputdiv,P, Btn,Sdiv,Icon} from './reset.style'
import { useNavigate } from 'react-router-dom';
import { useForgotpasswordMutation } from '../../redux/api/usersApiSlice';
import { toast } from 'react-toastify';


 const Resetsection =()=>{
 const [email,setemail]=useState("")
 const navigate = useNavigate()

  const [forgot]=useForgotpasswordMutation();
  const handlesubmit =async(e)=>{
    e.preventDefault();
    try{
        const res= await forgot({email}).unwrap();
        // console.log(res);
        if (res.success) {
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    }catch(error){
      
       console.error(error);
        toast.error('An error occurred');
    }

    
  }
   
    return(
         <>
         
        <Div>
        <Parg>Reset Your Password</Parg>
        <Par>Enter your email and you will receive a link to reset your password</Par>   
        <Inputdiv>
          <P>Email<Span>*</Span> </P>
          <Input type='email' required placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
        </Inputdiv>
         <Btn type='submit' onClick={handlesubmit}>Submit</Btn> <Sdiv onClick={()=>navigate(-1)}> <Icon></Icon> Back to login</Sdiv>
         
        </Div>
       
        
        
        </>

    ) 

  
}
export default Resetsection ;

