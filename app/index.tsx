import React from 'react';
/*import { Stack } from 'expo-router';*/
import Deliriumvaerktojet from "@/components/screens/deliriumvaerktojet";
import Handlinger from "@/components/screens/handlinger";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Arsagen from "@/components/screens/arsagen";
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Deliriumvaerktojet" component={Deliriumvaerktojet} />
                <Stack.Screen name="Arsagen" component={Arsagen} />
                <Stack.Screen name="Handlinger" component={Handlinger} />
            </Stack.Navigator>
        
    );
}
