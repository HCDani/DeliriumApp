import React from 'react';
/*import { Stack } from 'expo-router';*/
import Deliriumvaerktojet from "@/components/screens/deliriumvaerktojet";
import Handlinger from "@/components/screens/handlinger";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Arsagen from "@/components/screens/arsagen";
import Screeningsvaerktojer from "@/components/screens/screeningsvaerktojer";
import Kommunikation from "@/components/screens/kommunikation";
import LaesMere from "@/components/screens/laesMere";
import Parorende from "@/components/screens/parorende";
import Symptomer from "@/components/screens/symptomer";
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: true,title: "Deliriumværktøjet" }}>
                <Stack.Screen name="Deliriumvaerktojet" component={Deliriumvaerktojet} />
                <Stack.Screen name="Screeningsværktøjer" component={Screeningsvaerktojer} />
                <Stack.Screen name="Årsagen" component={Arsagen} />
                <Stack.Screen name="Handlinger" component={Handlinger} />
                <Stack.Screen name="Kommunikation" component={Kommunikation} />
                <Stack.Screen name="LæsMere" component={LaesMere} />
                <Stack.Screen name="Pårørende" component={Parorende } />
                <Stack.Screen name="Symptomer" component={Symptomer } />
            </Stack.Navigator>
        
    );
}
