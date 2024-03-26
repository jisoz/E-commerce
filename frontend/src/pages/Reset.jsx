import {React} from 'react';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/footer';
import Resetsection from '../components/Reset/reset';
import Navbar from '../components/Navbar/Navbar';
 const Reset =()=>{
    

    return (
        <>
            <Navbar homepage={false}></Navbar>
            <Resetsection></Resetsection>
            <Footer></Footer>
            <Login></Login>
        </>
    );
  
}
export default Reset ;

