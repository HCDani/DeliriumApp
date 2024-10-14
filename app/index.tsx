import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />} backBehavior="history" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
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