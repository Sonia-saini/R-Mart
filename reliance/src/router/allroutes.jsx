import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/sonia/home'
import Productdetail from '../component/sonia/Productdetail'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/cart' element={<Home/>}></Route>
            <Route path='/signin' element={<Home/>}></Route>
            <Route path='/payment' element={<Home/>}></Route>
<Route path='/single' element={<Productdetail/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes