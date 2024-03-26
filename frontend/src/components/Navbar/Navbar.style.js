import styled from "styled-components"
export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
/* background-color: ${({ scrolled ,theme }) => (scrolled == 'true'  ? theme.nav : 'transparent')}; */
background-color: ${({ scrolled, theme, homepage }) => {
    if (homepage && scrolled=="false") {
      return "transparent"; 
    } else if (homepage && scrolled=="true") {
      return theme.nav;
    } else if(!homepage && scrolled=="false") {
       return "black"
    } else if (!homepage && scrolled=="true") {
       return theme.nav;
    }
  }};
display: flex;
position: fixed;
flex-direction: row;
top: 0;
left: 0;
padding-top:20px;
z-index: 1000;
opacity: ${({ isloginclick}) =>isloginclick== 'true' ? '0.34' :'1' };


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
  color:${({ theme }) => theme.text} ;
`;

export const StyledLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text  };
  font-weight: bold;
  font-size: 17px;
  text-decoration: none;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.text  };
    transition: width 0.5s ease; 
  }

  &:hover::after {
    width: 100%;
  }
`;


export const Btnup = styled.button`

background-color: gray;
width: 50px;
height:50px;
border-radius: 50%;
border: none;
position: fixed;
bottom: 0;
right: 0;
display: ${({scrolled})=>(scrolled == 'true' ? "block" : "none")};
margin-right:30px;
margin-bottom: 30px;
transition: opacity 0.9s ease;
cursor: pointer;


` 