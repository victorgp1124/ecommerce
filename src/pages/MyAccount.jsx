import React from 'react'
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="my_account-my_account"> 
            <div className="form-container-my_account">
                <h1 className="title-my_account">My account</h1>
                <form action="" className="form-my_account">
                    <div className="div-label-my_account">
                        <label for="name" className="label-my_account">Name</label>
                        <input type="text" id="name" placeholder="victor fajardo" className="input-my_account input-name-my_account"/>
                    
                        <label for="email" className="label-my_account">Email address</label>
                        <input type="text" id="email" placeholder="victorgp@example.com" className="input-my_account input-email-my_account"/>

                        <label for="password" className="label-my_account">Password</label>
                        <input type="password" id="new-password" placeholder="*********" className="input-my_account input-password-my_account"/>
                    </div>
                    <input type="submit" value="Edit" className="primary-button-my_account edit-button-my_account"/>
                </form>  
            </div>
        </div>
    );
}

export default MyAccount;