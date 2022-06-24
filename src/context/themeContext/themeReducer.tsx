import { themeInterface } from "./ThemeContext"

type themeReducerTypes = 
| {type:'set_light_theme'}
| {type:'set_dark_theme'}

export const lightTheme: themeInterface = {
    backgroundColor: 'white',
    textColor: 'black',
    mainPokeball: 'pokebola'
}

export const darkTheme: themeInterface = {
    backgroundColor: '#313131',
    textColor: 'rgba(255,255,255,0.9)',
    mainPokeball: 'pokebola-blanca'
}


export const themeReducer = (state:any, action:themeReducerTypes) => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}

        case 'set_dark_theme':
            return {...darkTheme}
    
        default:
            return state
    }
}