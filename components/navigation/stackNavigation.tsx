import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import { NavigationContainer } from "@react-navigation/native";

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
            <Stack.Screen name="Symptomer" component={symptomer} />
            <Stack.Screen name="Screeningsværktøjer" component={screeningsvaerktojer} />
            <Stack.Screen name="Årsagen" component={arsagen} />
            <Stack.Screen name="Kommunikation" component={kommunikation} />
            <Stack.Screen name="Handlinger" component={handlinger} />
            <Stack.Screen name="LæsMere" component={laesMere} />
            <Stack.Screen name="Pårørende" component={parorende} />
        </Stack.Navigator>
    );
}
