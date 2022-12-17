import React from 'react'
import {useSelector} from "react-redux"
import { AiOutlineLineHeight } from 'react-icons/ai';



import {Link} from "react-router-dom";


const Navbar = () => {
const {items}=useSelector((state)=>state.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-blue shadow-sm" style= {{backgroundColor :'red'}}>
        <div className="container">
       
          <a className="navbar-brand fw-bold fs-4" href="#">
            <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="home" />
          </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <input  type="search" placeholder="Find your favorite products" aria-label="Search"
              style= {{width : '500px', height : '35px', paddingLeft: '20px', borderRadius: '20px'}} />
            </ul>
            <div className="buttons">
            <Link to="/registration">
              <a className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-2"></i>Login</a>
</Link>
  <Link to="/cart">
                <a href="" className="btn btn-outline-dark ms-4">
                <i className="fa fa-shopping-cart me-2"></i>Cart ({items.length})</a>
                </Link>
                {/* <Link to="/cart">
                <a className="btn btn-outline-dark ms-4">
                <i className="fa fa-shopping-cart me-2"></i>Cart (0)</a>
                </Link> */}

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;