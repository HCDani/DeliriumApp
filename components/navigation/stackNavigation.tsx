import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, Image } from 'react-native';

import home from "../screens/deliriumvaerktojet";
import main from "../screens/main";
import screeningsvaerktojer from "../screens/screeningsvaerktojer";
import arsagen from "../screens/arsagen";
import kommunikation from "../screens/kommunikation";
import handlinger from "../screens/handlinger";
import laesMere from "../screens/laesMere";
import parorende from "../screens/parorende";
import webPage from "../screens/webPage"; // Import WebPage component
import about from "../screens/about";


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Home Screen">
            <Stack.Screen name="Profesional Staff" component={home} />
            <Stack.Screen name="Home Screen" component={main}  />
            <Stack.Screen name="Screeningsværktøjer" component={screeningsvaerktojer} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Årsagen" component={arsagen} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Kommunikation" component={kommunikation} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Handlinger" component={handlinger} options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="LæsMere" component={laesMere}  options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="Pårørende" component={parorende}  options={{headerRight: () => (<Button title="Home"/>) }}  />
            <Stack.Screen name="about" component={about} options={{ title: "Information og ansvarsfraskrivelse" }}/>
            <Stack.Screen name="WebView" component={webPage} options={{ title: "Web Page" }} />
        </Stack.Navigator>
    );
}
