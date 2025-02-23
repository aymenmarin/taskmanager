import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { loginUser } from '../api';

function Login(){
  const {login}=useContext(AuthContext)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const [error,setError] =useState(null)
  const navigate =useNavigate();
  const handleLogin = async (e)=>{
      e.preventDefault();
      setError(null);
      try {
          const response = await loginUser({email,password})
          if (response.status===200){
              const {token,userId,username}=response.data;
              login (token,userId,username);
              navigate('/');
          }
         
          }
          catch (err){
              setError('invalid email or password')
      }
  }
  return(
      <div className="auth-container">
          <h2>Login</h2>
          {error&& <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
              <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
              <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
              <button type="submit">Login</button>
          </form>
          <p>don't have an account? ? <a href="/Signup"></a>Login</p>
      </div>

  )


}
export default Login