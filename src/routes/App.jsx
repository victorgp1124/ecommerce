import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SendEmail from "../pages/SendEmail";
import ResetPass from "../pages/ResetPass";
import MyAccount from "../pages/MyAccount";
import AccountEdit from "../pages/AccountEdit";
import Cart from "../containers/Cart";
import MyOrders from "../pages/MyOrders";
import PasswordRecovery from "../pages/PasswordRecovery";
import NotFound from "../pages/NotFound";

import '../styles/global.css';

const App = () => { 
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/passwordrecovery" element={<PasswordRecovery/>}/>
                    <Route path="/sendemail" element={<SendEmail/>}/>
                    <Route path="/resetpass" element={<ResetPass/>}/>
                    <Route path="/myaccount" element={<MyAccount/>}/>
                    <Route path="/accountedit" element={<AccountEdit/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/myorders" element={<MyOrders/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;