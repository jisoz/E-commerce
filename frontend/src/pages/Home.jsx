import {React} from 'react';
import Navbar  from '../components/Navbar/Navbar';
import Heros from '../components/Hero/Heros';
import Login from '../components/Login/Login';

const Home = ()=>{
    return(<>
      
        <Navbar></Navbar>
         <Heros></Heros>
         <Login></Login>

        </>
    )
}
export default Home;