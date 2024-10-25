import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "../components/navigation/drawerNavigation";
import StackNavigator from "../components/navigation/stackNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    return (
        <StackNavigator />
    );
}
