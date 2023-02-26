import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Address from '../pages/Address'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Kids from '../pages/Kids'
import Login from '../pages/Login'
import Men from '../pages/Men'
import PaymentPage from '../pages/PaymentPage'
import Register from '../pages/Register'
import Women from '../pages/Women'
import Cart from './CartPage'
import MenDetailsPage from '../pages/MenDetailsPage'
import WomenDetailsPage from '../pages/WomenDetailsPage'
import KidsDetailsPage from '../pages/KidsDetailsPage'


function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/women' element={<Women />}></Route>
      <Route path='/men' element={<Men />}></Route>
      <Route path='/kids' element={<Kids />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/address' element={<Address />}></Route>
      <Route path='/payment' element={<PaymentPage />}></Route>
      <Route path='/admin' element={<Admin   />}></Route>
      <Route path='/men/:id' element={<MenDetailsPage/>} />
      <Route path='/women/:id' element={<WomenDetailsPage/>} />
      <Route path='/kids/:id' element={<KidsDetailsPage/>} />
  
    </Routes>
  )
}

export default AllRoutes