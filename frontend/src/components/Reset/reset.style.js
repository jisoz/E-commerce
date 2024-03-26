import styled from "styled-components"

import { FaChevronLeft } from "react-icons/fa"

export const Icon = styled(FaChevronLeft)`
color:black;
margin-left: 20px;

`


export const Div = styled.div`

margin-top: 100px;
padding-left: 300px;
padding-top: 100px;

`


export const Parg = styled.div`
color:white;
font-size: 22px;
margin-bottom:30px;




`
export const Par = styled.div`
color:white;
font-size: 13px;
margin-bottom:19px;


`
export const Inputdiv=styled.div `




`

export const P = styled.p`
color: ${({theme})=>theme.text};
font-size: 16px;

`

export const Input=styled.input `

  width: 70%;
  padding: 13px;
  margin-bottom: 10px;
  height:  28px;
  border: 1px solid #ccc;
  border-radius: 5px; 
  background-color: transparent;
  caret-color:#efae45;
  color: white;
  &:focus {
    outline: none; 
    border-color: #efae45;
  }

`

export const Span =styled.span`
color: #efae45;

`
export const  Btn=styled.button`

background-color: black;
border-radius:30px;
color: white;
font-weight: bold;
border: none;
padding: 15px ;
cursor: pointer;
font-size: 17px;
margin-top: 30px;
width: 150px;
transition: transform 0.3s; 
&:hover{
    font-weight: bold;
    transform: translateY(-5px);   

}
`
export const Sdiv=styled.span`

font-size: 17px;
font-weight: bold;
cursor: pointer;
&:hover{
text-decoration:underline;
}
`