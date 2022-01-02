import React from 'react'
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="my_account">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="" className="form">
                    <div className="div-label">
                        <label for="name" className="label">Name</label>
                        <input type="text" id="name" placeholder="victor fajardo" className="input input-name"/>
                    
                        <label for="email" className="label">Email address</label>
                        <input type="text" id="email" placeholder="victorgp@example.com" className="input input-email"/>

                        <label for="password" className="label">Password</label>
                        <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                    </div>
                    
                    <input type="submit" value="Edit" className="primary-button edit-button"/>
                </form>  
            </div>
        </div>
    );
}

export default MyAccount;