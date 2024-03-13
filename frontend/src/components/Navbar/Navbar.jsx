import React from 'react';
import {NavbarContainer,LeftContainer,RightContainer,CenterContainer,Logo} from './Navbar.style'
import { Link } from 'react-router-dom';
 const Navbar =()=>{
    return(
        <NavbarContainer>
         <LeftContainer>
         <Link to="/"><Logo src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Logo_nxt_transparant_header.svg?pad_color=fff&v=1688037844&width=350"></Logo></Link>
         </LeftContainer>
         <CenterContainer>

         </CenterContainer>
         <RightContainer>

         </RightContainer>
        </NavbarContainer>

    ) 

  
}
export default Navbar ;

