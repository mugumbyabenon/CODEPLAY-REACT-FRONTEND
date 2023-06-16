import React, {useContext} from 'react'
import AuthContext,{ AuthProvider } from '../context/AuthContext'


function Register() {
    
  return (

    <div>
       <form  >
        <h3>Username  <span></span>
    <input name='username' type='text'></input></h3>
    <h3>Password <span> </span>
    <input name='password' type='password'></input></h3>

    <input type='submit' />
    </form></div>
  )
}

export default Register