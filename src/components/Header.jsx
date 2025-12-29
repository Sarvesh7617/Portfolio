import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import ThemeBtn from "./Themebtn";


const Header=({activeSec,setSection})=>{

    const [open,setOpen]=useState(false);

    const scrollToSection=(id)=>{
        let el=document.getElementById(id)
        if(el)
        {
          el.scrollIntoView({behavior:"smooth"})
          setSection(id);
        }
    }

    return (
        <> 
        <header className="fixed z-50 dark:bg-gray-600 dark:text-white flex justify-between w-full p-4 bg-white shadow-sm shadow-black/8">
            <button onClick={() => scrollToSection('home')} 
                className="flex items-center dark:text-white text-xl pl-10 font-extrabold text-black hover:scale-110 transition-transform duration-300 font-[cursive]">
                &lt;Sarvesh <span className="text-red-500">Soni</span>/&gt;
            </button>
            <div className="md:hidden flex items-center gap-3">
                <ThemeBtn/>
                <div className="border-2 rounded-lg">
                    <Hamburger size={25} toggled={open} toggle={setOpen}
                    />
                </div>
            </div>
            <nav className="hidden md:flex">
                <ul className="flex itmes-center">
                    <ThemeBtn/>
                    <li>
                        <button onClick={() => scrollToSection('home')} className={`ml-8 dark:text-white text-lg font-medium text-black cursor-pointer ${activeSec===`home`? "bg-indigo-500 p-1 rounded-lg px-2":"hover:underline underline-offset-4"}`}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skill')} className={`ml-8 dark:text-white text-lg font-medium text-black cursor-pointer ${activeSec===`skill`? "bg-indigo-500 p-1 rounded-lg px-2":"hover:underline underline-offset-4"}`}>
                            Skill
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('project')} className={`ml-8 dark:text-white text-lg font-medium text-black cursor-pointer ${activeSec===`project`? "bg-indigo-500 p-1 rounded-lg px-2":"hover:underline underline-offset-4"}`}>
                            Project
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')} className={`ml-8 dark:text-white text-lg font-medium text-black cursor-pointer ${activeSec===`contact`? "bg-indigo-500 p-1 rounded-lg px-2":"hover:underline underline-offset-4"}`}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        {open && (
            <div className="md:hidden dark:bg-gray-600 fixed right-0 top-20 bg-white shadow shadow-8 rounded-b-md border-2 border-blue-100 border-t-0 p-4 text-start z-50">
                <ul className="flex flex-col gap-2">
                    {['home', 'skill', 'project', 'contact'].map((section)=>(
                    <li key={section}>
                        <button onClick={() => scrollToSection(`${section}`)} className={`dark:text-white text-lg font-medium text-black cursor-pointer ${activeSec===`${section}`? "bg-indigo-500 p-1 rounded-lg px-2":"hover:underline underline-offset-4"}`}>
                            {section.charAt(0).toUpperCase()+section.slice(1)}
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}

export default Header;