import React, { Component } from "react";


export default class Register extends Component {
    render() {
        return (
            <form className="forms">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <div className="label">
                        <label>Username</label>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                
                <div className="form-group">
                    <div className="label">
                        <label>Email address</label>
                    </div>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <div className="label">
                        <label>Password</label>
                    </div>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="Login">sign in?</a>
                </p>
        </form>
        );
    }
}