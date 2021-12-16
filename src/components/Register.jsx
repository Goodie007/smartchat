import React, { useState } from "react";






export default function Register() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const summit = await registerUser({
          username,
          email,
          password
        });
    }

    async function registerUser() {
        const items = {username, email, password}

        const register = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify()
        })
        register = await register.json()
        localStorage.setItem("user-info", JSON.stringify(register))
        


         .then(data => data.json())
    }

        return (
            <form className="forms">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <div className="label">
                        <label>Username</label>
                    </div>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
                </div>
                
                <div className="form-group">
                    <div className="label">
                        <label>Email address</label>
                    </div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <div className="label">
                        <label>Password</label>
                    </div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="Login">sign in?</a>
                </p>
        </form>
    );
};