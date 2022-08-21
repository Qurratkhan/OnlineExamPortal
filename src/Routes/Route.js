import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from '../Pages/Auth/Login';


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path='/'/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Login/>}/>
        </Routes> 
      </BrowserRouter>
  )
}

export default Router
