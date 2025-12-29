import {useState} from "react";
import Header from './Header';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import GototopBtn from './GototopBtn.jsx'
import Particle from "./particle/Particle";

const Layout=()=>{
    const [activeSec,setSection]=useState('home')
    return(
        <>
            <Particle/>
            <Header activeSec={activeSec} setSection={setSection}/>
                <Outlet/> 
                <ToastContainer />
                <GototopBtn setSection={setSection}/>
            <Footer/>
        </>
    )
}

export default Layout;