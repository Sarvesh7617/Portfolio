import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import '../assets/style.css'
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'


const GototopBtn=()=>{
    
    const [isVisible,setVisible]=useState(false);
    const navigate=useNavigate()

    const goTop=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
        navigate('/')
    }

    const listenScroll=()=>{

        const windscroll=document.body.scrollTop || document.documentElement.scrollTop

        if (windscroll>150)
          setVisible(true)
        else
            setVisible(false)
          
    }

    useEffect(()=>{
        window.addEventListener('scroll',listenScroll);
        return () => window.removeEventListener('scroll', listenScroll);
    })
    return ( isVisible && (
    
            <div
            className="fixed bottom-5 right-5 text-blue-500 p-1 rounded-lg cursor-pointer z-1 text-5xl gototop"
            onClick={goTop}
            >
            <FaRegArrowAltCircleUp/>
            </div>
        )
    )
}


export default GototopBtn;