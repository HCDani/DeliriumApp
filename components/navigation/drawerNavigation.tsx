import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./bottomTabs";
import home from "../screens/deliriumvaerktojet"
import symptomer from "../screens/symptomer";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="Tab">
            <Drawer.Screen name="Tab" component={BottomTabs} />
            <Drawer.Screen name="Symptomer" component={symptomer} />
        </Drawer.Navigator>
    );
}
