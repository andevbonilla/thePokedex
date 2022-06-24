import React, { createContext, useReducer } from "react";
import { lightTheme, themeReducer } from "./themeReducer";

export interface themeInterface {
    backgroundColor: string,
    textColor: string,
    mainPokeball: string
}

export interface themeInterfaceContex {
    theme: themeInterface,
    setDarkTheme: ()=> void;
    setLightTheme: ()=> void;
}

export const themeContext = createContext({} as themeInterfaceContex);

export const ThemeContextProvider = ({children}:any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme)

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
    }

    return (
        <themeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
            {children}
        </themeContext.Provider>
    )

}