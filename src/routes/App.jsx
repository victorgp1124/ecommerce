import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPass from "../containers/RecoveryPass";
import ResetPass from "../containers/ResetPass";
import MyAccount from "../containers/MyAccount";
import AccountEdit from "../containers/AccountEdit";
import Cart from "../containers/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Details from "../containers/Details";
import MobileMenu from "../containers/MobileMenu";
import Menu from "../containers/Menu";
import MyOrder from "../containers/MyOrder";
import MyOrders from "../containers/MyOrders";
import Principal from "../containers/Principal"
import '../styles/global.css';

const App = () => { 
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/resetpass" element={<ResetPass/>}/>
                    <Route path="/recoverypass" element={<RecoveryPass/>}/>
                    <Route path="/myaccount" element={<MyAccount/>}/>
                    <Route path="/accountedit" element={<AccountEdit/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/mobilemenu" element={<MobileMenu/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/myorder" element={<MyOrder/>}/>
                    <Route path="/myorders" element={<MyOrders/>}/>
                    <Route path="/principal" element={<Principal/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;