import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, Image } from 'react-native';

import home from "../screens/deliriumvaerktojet";
import symptomer from "../screens/symptomer";
import screeningsvaerktojer from "../screens/screeningsvaerktojer";
import arsagen from "../screens/arsagen";
import kommunikation from "../screens/kommunikation";
import handlinger from "../screens/handlinger";
import laesMere from "../screens/laesMere";
import parorende from "../screens/parorende";


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Stack.Navigator initialRouteName="deliriumvaerktojet">
            <Stack.Screen name="Deliriumværktøjet" component={home} />
            <Stack.Screen name="Symptomer" component={symptomer} options={{headerRight: () => (<Button title="Home"/>) }} />
            <Stack.Screen name="Screeningsværktøjer" component={screeningsvaerktojer} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Årsagen" component={arsagen} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Kommunikation" component={kommunikation} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Handlinger" component={handlinger} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="LæsMere" component={laesMere}  options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Pårørende" component={parorende}  options={{headerRight: () => (<Button title="Home"/>) }}  />
        </Stack.Navigator>
    );
}
