import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "./UseContext";



const Themeprovider=({children})=>{

    const [themeMode,setTheme]=useState('light');

    const darkMode=()=>{
        setTheme('dark')
    }

    const lightMode=()=>{
        setTheme('light')
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])
    return(
        <ThemeContextProvider value={{themeMode,darkMode,lightMode}}>
            {children}
        </ThemeContextProvider>
    )
}


export default Themeprovider