import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "../components/navigation/drawerNavigation";
import StackNavigator from "../components/navigation/stackNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import checkConnectivity from "./persistance/checkConnectivity"
import fetchPageLinks from './persistance/fetchPageLinks'; // Adjust path as necessary

export default function App() {
    const conectivity = checkConnectivity()
    
    checkConnectivity().then(isConnected => {
      if (isConnected) {
        console.log('Connected to the internet');
        fetchPageLinks();
      } else {
        console.log('No internet connection');
      }
    });
    

    return (
        <StackNavigator />
    );
}
