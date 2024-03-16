import styled from "styled-components"
export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
display: flex;
position: fixed;
flex-direction: row;
padding-top:20px;
z-index: 1000;


`
export const LeftContainer = styled.nav`

flex:1%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
padding: 20px;

`

export const CenterContainer = styled.nav`

flex:59%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: blue; */

`
export const RightContainer = styled.nav`

flex:10%;
display: flex;
justify-content: flex-end;
/* background-color: rebeccapurple; */
padding-right: 25px;

`
export const Logo = styled.img`
width: 80px;


`
export const Ul = styled.ul`
list-style: none;
padding: 0;
align-items: center;
display: flex;


`
export const Li = styled.li`
padding-left: 40px;
font-weight: bold;




`
 export const Icon = styled.div`
  display: inline-flex;
  padding-left: 13px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${props => props.size || '18px'};
  color: ${props => props.color || 'black'};
`;

export const StyledLink = styled.a`
  position: relative;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.5s ease; 
  }

  &:hover::after {
    width: 100%;
  }
`;