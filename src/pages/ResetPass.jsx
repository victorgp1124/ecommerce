import React from 'react';
import '../styles/ResetPass.scss';
import logo from '../assets/logos/logo_yard_sale.svg';


const ResetPass = () => {
    return (
        <div className="login-reset_pass">
            <div className="form-container-reset_pass">
                <img src={logo} alt="logo" className="logo-reset_pass"/>
                <h1 className="title-reset_pass">Create a new password</h1>
                <p className="subtitle-reset_pass">Enter a new password for your account</p> 
                <form action="" className="form-reset_pass">
                    <label for="password" className="label-reset_pass">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input-reset_pass input-password-reset_pass"/>
                    <label for="password" className="label-reset_pass">New Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input-reset_pass input-password-reset_pass"/>
                    <input type="submit" value="confirm" className="primary-button-reset_pass login-button-reset_pass"/>
                </form>  
            </div>
        </div>     
    );
}

export default ResetPass; 