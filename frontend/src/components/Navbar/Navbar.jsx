import {React,useEffect,useState} from 'react';
import {NavbarContainer,LeftContainer,RightContainer,CenterContainer,Logo,Ul,Li,Icon,StyledLink} from './Navbar.style'
import { Link } from 'react-router-dom';
import { FaSun, FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
 const Navbar =()=>{
    const [scrolled, setScrolled] = useState(false);
    

    const changebackgroud=()=>{
        if (window.scrollY >=20){
            setScrolled(true);
        }else {
            setScrolled(false);
        }
    }
    window.addEventListener('scroll',changebackgroud)
    

    return(
        
        <NavbarContainer scrolled = {scrolled}>
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
         <FaSun  style={{ color: 'white' }}></FaSun>
         </Icon>
         <Icon>
         <FaSearch  style={{ color: 'white' }}></FaSearch>
        
         </Icon>
         <Icon>
         <FaUser  style={{ color: 'white' }}></FaUser>
         </Icon>
         <Icon>
         <FaShoppingCart  style={{ color: 'white' }}></FaShoppingCart>
       
         </Icon>
       
         
         </RightContainer>
        </NavbarContainer>

    ) 

  
}
export default Navbar ;

