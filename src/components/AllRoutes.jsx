import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Kids from '../pages/Kids'
import Login from '../pages/Login'
import Men from '../pages/Men'
import Register from '../pages/Register'
import SingleProductPage from '../pages/SingleProductPage'
import Women from '../pages/Women'
import Cart from './Cart'
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/women' element={<Women />}></Route>
      <Route path='/men' element={<Men />}></Route>
      <Route path='/kids' element={<Kids />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<Login />}>LOGIN</Route>
      <Route path='/register' element={<Register />}>REGISTER</Route>
      <Route path='/men/:id' element={<SingleProductPage/>} />
      <Route path='/women/:id' element={<SingleProductPage/>} />
      <Route path='/kids/:id' element={<SingleProductPage/>} />
    </Routes>
  )
}

export default AllRoutes