import {React,useEffect,useState} from 'react';
import {NavbarContainer,LeftContainer,RightContainer,CenterContainer,Logo,Ul,Li,Icon,StyledLink,Btnup} from './Navbar.style'
import { Link } from 'react-router-dom';
import { FaSun, FaUser, FaSearch, FaShoppingCart,FaArrowUp, FaMoon } from 'react-icons/fa';
import {useDispatch, useSelector } from 'react-redux';
import { toggleDarmode } from '../../redux/features/darkmodeSlice';
 const Navbar =()=>{
    const [scrolled, setScrolled] = useState(false);
    const [btnappear , setbtnappear] = useState(false);
    const isDarkMode = useSelector(state => state.darkmode.isDarkMode);
    const dispatch = useDispatch();
    const scrollchanges=()=>{
        if (window.scrollY >=20){
            setScrolled(true);
        }else {
            setScrolled(false);
        }

        if (window.scrollY>=100){
            setbtnappear(true);
        }else{
            setbtnappear(false);
        }
    }
    window.addEventListener('scroll',scrollchanges)
    

    const GoUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
          });
    }

   
    return(
        
        <NavbarContainer scrolled = {scrolled.toString()}>
         <LeftContainer>
         <Link to="/">
            {isDarkMode ? <Logo src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Theme_Next_-_Logo_DEF.svg?pad_color=fff&v=1688037757&width=350 "></Logo> :             <Logo src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Logo_nxt_transparant_header.svg?pad_color=fff&v=1688037844&width=350"></Logo>}

            
        </Link>
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
         <Icon onClick={() => dispatch(toggleDarmode())}>
         {isDarkMode ? <FaMoon/> : <FaSun></FaSun> }
         
         </Icon>
         <Icon>
         <FaSearch ></FaSearch>
        
         </Icon>
         <Icon>
         <FaUser></FaUser>
         </Icon>
         <Icon>
         <FaShoppingCart ></FaShoppingCart>
       
         </Icon>
       
         
         </RightContainer>

         <Btnup scrolled={btnappear.toString()} onClick={GoUp}>
         <FaArrowUp style={{color: 'white'} }></FaArrowUp>
         </Btnup>
        </NavbarContainer>

    ) 

  
}
export default Navbar ;

