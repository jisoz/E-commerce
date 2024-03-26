import styled from "styled-components";

export const Headsection=styled.div`
 position: absolute;
 top: 360px;
 left: 170px;
width: 490px;
opacity: ${({ isloginclick}) =>isloginclick== 'true' ? '0.34' :'1' };
/* background-color: red; */


`

export const Headnav=styled.nav`
 color: ${({ theme }) => theme.text};
 font-family: Arial, Helvetica, sans-serif;

`
export const Mainnav=styled.nav`
 color:${({ theme }) => theme.text} ;
 font-weight: bold;
 margin-top:20px;
 font-size: 46px;
 font-family: Arial, Helvetica, sans-serif;

`

export const Girlphoto=styled.img`
 
 max-width: 100%;
 /* max-height: 100%; */
width:400px;
height:540px;
border-radius: 20px;
position:absolute;
right:-620px;
top:-200px;
z-index: 1 ;

`

export const Setphoto=styled.img`
 
 max-width: 100%;
 /* max-height: 100%; */
width:400px;
height:540px;
border-radius: 20px;
position:absolute;
right:-380px;
top: 60px;

`

export const Ferphoto=styled.img`
 
 max-width: 100%;
 /* max-height: 100%; */
width:300px;
height:370px;
border-radius: 20px;
position:absolute;
right:340px;
top: 280px;

`

