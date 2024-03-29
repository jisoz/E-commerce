import { useSelector } from 'react-redux';
import {Container} from '../container.styled';
import {Headsection,Headnav,Mainnav,Girlphoto,Setphoto,Ferphoto} from "./hero.styled";

const Hero=()=>{
    const isloginclick = useSelector((state)=>state.loginclick.isLoginclick);       
    return (
        <>
        <Container width="50vw" height="170vh" position="absolute" top="0" isloginclick={isloginclick.toString()}  ></Container>
        <Headsection  isloginclick={isloginclick.toString()}>
        <Headnav>Beoplay HX</Headnav>
        <Mainnav>Playful, elegant and customizable.</Mainnav>
        <Girlphoto src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Headphone_Moment_2022_Beoplay_HX_Digital_English_0001_CRM_1.png?v=1697808905&amp;width=768"/>
        <Setphoto src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Headphone_Moment_2022_Beoplay_HX_0004.png?pad_color=fff&v=1697808862&width=165"></Setphoto>
        <Ferphoto src="https://theme-next-brandstore.myshopify.com/cdn/shop/files/Headphone_Moment_2022_Beoplay_HX_Digital_English_0001_CRM.png?pad_color=fff&v=1697808791&width=165"></Ferphoto>
        </Headsection>
        
        
        </>
    )
}


export default Hero ;
 