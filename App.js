import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src-medicine-app/Login';
import QRScanner from './src-medicine-app/QRScanner';
import SearchNearBy from './src-medicine-app/SearchNearBy';
import MapDirection from './src-medicine-app/MapDirection';
import HomeScreen from './src-medicine-app/HomeScreen';
import ProfileUser from './src-medicine-app/Profile';
const Stack = createStackNavigator();

function App(){
    return (
      <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="QRScanner"
            component={QRScanner}
          />
          <Stack.Screen
            name="SearchNearBy"
            component={SearchNearBy}
          />
          <Stack.Screen
            name="MapDirection"
            component={MapDirection}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            name="ProfileUser"
            component={ProfileUser}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
