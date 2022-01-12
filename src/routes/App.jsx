import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@containers/Layout";

import Home from "@pages/Home";
import Login from "@pages/Login";
import SendEmail from "@pages/SendEmail";
import ResetPass from "@pages/ResetPass";
import MyAccount from "@pages/MyAccount";
import AccountEdit from "@pages/AccountEdit";
import Cart from "@containers/Cart";
import MyOrders from "@pages/MyOrders";
import PasswordRecovery from "@pages/PasswordRecovery";
import NotFound from "@pages/NotFound";

import '@styles/global.css';

const App = () => { 
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/recovery-password" element={<PasswordRecovery/>}/>
                    <Route path="/send-email" element={<SendEmail/>}/>
                    <Route path="/reset-password" element={<ResetPass/>}/>
                    <Route path="/my-account" element={<MyAccount/>}/>
                    <Route path="/account-edit" element={<AccountEdit/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/my-orders" element={<MyOrders/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;