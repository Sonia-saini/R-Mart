import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../component/sonia/home'

function allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/cart' element={<Home/>}></Route>
            <Route path='/signin' element={<Home/>}></Route>
            <Route path='/payment' element={<Home/>}></Route>

        </Routes>
    </div>
  )
}

export default allroutes