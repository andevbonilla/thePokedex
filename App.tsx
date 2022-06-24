import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './src/navigator/Navigator';
import { ThemeContextProvider } from './src/context/themeContext/ThemeContext';
import { MyTabs } from './src/navigator/Tabs';

const App = () => {
  return (

    <AppState>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
    </AppState>
    
  )
}


const AppState = ({children}:any) => {

  return (
    <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
  )

}

export default App;


