import React from 'react';
import '../styles/reset_pass.scss';
import logo from '../assets/logos/logo_yard_sale.svg';


const ResetPass = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your account</p> 
                <form action="" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>
                    <label for="password" className="label">New Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                    <input type="submit" value="confirm" className="primary-button login-button"/>
                </form>  
            </div>
        </div>     
    );
}

export default ResetPass;