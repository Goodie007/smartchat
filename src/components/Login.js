import React, { Component, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';


async function loginUser(credentials) {
    return fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


export default function Login({ setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
      

        return (
            <form className="forms">
                <h3>Sign In</h3>

                <div className="form-group">
                    <div className="label">
                      <label>Username</label>
                    </div>
                    <div>
                       <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" 
                         placeholder="Enter Username" required />
                    </div>
                </div>

                <div className="form-group">
                    <div className="label">
                      <label>Password</label>
                    </div>
                    <div>
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" 
                           placeholder="Enter password"  required/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="have-account">
                    Not registered yet? <a href="#">sign up</a>
                </p>
                
            </form>
        );

        Login.propTypes = {
            setToken: PropTypes.func.isRequired
          }
    }
