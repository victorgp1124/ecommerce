import React from 'react';
import '../styles/AccountEdit.scss';

const AccountEdit = () => {
    return ( 
        <div className="my_account-account_edit">
            <div className="form-container-account_edit">
                <h1 className="title-account_edit">My account</h1>
                <form action="" className="form-account_edit">
                    <div className="div-label-account_edit">
                        <label for="name" className="label-account_edit">Name</label>
                        <p className="value-account_edit">victor fajardo</p>
                    
                        <label for="email" className="label-account_edit">Email address</label>
                        <p className="value-account_edit">victorgp@gmail.com</p>

                        <label for="password" className="label-account_edit">Password</label>
                        <p className="value-account_edit">*********</p>
                    </div>
                    
                    <input type="submit" value="Edit" className="secondary-button-account_edit edit-button-account_edit"/>
                </form>  
            </div>
        </div>
    );
}

export default AccountEdit; 