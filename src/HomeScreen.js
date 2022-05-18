import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import QRScanner from './QRScanner';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
export default function HomeScreen({ navigation, route }) {
    
    const name = route.params;
    return (
        
        <View style={styles.body}>
            <Text style={styles.text}>
                You are registered as {name}
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})