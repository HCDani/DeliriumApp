
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
        </View>
    );
}

function HospitalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hospital screen</Text>
        </View>
    );
}



export default function App() {
    return (
        <View>
            <Tab.Navigator tabBar={props => <TabBar {...props} />} backBehavior="history" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
            <Drawer.Navigator>
                <Drawer.Screen name="Hospital" component={HospitalScreen} />
            </Drawer.Navigator>
        </View>
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


