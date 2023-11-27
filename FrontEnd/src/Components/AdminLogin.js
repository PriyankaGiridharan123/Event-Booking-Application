import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { getItem, setRole, setToken, setemail } from './LocalStorage';
function AdminLogin() {
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  // const[user,setUser]=useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };

      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="ADMIN"){
                nav("/dashboard");
              }
             
              else {
                alert("Invalid admin role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };
  

  return (
    <div id="login-page">
      <div className="login">
        <h2 className="login-title"> Admin Login</h2>
        <p className="notice">Check events!</p>
        <form className="form-login">
        <label htmlFor="username">Email</label> 
        <div className="input-username">
          <i className="fas fa-envelope icon"></i>
          <input
            type="email" 
            name="email" 
            placeholder="email" 
            required
            value={email}
            onChange={handleEmailChange} 
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <label htmlFor="password">Password</label>
          <div className="input-password">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
    
          <button type="submit" onClick={validate}>
            <i className="fas fa-door-open"></i> Sign in
          </button>
        </form>
        <br></br>
      </div>
    </div>
  );
}

export default AdminLogin;
