import React from 'react';
import {NavbarContainer,LeftContainer,RightContainer,CenterContainer,Logo,Ul,Li,Icon,StyledLink} from './Navbar.style'
import { Link } from 'react-router-dom';
import { FaSun, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
 const Navbar =()=>{
    return(
        <NavbarContainer>
         <LeftContainer>
         <Link to="/"><Logo src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Logo_nxt_transparant_header.svg?pad_color=fff&v=1688037844&width=350"></Logo></Link>
         </LeftContainer>
         <CenterContainer>
         <Ul>
            <Li> <StyledLink>Televisions</StyledLink></Li>
            <Li><StyledLink>Speakers</StyledLink></Li>
            <Li><StyledLink>Headphones</StyledLink></Li>
            <Li><StyledLink>Accessories</StyledLink></Li>
          </Ul>
         </CenterContainer>
         <RightContainer>
         <Icon>
         <FaSun></FaSun>
         </Icon>
         <Icon>
         <FaSearch></FaSearch>
        
         </Icon>
         <Icon>
         <FaUser></FaUser>
         </Icon>
         <Icon>
         <FaShoppingCart></FaShoppingCart>
       
         </Icon>
       
         
         </RightContainer>
        </NavbarContainer>

    ) 

  
}
export default Navbar ;

