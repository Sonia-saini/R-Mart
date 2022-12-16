

import './App.css';
import Makeup from './component/mitali/allRoute/makeup/makeup'
import Iron from './component/mitali/allRoute/mobiles/mobiles'
import AllRoutes from './component/mitali/allRoute/allRoutes'


// import logo from './logo.svg';
 import React from "react";

import Admin from "./component/suman/Admin";
import { Home } from "./component/sonia/home";

import { Image } from "@chakra-ui/react";
// import Login from './component/suman/Login';
//  import Otp from './component/suman/Otp';
// import Register from './component/suman/Register';






function App() {
  return (

    <div > 
       {/* <Register/>
       <Otp/>
       <Login/> */}
       <Admin/>
     <AllRoutes/>
      <Home/> 
      

     
     

    </div>
  );
}

export default App;












