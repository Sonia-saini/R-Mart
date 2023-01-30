
import { Button ,Input} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";










import { Link } from "react-router-dom";

const Navbar = () => {
  const x=useSelector((state)=>state.cart)
  const  items =JSON.parse(localStorage.getItem("cart-item"))||[]
const username=JSON.parse(localStorage.getItem("signin"))||""
const logout=()=>{
  localStorage.removeItem("signin")
  window.location.reload()
}
  return (
    <div>



      <nav className="navbar navbar-expand-lg navbar-blue shadow-sm" style= {{backgroundColor :'rgb(228,37,41)'}}>
      
        <div className="container">
       
          <a className="navbar-brand fw-bold fs-4" href="/">
            <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="home" width={"70%"}/>

          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              <Input
                type='search'
                placeholder='Find your favorite products'
                aria-label='Search'
                bgColor={"white"}
                borderRadius="2xl"
                width={{sm:"200px",md:"300px",lg:"400px"}}
              />
            </ul>

            <div className='buttons'>
              {
              username === "" ?  <Link to='/registration'>
                <a className='btn btn-outline-dark'>
                  <i className='fa fa-sign-in me-2'></i>Login
                </a>
              </Link>:`Hey ${username}`
              }
              <Link to='/cart'>
                <a className='btn btn-outline-dark ms-4'>
                  <i className='fa fa-shopping-cart me-2'></i>Cart (
                  {items.length})
                </a>
              </Link>
              {username?<a className='btn btn-outline-dark ms-4'>
                 <a onClick={logout}>LOGOUT</a> 
                 
                 
                </a>:""}
          
          
          </div>
        </div>
        </div>
      </nav>
     
    </div>
  );
};

export default Navbar;
