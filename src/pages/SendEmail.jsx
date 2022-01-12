import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const RecoveryPass = () => {
    return ( 
        <div className="login-SendEmail">
            <div className="form-container-SendEmail">
                <img src={logo} alt="logo" className="logo-SendEmail"/>
                <h1 className="title-SendEmail">Email has been sent!</h1>
                <p className="subtitle-SendEmail">Please check your inbox for instructions on how to reset the password</p> 
                <div className="email-image-SendEmail">
                    <img src={email} alt="email" />
                </div>
                <button className="primary-button-SendEmail login-button-SendEmail">Login</button>
                <p className="resend-SendEmail">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div> 
        </div>  
    );
}

export default RecoveryPass;