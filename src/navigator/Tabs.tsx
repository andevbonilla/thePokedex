import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { Navigator } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/themeContext/ThemeContext';

const Tab = createBottomTabNavigator();

const {theme} = useContext(themeContext)

export const MyTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{ 
            tabBarActiveTintColor: '#5856D5',
            tabBarStyle: { 
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.9)', 
                paddingBottom: ( Platform.OS === 'ios') ? 0 : 10, 
                paddingTop: 10,
                borderWidth: 0,
                elevation: 0,
                height: 66,
            },
            headerShown:false
        }}
    >
      <Tab.Screen 
            options={{
                title: 'List',
                tabBarLabelStyle: {fontSize: 14},
                tabBarIcon: ({color})=><Icon name='list-outline' color={color} size={26} />
            }}
            name="PrincipalScreen" 
            component={Navigator} />
      <Tab.Screen
            options={{
                title: 'Search',
                tabBarLabelStyle: {fontSize: 14},
                tabBarIcon: ({color})=><Icon name='search-outline' color={color} size={26} />
            }} 
            name="Settings" 
            component={SearchScreen} />


    </Tab.Navigator>
  );
}