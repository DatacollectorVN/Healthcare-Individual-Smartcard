import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src/Login';
import HomeScreen from './src/HomeScreen'
import QRScanner from './src/QRScanner';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App(){
    return (
      <NavigationContainer> 
        <Stack.Navigator
          // screenOptions={
          //   {
          //     header: () => null
          //   }
          // }
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            name="QRScanner"
            component={QRScanner}
          />
          
        </Stack.Navigator>
        {/* <Tab.Navigator>
            <Tab.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ tabBarIcon: () => <Text>😝</Text>}}
            />
            <Tab.Screen
              name="QrScanner"
              component={QRScanner}
              options={{ tabBarIcon: () => <Text>😎</Text>}}
            />
        </Tab.Navigator> */}
      
        
      </NavigationContainer>
    )
}

export default App;
