// import logo from './logo.svg';
 import React from "react";

import Admin from "./component/suman/Admin";
import { Home } from "./component/sonia/home";

import { Image } from "@chakra-ui/react";
// import Login from './component/suman/Login';
//  import Otp from './component/suman/Otp';
// import Register from './component/suman/Register';
import Slider from "react-slick";
import  { Component } from "react";
import MultiItemCarousel from "./component/sonia/Sliderpage";




function App() {
  return (

    <div > 
       {/* <Register/>
       <Otp/>
       <Login/> */}
       <Admin/>
   
      <Home/> 
      

     
     

    </div>
  );
}

export default App;











