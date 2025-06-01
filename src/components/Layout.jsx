import React from "react";
import Header from './Header';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import GototopBtn from './GototopBtn.jsx'
import Particle from "./particle/Particle";

const Layout=()=>{
    return(
        <>
            <Particle/>
            <Header/>
                <Outlet/> 
                <ToastContainer />
                <GototopBtn/>
            <Footer/>
        </>
    )
}

export default Layout;