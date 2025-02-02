import React, { useContext } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthContext } from './context/AuthContext';
import './styles/App.css';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="app-container">
      <Header title="Task Manager" />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        {!user ? (
          <>
            | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <button onClick={logout} className="logout-btn">Logout</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
