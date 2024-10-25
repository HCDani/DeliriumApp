import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button,View } from 'react-native';

import hjemme from "../screens/hjemme";
import hospital from "../screens/hospital";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator initialRouteName="screeningsvaerktojer" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="hjemme" component={hjemme} />
            <Tab.Screen name="hospital" component={hospital} />
        </Tab.Navigator>
    );
}
 
