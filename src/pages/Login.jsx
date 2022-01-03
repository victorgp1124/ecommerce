import React from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/logo_yard_sale.svg';

const Login = () => { 
    return (
        <div className="login-login">
            <div className="form-container-login">
                <img src={logo} alt="logo" className="logo-login"/>
                <form action="" className="form-login">
                    <label for="email" className="label-login">Email address</label>
                    <input type="text" id="password" placeholder="victorgp@example.com" className="input-login input-email-login"/>

                    <label for="password" className="label-login">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input-login input-password-login"/>
                    <input type="submit" value="Log in" className="primary-button-login login-button-login"/>
                    <a href="/">Forgot my password</a>
                </form>  
                <button className="secondary-button-login sing-up-button-login">Sing up</button>
            </div>
        </div>
    );
}

export default Login;