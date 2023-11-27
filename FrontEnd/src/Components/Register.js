import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details={email,password,name,
    role:"USER",
    }
    const validationErrors = {};
    console.log(details)
    if (!name.trim()) {
      validationErrors.name = "Username is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0){
      fetch("http://localhost:8080/auth/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(details)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(details));
        console.log(e);
        nav("/userlogin")
      })
    }
  };
  


  return (
    <div id="login-page">
      <div className="login">
        <h2 className="login-title">Register</h2>
        <p className="notice">Please enter the details</p>
        <form className="form-login" >
        <label htmlFor="username">Username</label>
        <div className="input-username">
          <i className="fas fa-user icon"></i>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.username && <p className="error">{errors.username}</p>}

        </div>
          <label htmlFor="email">Email</label>
          <div className="input-email">
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="input-password">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" onClick={handleSubmit}>
            <i className="fas fa-door-open"></i> Sign Up
          </button>
        </form>
        <br />
        <Link to="/userlogin">
          <p>Already have an account? Login here!</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;