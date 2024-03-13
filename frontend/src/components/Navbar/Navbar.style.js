import styled from "styled-components"
export const NavbarContainer = styled.nav`

width: 100%;
height: 80px;
background-color: black;
display: flex;
flex-direction: row;


`
export const LeftContainer = styled.nav`

flex:1%;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
padding: 50px;

`

export const CenterContainer = styled.nav`

flex:59%;
display: flex;
justify-content: flex-end;
background-color: blue;

`
export const RightContainer = styled.nav`

flex:10%;
display: flex;
justify-content: flex-end;
background-color: rebeccapurple;

`
export const Logo = styled.img`
width: 100px;


`