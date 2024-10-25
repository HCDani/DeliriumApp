import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabs from "./bottomTabs";
import home from "../screens/deliriumvaerktojet";
import symptomer from "../screens/symptomer";
import screeningsvaerktojer from "../screens/screeningsvaerktojer";
import findOgFjernArsagen from "../screens/findOgFjernArsagen";
import kommunikationMedDelirose from "../screens/kommunikationMedDelirose";
import praktiskeHandlinger from "../screens/praktiskeHandlinger";
import forebyggelse from "../screens/forebyggelse";
import differentialdiagnoser from "../screens/differentialdiagnoser";
import laesMere from "../screens/laesMere";


const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="deliriumvaerktojet">
            <Drawer.Screen name="Deliriumværktøjet" component={home} />
            <Drawer.Screen name="Symptomer" component={symptomer} />
            <Drawer.Screen name="Screeningsværktøjer" component={screeningsvaerktojer} />
            <Drawer.Screen name="Find og fjern årsagen " component={findOgFjernArsagen} />
            <Drawer.Screen name="Kommunikation med delirøse  " component={kommunikationMedDelirose} />
            <Drawer.Screen name="Praktiske handlinger  " component={praktiskeHandlinger} />
            <Drawer.Screen name="Forebyggelse  " component={forebyggelse} />
            <Drawer.Screen name="Differentialdiagnoser  " component={differentialdiagnoser} />
            <Drawer.Screen name="Læs mere  " component={laesMere} />
        </Drawer.Navigator>
    );
}
