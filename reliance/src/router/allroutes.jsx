import React from "react";
import { Route, Routes } from "react-router-dom";
import  Home  from "../component/sonia/home";
import Productdetail from "../component/sonia/Productdetail";
import Login from "../component/suman/Login";
import Admin from "../component/suman/Admin";
import Cart from "../component/sanket/cart/cart";
import Register from "../component/suman/Register";
import Otp from "../component/suman/Otp";
import AdminPage from "../component/suman/AdminPage";
import Mobiles from "../component/mitali/allRoute/mobiles/mobiles";
import Makeup from "../component/mitali/allRoute/makeup/makeup";
import { Iron } from "../component/mitali/allRoute/Iron/Iron";
import { Juicers } from "../component/mitali/allRoute/juicers/juicers";
import { Computers } from "../component/mitali/allRoute/computers/computers";
import { Camaras } from "../component/mitali/allRoute/camaras/camaras";


import Checkout from "../component/sanket/checkout/checkout";



import UserDetails from '../component/suman/UserDetails';
import Pagenotfound from '../component/sonia/Pagenotfound';
import Wish from "../component/mitali/allRoute/wish/wish";
import Payment from "../component/payment";
import Private from "../component/Private";




function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/single' element={<Productdetail />}></Route>
        <Route path='/checkout' element={<Private><Checkout /></Private>} />
        <Route path='/payment' element={<Private><Payment /></Private>}></Route>

 <Route path='/registration' element={<Register/>}></Route>
            <Route path='/otp' element={<Otp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/adminpage' element={<AdminPage/>}></Route>
            <Route path="/userdetails" element={<UserDetails/>}></Route>

            <Route path='/cart' element={<Cart/>}></Route>
          
          
            <Route path="/wish" element={<Wish/>}/>
            <Route path='/mobiles' element={<Mobiles/>}/>
            <Route path='/Makeup' element= {<Makeup/>} />
            <Route path='/iron' element={<Iron/>}/>
            <Route path='/juicers' element={<Juicers/>}/>
            <Route path='/computers' element={<Computers/>}/> 
            <Route path='cameras' element={<Camaras/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
        </Routes>


    </div>
  );
}

export default Allroutes;
