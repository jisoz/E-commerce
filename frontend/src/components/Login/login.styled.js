import styled ,{ keyframes } from "styled-components";
import { Link } from 'react-router-dom';

export const Divreg = styled.div`


`;
export  const StyledLink = styled(Link)`
 
  color: #efae45;
  font-weight: bold;
  margin-left:5px;
 
`;

export  const StyledLinktwo = styled(Link)`
 
  color: #efae45;
  
  margin-left:200px;
 
`;


export const Maindiv = styled.div`
   position: fixed;
   height: 600px;
   z-index: 1000;
  /* left: -100%; Start off-screen */
   right: ${({ isloginformopen , isloged  }) => (isloginformopen =="true" && isloged =="false" ? '0' : '-100%')};
  top: 0;
  background-color: ${({theme})=>theme.login};
  width: 520px;
  padding: 30px;
  transition: right 0.3s ease-in-out;
 



`
export const Maindivtwo = styled.div`
   position: fixed;
   height: 200px;
   z-index: 1000;
  /* left: -100%; Start off-screen */
   right: ${({ isloginformopen , isloged  }) => (isloginformopen =="false" && isloged =="true" ? '0' : '-100%')};
  top: 0;
  margin-top: 100px;
  background-color: #2b2626;
  width: 200px;
  padding: 30px;
  transition: right 0.3s ease-in-out;
  border-radius: 20px;
 



`
export const Ifadmin  = styled.div`
color:white;
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
  
 ;
`
export const Ifadminp  = styled.p`
color:white;
display: flex;
justify-content: center;
align-items: center;
 ;
`

export const IfadminBtn  = styled.button`
color:white;
background-color: #efae45;
border-radius:20px;
border: none;
padding: 15px ;
margin-left: 12px;
cursor: pointer;
font-size: 17px;
margin-bottom: 10px;
width: 90px;
transition: transform 0.3s; 
&:hover{
    font-weight: bold;
    transform: translateY(-5px);   

}

`
export const Parg=styled.div `

color:${({theme})=>theme.text};
font-size : 30px;
margin-top: 30px;


`

export const Par=styled.p `

color:${({theme})=>theme.text};
margin-top: 15px;
font-size: 15px;
padding-bottom: 40px;
display: flex;


`

export const Form=styled.form `
 

`

export const Inputdiv=styled.div `




`

export const P = styled.p`
color: ${({theme})=>theme.text};

`

export const Input=styled.input `

  width: 95%;
  padding: 13px;
  margin-bottom: 10px;
  height:  24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
  caret-color:#efae45;
  border-color: #efae45;
  color: black;
  &:focus {
    outline: none; 
  }

`

export const Span =styled.span`
color: #efae45;

`

export const  Sign=styled.div`

display: flex;
align-items: center;
justify-content: center;

`


export const  BtnSign=styled.button`

background-color: #efae45;
border-radius:0;
color: white;
border: none;
padding: 15px ;
cursor: pointer;
font-size: 17px;
margin-top: 30px;
width: 130px;
transition: transform 0.3s; 
&:hover{
    font-weight: bold;
    transform: translateY(-5px);   

}

`



export const Icon = styled.div`

color:white;
font-size:23px;
cursor: pointer;
position: absolute;
top: 0;
right: 0;
margin-top: 20px;
margin-right: 25px;
transition: transform 0.3s ease;

&:hover {
    transform: rotate(60deg);
    color: #efae45
  }

`

export const Icontwo = styled.span`

color:white;
font-size:40px;
margin-right: 20px;


`