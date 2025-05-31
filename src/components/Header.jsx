import React, { useState } from "react";
import {HashLink} from 'react-router-hash-link'
import Hamburger from 'hamburger-react'
import ThemeBtn from "./Themebtn";
import { useLocation } from "react-router-dom";


const Header=()=>{

    const [open,setOpen]=useState(false);
    const location=useLocation();

    return (
        <> 
        <header className="fixed z-50 dark:bg-gray-600 dark:text-white flex justify-between w-full p-4 bg-white shadow-sm shadow-black/8">
            <HashLink smooth to="/#home" 
                className="flex items-center dark:text-white text-xl pl-10 font-extrabold text-black hover:scale-110 transition-transform duration-300 font-[cursive]">
                &lt;Sarvesh <span className="text-red-500">Soni</span>/&gt;
            </HashLink>
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
                        <HashLink smooth to="/#home" className={`ml-8 dark:text-white text-lg font-medium hover:border-indigo-500 hover:border-b-2 text-black ${location.hash===`#home`? "bg-indigo-500 p-1 rounded-lg px-2":""}`}>
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#skill" className={`ml-8 dark:text-white text-lg font-medium hover:border-indigo-500 hover:border-b-2 text-black ${location.hash===`#skill`? "bg-indigo-500 p-1 rounded-lg px-2":""}`}>
                            Skill
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#project" className={`ml-8 dark:text-white text-lg font-medium hover:border-indigo-500 hover:border-b-2 text-black ${location.hash===`#project`? "bg-indigo-500 p-1 rounded-lg px-2":""}`}>
                            Project
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contact" className={`ml-8 dark:text-white text-lg font-medium hover:border-indigo-500 hover:border-b-2 text-black ${location.hash===`#contact`? "bg-indigo-500 p-1 rounded-lg px-2":""}`}>
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </header>
        {open && (
            <div className="md:hidden dark:bg-gray-600 fixed right-0 top-20 bg-white shadow shadow-8 rounded-b-md border-2 border-blue-100 border-t-0 p-4 text-start z-50">
                <ul className="flex flex-col gap-2">
                    {['home', 'skill', 'project', 'contact'].map((section)=>(
                    <li key={section}>
                        <HashLink smooth to={`/#${section}`} className={`dark:text-white text-lg font-medium hover:border-indigo-500 hover:border-b-2 text-black ${location.hash===`#${section}`? "bg-indigo-500 p-1 rounded-lg px-2":""}`}>
                            {section.charAt(0).toUpperCase()+section.slice(1)}
                        </HashLink>
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </>
    )
}

export default Header;