import {Route, Routes} from 'react-router-dom';
import React from 'react'

import Mobiles from './mobiles/mobiles'
import Makeup from './makeup/makeup';
import {Iron} from './Iron/Iron';
import {Juicers} from './juicers/juicers'
import {Computers} from './computers/computers'
import {Camaras} from './camaras/camaras'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Makeup/>}/>
            <Route path='/mobiles' element={<Mobiles/>}/>
            <Route path='/Makeup' element= {<Makeup/>} />
            <Route path='/iron' element={<Iron/>}/>
            <Route path='juicers' element={<Juicers/>}/>
            <Route path='computers' element={<Computers/>}/>
            <Route path='cameras' element={<Camaras/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes