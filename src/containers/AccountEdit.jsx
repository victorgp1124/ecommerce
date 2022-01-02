import React from 'react';
import '../styles/AccountEdit.scss';

const AccountEdit = () => {
    return (
        <div className="my_account">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="" className="form">
                    <div className="div-label">
                        <label for="name" className="label">Name</label>
                        <p className="value">victor fajardo</p>
                    
                        <label for="email" className="label">Email address</label>
                        <p className="value">victorgp@gmail.com</p>

                        <label for="password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                    
                    <input type="submit" value="Edit" className="secondary-button edit-button"/>
                </form>  
            </div>
        </div>
    );
}

export default AccountEdit;