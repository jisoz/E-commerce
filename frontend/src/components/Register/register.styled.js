import styled ,{ keyframes } from "styled-components";
export const SpanError = styled.span`
color:red;

`
export const Maindiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  height: 600px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.login};
  width: 520px;
  padding: 30px;
  transition: right 0.5s ease-in-out;
`;
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


`

export const Form=styled.form `
 

`

export const Inputdiv=styled.div `


  position: relative;

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
  font-size: 16px;
  &:focus {
    outline: none; 
    caret-color: #d49e35;
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

export const Iconcheck=styled.div`
position: absolute;
top: 50px;
right:18px;
color:green;
font-size: 22px;

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