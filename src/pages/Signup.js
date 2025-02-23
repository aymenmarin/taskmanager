import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import { registerUser } from '../api';

function Signup() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error,setError] = useState('');
  const navigate = useNavigate('');
  

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("")
    try{
      const{data}= await registerUser({username,email,password});
      localStorage.setItem('token',data.token);
      login(data.userId); //Update context with us
      navigate('/'); //redirect to home after signup
    }catch(err){

    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
      <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
