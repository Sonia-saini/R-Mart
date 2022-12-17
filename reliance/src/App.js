
import "./App.css";
// import Cart from "./component/sanket/cart/cart";
// import Makeup from './component/mitali/allRoute/makeup/makeup'
// import Iron from './component/mitali/allRoute/mobiles/mobiles'
// import AllRoutes from './component/mitali/allRoute/allRoutes'


// import logo from './logo.svg';
 import React from "react"
// import Admin from "./component/suman/Admin";
import Admin from "./component/suman/Admin";



import Allroutes from "./router/allroutes";
import { Home } from "./component/sonia/home";
import Navbar from "./component/Saurabh/Navbar";





// import Login from './component/suman/Login';
//   import Otp from './component/suman/Otp';
//  import Register from './component/suman/Register';
import AdminPage from "./component/suman/AdminPage";
//  import {Home} from "./component/sonia/home"

function App() {
  return (

    <div > 
   <h1>Hi group</h1>
       {/* <Register/>
       <Otp/>
       <Login/> 
       <Admin/> */}
       <Allroutes/>
       {/* <Home/> */}
    </div>
  );
}

export default App;










