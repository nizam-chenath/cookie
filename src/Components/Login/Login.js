import React from 'react';
import { useState } from 'react';

import './Login.css';
import {useContext} from 'react'
import {FirebaseContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState('')

  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    
      history.push('/Welcome')
    }).catch((err)=>{
      alert(err.message)
    })
    
  }
  
  return (
    <div>
      <div className="loginParentDiv">
        {/* <img width="200px" height="200px" src={Logo}></img> */}
        <h2 className="logo-heading">Cookie</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            defaultValue="John"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
