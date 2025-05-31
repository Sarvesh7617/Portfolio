import { createContext,useContext } from "react";



export const UserContext=createContext({

    themeMode:'light',
    darkMode:()=>{},
    lightMode:()=>{}    
})




export const ThemeContextProvider=UserContext.Provider;


const useTheme=()=>{
    return useContext(UserContext)
}


export default useTheme;