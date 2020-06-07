import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './src/Login';
import Cadastro from './src/Cadastro';


export default function Routes() {
    return (
    <NavigationContainer>
        <AppStack.Navigator ScreenOptions={{ headerShown: false}}>
        <AppStack.Screen name = "Login" component ={Login} />
        <AppStack.Screen name = "Cadastro" component ={Cadastro} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
}
