import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Button,View } from 'react-native';

import home from "../screens/deliriumvaerktojet";
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator initialRouteName="Deliriumværktøjet" tabBar={props => <TabBar {...props} />} backBehavior="history" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Deliriumværktøjet" component={home} />
        </Tab.Navigator>
    );
}
 
 function TabBar({ navigation }) {
    return (
        <View>
        <Button
            title="Home"
            onPress={() => {
                // Navigate using the navigation prop that you received
                navigation.navigate('Home');
            }}
        />
         <Button
            title="Back"
            onPress={() => {
                //Navigate back to the previous screen.
                navigation.goBack();
            }}
        />
       </View>
    );
}