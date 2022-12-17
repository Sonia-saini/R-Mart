import "./App.css";
 import React from "react"
import Allroutes from "./router/allroutes";
import AdminPage from "./component/suman/AdminPage";


function App() {
  return (
    <div > 
       <Allroutes/>
       <AdminPage/>
    </div>
  );
}

export default App;

