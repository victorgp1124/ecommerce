import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => { 
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="login-login">
            <div className="form-container-login">
                <img src={logo} alt="logo" className="logo-login"/>
                <form action="" className="form-login" ref={form}>
                    <label for="email" className="label-login">Email address</label>
                    <input type="text" name="email" placeholder="victorgp@example.com" className="input-login input-email-login"/>

                    <label for="password" className="label-login">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input-login input-password-login"/>
                    <button className="primary-button-login login-button-login" onClick={handleSubmit}>Log in</button>
                    <a href="/">Forgot my password</a>
                </form>  
                <button className="secondary-button-login sing-up-button-login">Sing up</button>
            </div>
        </div>
    );
}

export default Login;