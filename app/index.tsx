import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "../components/navigation/drawerNavigation";

export default function App() {
    return (
        <DrawerNavigator />
    );
}
