import { render } from '@testing-library/react'
import React from 'react'
import LoginForm from '../../Components/LoginForm';
import { BrowserRouter, Route} from 'react-router-dom';
import Registration from '../../Components/Registration';



const Login = () => {  
  var isLoggedIn = Route.name == 'login';
  return (
    <div>
      {isLoggedIn
        ? <LoginForm />
        : <Registration/>
      }      
    </div>
  )
}

export default Login
