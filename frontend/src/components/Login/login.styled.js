import styled ,{ keyframes } from "styled-components";

export const Maindiv = styled.div`
   position: fixed;
   height: 600px;
   z-index: 1000;
  /* left: -100%; Start off-screen */
   right: ${({ isloginformopen }) => (isloginformopen =="true" ? '0' : '-100%')};
  top: 0;
  background-color: ${({theme})=>theme.login};
  width: 520px;
  padding: 30px;
  transition: right 0.5s ease-in-out;
 



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
